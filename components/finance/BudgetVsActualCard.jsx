"use client";

import { formatCurrency } from "@/lib/utils";

export function BudgetVsActualCard({ rows = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#00695C]">Budget vs Actual</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-ink-muted">{row.label}</span>
              <span className="font-medium text-ink">
                {formatCurrency(row.current)} / {formatCurrency(row.target)}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full" style={{ width: `${Math.min(row.pct, 100)}%`, backgroundColor: row.color }} />
            </div>
            <p className="mt-1 text-xs text-ink-subtle">{row.pct}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
