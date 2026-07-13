"use client";

import * as React from "react";
import { Upload } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { PhotoAvatar } from "./PhotoAvatar";
import { memberService } from "@/services/memberService";
import { useToast } from "@/contexts/ToastContext";


export function UploadPhotoModal({ open, onOpenChange, member, onUploaded }) {
  const { toast } = useToast();
  const [file, setFile] = React.useState(null);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setFile(null);
      setPreviewUrl(null);
    }
  }, [open]);

  const handleSelect = (f) => {
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  const handleUpload = async () => {
    if (!file) return;
    if (!member) {
      toast({ variant: "error", title: "Select a member first", description: "Use the table's upload icon to choose who this photo is for." });
      return;
    }
    setIsUploading(true);
    try {
      await memberService.uploadPhoto(member.id, file);
      toast({ variant: "success", title: "Photo uploaded" });
      onOpenChange(false);
      onUploaded?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not upload photo", description: error?.response?.data?.detail || error?.message });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title={member ? "Upload / Replace Photo" : "Add Photo for Member"} size="sm">
      {member ? (
        <Input label="Member" value={member.full_name} disabled readOnly />
      ) : (
        <div className="rounded-md bg-warning-50 p-3 text-xs text-warning-700">
          No member selected. Open this from a row's upload icon in the table instead — this quick action doesn't have a member search wired up yet.
        </div>
      )}

      <div className="mt-4 flex flex-col items-center gap-3">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="h-24 w-24 rounded-full object-cover" />
        ) : (
          member && <PhotoAvatar member={member} size="lg" />
        )}
        <input ref={inputRef} type="file" accept="image/jpeg,image/png" className="hidden" onChange={(e) => e.target.files?.[0] && handleSelect(e.target.files[0])} />
        <Button type="button" variant="secondary" size="sm" leftIcon={<Upload className="h-4 w-4" />} onClick={() => inputRef.current?.click()}>
          {file ? "Choose a different file" : "Choose file"}
        </Button>
        <p className="text-xs text-ink-subtle">JPG or PNG, max 2MB, 500x500px recommended</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button type="button" onClick={handleUpload} isLoading={isUploading} disabled={!file || !member}>Upload</Button>
      </div>
    </Modal>
  );
}
