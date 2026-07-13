"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";


export function CommitteeViewDetailsModal({ committee, open, onOpenChange }) {
  if (!committee) return null;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="View Details"
      footer={<Button onClick={() => onOpenChange(false)}>Close</Button>}
    >
      <div>
        <p className="text-base font-bold text-ink">{committee.name}</p>
        <p className="mt-2 text-sm text-ink-subtle">
          Status, activity count, member participation and schedule details are shown here.
        </p>
      </div>
    </Modal>
  );
}
