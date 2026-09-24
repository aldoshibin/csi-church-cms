"use client";

import { CheckCircle2 } from "lucide-react";
import { formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

export function VotingTransactionSummaryCard({ summary }) {
  if (!summary) {
    return (
      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <h3 className="text-sm font-semibold text-ink">Voting Transaction Summary</h3>
        <p className="mt-4 text-sm text-ink-subtle">This voter has not cast their vote yet.</p>
      </div>
    );
  }
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-success-500" />
        <h3 className="text-sm font-semibold text-ink">Voting Transaction Summary</h3>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <Row label="Voted On" value={formatDateTime(summary.votedOn)} />
        <Row label="IP Address" value={summary.ipAddress} />
        <Row label="Device" value={summary.device} />
        <Row label="Location" value={summary.location} />
        <Row label="Transaction ID" value={summary.transactionId} />
        <Row label="Status" value={summary.status} />
      </div>
    </div>
  );
}
