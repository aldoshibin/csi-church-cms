"use client";

import { Modal } from "@/components/ui/Modal";


export function AnniversaryDetailsModal({ record, open, onOpenChange }) {
  if (!record) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Anniversary Details">
      <div>
        <p className="text-base font-bold text-ink">{record.names}</p>
        <p className="mt-1 text-sm text-ink">{record.yearsMarried} years married</p>
        <p className="text-sm text-ink">{record.location}</p>
      </div>
    </Modal>
  );
}
