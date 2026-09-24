"use client";

import { formatDateTime } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-3 text-sm last:border-0">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

export function OverallSummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Overall Summary</h3>
      <div className="mt-2">
        <Row label="Election" value={summary.electionName} />
        <Row label="Total Positions" value={summary.totalPositions} />
        <Row label="Total Candidates" value={summary.totalCandidates} />
        <Row label="Total Elected" value={summary.totalElected} />
        <Row label="Voting Method" value={summary.votingMethod} />
        <Row label="Results Declared On" value={formatDateTime(summary.declaredOn)} />
        <Row label="Declared By" value={summary.declaredByName} />
      </div>
    </div>
  );
}
