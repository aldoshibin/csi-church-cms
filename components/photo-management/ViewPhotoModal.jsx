"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { PhotoAvatar } from "./PhotoAvatar";

export function ViewPhotoModal({ open, onOpenChange, member }) {
  if (!member) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Member Photo" size="sm">
      <div className="flex flex-col items-center gap-3 py-2">
        <PhotoAvatar member={member} size="lg" />
        <div className="text-center">
          <p className="font-semibold text-ink">{member.full_name}</p>
          <p className="text-sm text-ink-subtle">{member.membership_number}</p>
          <p className="text-sm text-ink-subtle">{member.ministry_group}</p>
        </div>
        {!member.has_photo && <p className="text-xs text-warning-600">No photo uploaded yet.</p>}
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
