"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { memberService } from "@/services/memberService";
import { useToast } from "@/contexts/ToastContext";


export function RemovePhotoModal({ open, onOpenChange, member, onRemoved }) {
  const { toast } = useToast();
  const [isRemoving, setIsRemoving] = React.useState(false);

  const handleRemove = async () => {
    if (!member) return;
    setIsRemoving(true);
    try {
      await memberService.update(member.id, { photo: null });
      toast({ variant: "success", title: "Photo removed" });
      onOpenChange(false);
      onRemoved?.();
    } catch (error) {
      toast({ variant: "error", title: "Could not remove photo", description: error?.response?.data?.detail || error?.message });
    } finally {
      setIsRemoving(false);
    }
  };

  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Remove Photo" size="sm">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning-500" />
        <p className="text-sm text-ink">
          Remove the photo for <span className="font-semibold">{member.full_name}</span>? This can't be undone from here.
        </p>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Cancel</Button>
        <Button type="button" variant="danger" onClick={handleRemove} isLoading={isRemoving}>Remove</Button>
      </div>
    </Modal>
  );
}
