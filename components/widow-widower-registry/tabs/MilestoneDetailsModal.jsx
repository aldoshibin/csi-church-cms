"use client";

import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function MilestoneDetailsModal({ open, onOpenChange, milestone }) {
  if (!milestone) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Milestone Details" size="sm">
      <div className="space-y-4">
        <Input label="Title" value={milestone.title} disabled readOnly />
        <Input label="Date" value={`${milestone.day} ${milestone.month}`} disabled readOnly />
        <Input label="Details" value={milestone.description} disabled readOnly />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
