"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";


export function SacramentRecordDetailsModal({ record, open, onOpenChange, onEdit }) {
  if (!record) return null;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Sacrament Record Details"
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => onEdit?.(record)}>Edit Record</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <DetailField label="Name" value={record.name} />
        <DetailField label="Sacrament" value={record.sacramentType} />
        <DetailField label="Location" value={record.location} />
        <DetailField label="Officiated By" value={record.officiatedBy} />
      </div>
    </Modal>
  );
}

function DetailField({ label, value }) {
  return (
    <div className="rounded-md border border-border px-4 py-3">
      <p className="text-sm text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-base font-bold text-ink">{value}</p>
    </div>
  );
}
