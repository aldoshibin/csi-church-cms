"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { BURIAL_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children ?? "–"}</div>
    </div>
  );
}

export function BurialInformationCard({ burial, recordNumber, status }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Burial Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Burial ID">{recordNumber}</Field>
        <Field label="Plot No.">{burial.plotNumber}</Field>
        <Field label="Burial Date">{formatDate(burial.dateOfBurial)}</Field>
        <Field label="Section">{burial.section}</Field>
        <Field label="Burial Time">{burial.timeOfBurial}</Field>
        <Field label="Burial Type">{burial.burialType}</Field>
        <Field label="Recorded By">{burial.recordedBy}</Field>
        <Field label="Service Type">{burial.serviceType}</Field>
        <Field label="Remarks">{burial.remarks || "-"}</Field>
        <Field label="Status">
          <Badge variant={BURIAL_STATUS_VARIANT[status] ?? "default"}>{status}</Badge>
        </Field>
      </div>
    </div>
  );
}
