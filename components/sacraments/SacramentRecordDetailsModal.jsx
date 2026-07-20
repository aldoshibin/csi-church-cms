"use client";

import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function SacramentRecordDetailsModal({ open, onOpenChange, record }) {
  if (!record) return null;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Sacramental Record Details" size="md">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input label="Name" value={record.name} disabled readOnly />
        <Input label="Sacrament" value={record.sacrament} disabled readOnly />
        <Input label="Date" value={record.date} disabled readOnly />
        <Input label="Officiated By" value={record.officiatedBy} disabled readOnly />
        <Input label="Location" value={record.location} disabled readOnly />
        <Input label="Status" value={record.status} disabled readOnly />
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>Close</Button>
      </div>
    </Modal>
  );
}
