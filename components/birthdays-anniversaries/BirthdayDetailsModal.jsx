"use client";

import { Modal } from "@/components/ui/Modal";


export function BirthdayDetailsModal({ record, open, onOpenChange }) {
  if (!record) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Birthday Details">
      <div>
        <p className="text-base font-bold text-ink">{record.name}</p>
        <p className="mt-1 text-sm text-ink">Age: {record.age}</p>
        <p className="text-sm text-ink">{record.location}</p>
      </div>
    </Modal>
  );
}
