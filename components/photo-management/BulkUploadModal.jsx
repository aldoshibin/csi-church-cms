"use client";

import * as React from "react";
import { Upload, X, FileImage } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { memberService } from "@/services/memberService";
import { useToast } from "@/contexts/ToastContext";
import { MEMBER_PHOTOS_MOCK } from "@/lib/mock/memberPhotosMock";


export function BulkUploadModal({ open, onOpenChange, onUploaded }) {
  const { toast } = useToast();
  const [files, setFiles] = React.useState([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) setFiles([]);
  }, [open]);

  const addFiles = (fileList) => {
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const matchMember = (file) =>
    MEMBER_PHOTOS_MOCK.find((m) => file.name.toLowerCase().includes(m.membership_number.split("/").pop().toLowerCase()));

  const handleUpload = async () => {
    if (files.length === 0) return;
    setIsUploading(true);
    let uploaded = 0;
    let unmatched = 0;
    for (const file of files) {
      const member = matchMember(file);
      if (!member) {
        unmatched += 1;
        continue;
      }
      try {
        await memberService.uploadPhoto(member.id, file);
        uploaded += 1;
      } catch {
        unmatched += 1;
      }
    }
    setIsUploading(false);
    onOpenChange(false);
    onUploaded?.();
    if (unmatched > 0) {
      toast({
        variant: "warning",
        title: `${uploaded} uploaded, ${unmatched} skipped`,
        description: "Skipped files didn't match a member by filename — rename to include their membership number.",
      });
    } else {
      toast({ variant: "success", title: `${uploaded} photo${uploaded === 1 ? "" : "s"} uploaded` });
    }
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Bulk Upload Photos" size="md">
      <p className="mb-3 text-xs text-ink-subtle">
        Name each file to include the member's membership number (e.g. "0045-aaron.jpg") so it can be matched automatically.
      </p>

      <input ref={inputRef} type="file" accept="image/jpeg,image/png" multiple className="hidden" onChange={(e) => e.target.files && addFiles(e.target.files)} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-canvas px-4 py-8 text-center hover:border-interactive-400 hover:bg-interactive-50/40"
      >
        <Upload className="h-6 w-6 text-interactive-500" />
        <span className="text-sm font-medium text-ink">Click to choose photos</span>
        <span className="text-xs text-ink-subtle">JPG or PNG, max 2MB each</span>
      </button>

      {files.length > 0 && (
        <ul className="mt-3 max-h-40 space-y-1.5 overflow-y-auto">
          {files.map((f, idx) => (
            <li key={idx} className="flex items-center justify-between rounded-md border border-border px-3 py-1.5 text-sm">
              <span className="flex min-w-0 items-center gap-2 truncate text-ink">
                <FileImage className="h-4 w-4 shrink-0 text-ink-subtle" /> {f.name}
              </span>
              <button type="button" onClick={() => removeFile(idx)} className="text-ink-subtle hover:text-danger-500">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button type="button" onClick={handleUpload} isLoading={isUploading} disabled={files.length === 0}>
          Upload {files.length > 0 && `(${files.length})`}
        </Button>
      </div>
    </Modal>
  );
}
