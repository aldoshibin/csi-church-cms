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

export function TransferSummaryPanel({ memberName, dateOfBirth, membershipNo, currentChurch, transferInDate, requestType }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Transfer Summary (Preview)</h2>
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
          <User className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-interactive-50 px-2.5 py-0.5 text-xs font-medium text-interactive-600">Draft</span>
      </div>
      <Row label="Member Name" value={memberName} />
      <Row label="Date of Birth" value={dateOfBirth} />
      <Row label="Membership No." value={membershipNo} />
      <Row label="Current Church" value={currentChurch} />
      <Row label="Transfer In Date" value={transferInDate} />
      <Row label="Request Type" value={requestType} />
    </section>
  );
}
