"use client";

import { Users } from "lucide-react";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </div>
  );
}

export default function FamilySummaryPanel({ summary, headOfFamily }) {
  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-ink">Family Summary (Preview)</h2>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
          <Users className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{headOfFamily?.name || "New Family"}</p>
          <p className="text-xs text-ink-subtle">Not saved yet</p>
        </div>
      </div>

      <div className="divide-y divide-border">
        <Row label="Total Members" value={summary.totalMembers} />
        <Row label="Adults (18+)" value={summary.adults} />
        <Row label="Children (<18)" value={summary.children} />
        <Row label="Family Category" value={summary.familyCategory} />
        <Row label="Branch / Church" value={summary.branchChurch} />
      </div>
    </section>
  );
}
