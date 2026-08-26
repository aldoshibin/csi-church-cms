"use client";

import { formatCurrency } from "@/lib/utils";

export function AllocationSummaryPanel({ rows = [], totalPct = 0, totalAmount = 0 }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Allocation Summary</h3>
      <div className="flex flex-col gap-2.5">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="truncate text-ink-muted">{row.dept || "—"}</span>
            <span className="shrink-0 px-2 text-ink-subtle">{row.pct || 0}%</span>
            <span className="shrink-0 font-medium text-ink">{formatCurrency(row.amount)}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-surface-muted pt-2 text-sm font-semibold">
          <span className="text-ink">Total</span>
          <span className="text-ink-subtle">{totalPct}%</span>
          <span className="text-interactive-600">{formatCurrency(totalAmount)}</span>
        </div>
      </div>
    </div>
  );
}
