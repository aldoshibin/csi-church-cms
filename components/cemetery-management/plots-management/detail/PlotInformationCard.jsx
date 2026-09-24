"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate, formatDateTime } from "@/lib/utils";
import { PLOT_STATUS_VARIANT } from "@/lib/mock/vmCemeteryMockData";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children ?? "–"}</div>
    </div>
  );
}

export function PlotInformationCard({ plot }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Plot Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Plot No.">{plot.plotNumber}</Field>
        <Field label="Dimensions">{plot.dimensions}</Field>
        <Field label="Section">{plot.section}</Field>
        <Field label="Depth">{plot.depth}</Field>
        <Field label="Row">{plot.row}</Field>
        <Field label="Created On">{formatDateTime(plot.createdOn)}</Field>
        <Field label="Grave No.">{plot.graveNumber}</Field>
        <Field label="Last Updated">{formatDateTime(plot.updatedOn)}</Field>
        <Field label="Plot Type">{plot.plotType}</Field>
        <Field label="Created By">{plot.createdBy}</Field>
        <Field label="Area / Zone">{plot.areaZone}</Field>
        <Field label="Remarks">{plot.remarks || "-"}</Field>
        <Field label="Status">
          <Badge variant={PLOT_STATUS_VARIANT[plot.status] ?? "default"}>{plot.status}</Badge>
        </Field>
        {plot.assignedTo && (
          <Field label="Assigned To">{plot.assignedTo.name} ({plot.assignedTo.refId})</Field>
        )}
      </div>
    </div>
  );
}
