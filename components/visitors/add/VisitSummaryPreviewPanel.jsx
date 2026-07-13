"use client";

import { User } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-xs text-ink-subtle">{label}</span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </div>
  );
}

export function VisitSummaryPreviewPanel({ fullName, visitDate, purpose, source, companionsCount }) {
  const hasAnyData = fullName || purpose || source || companionsCount > 0;

  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Visit Summary (Preview)</h2>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
          <User className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1 divide-y divide-border">
          <Row label="Name" value={fullName || "—"} />
          <Row label="Visit Date" value={visitDate || "—"} />
          <Row label="Purpose" value={purpose || "—"} />
          <Row label="Source" value={source || "—"} />
          <Row label="Companions" value={companionsCount} />
        </div>
      </div>

      {!hasAnyData && (
        <p className="rounded-md bg-surface-muted p-3 text-center text-xs text-ink-subtle">
          Fill in the details to see the summary.
        </p>
      )}
    </section>
  );
}
