"use client";

import { formatCurrency } from "@/lib/utils";

export function PledgesByFundCard({ breakdown = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Pledges by Fund</h3>
      <div className="flex flex-col gap-3.5">
        {breakdown.map((entry) => (
          <div key={entry.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 truncate text-sm text-ink-muted">{entry.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-success-500" style={{ width: `${entry.pct}%` }} />
            </div>
            <span className="w-32 shrink-0 text-right text-xs text-ink-subtle">
              {formatCurrency(entry.amount)} ({entry.pct}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
