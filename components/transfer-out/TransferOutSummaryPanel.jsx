"use client";

import { User } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="border-b border-border py-2.5 last:border-0">
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="text-sm font-medium text-ink">{value || "—"}</p>
    </div>
  );
}

export function TransferOutSummaryPanel({ memberName, dateOfBirth, membershipNo, currentChurch, destinationChurch, transferOutDate, requestType }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Transfer Summary (Preview)</h2>
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
          <User className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{memberName || ""}</p>
          <span className="rounded-full bg-interactive-50 px-2.5 py-0.5 text-xs font-medium text-interactive-600">Draft</span>
        </div>
      </div>
      <Row label="Member Name" value={memberName} />
      <Row label="Date of Birth" value={dateOfBirth} />
      <Row label="Membership No." value={membershipNo} />
      <Row label="Current Church" value={currentChurch} />
      <Row label="Destination Church" value={destinationChurch} />
      <Row label="Transfer Out Date" value={transferOutDate} />
      <Row label="Request Type" value={requestType} />
      <div className="pt-2.5">
        <p className="mb-1 text-xs text-ink-subtle">Status</p>
        <span className="rounded-full bg-interactive-50 px-2.5 py-0.5 text-xs font-medium text-interactive-600">Draft</span>
      </div>
    </section>
  );
}
