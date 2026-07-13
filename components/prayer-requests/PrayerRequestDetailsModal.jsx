"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";


export function PrayerRequestDetailsModal({ request, open, onOpenChange, onEdit }) {
  if (!request) return null;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Prayer Request Details"
      footer={
        <>
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button onClick={() => onEdit?.(request)}>Edit Request</Button>
        </>
      }
    >
      <div className="space-y-3">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <DetailField label="Date" value={`${request.date} ${request.time}`} />
          <DetailField label="Requested By" value={`${request.requestedBy} ${request.requestedByLocation}`} />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <DetailField
            label="Request For"
            value={`${request.requestFor}${request.requestForRelation !== "—" ? ` ${request.requestForRelation}` : ""}`}
          />
          <DetailField label="Category" value={request.category} />
        </div>
        <DetailField label="Status" value={request.status} />
        <DetailField label="Details" value={request.details} />
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
