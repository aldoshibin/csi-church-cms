"use client";

import { formatCurrency } from "@/lib/utils";

export function DonationsByFundCard({ funds = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Donations by Fund / Purpose</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Period</option>
          <option>Last Period</option>
        </select>
      </div>
      <div className="flex flex-col gap-3.5">
        {funds.map((fund) => (
          <div key={fund.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 truncate text-sm text-ink-muted">{fund.label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-success-500" style={{ width: `${fund.pct}%` }} />
            </div>
            <span className="w-10 shrink-0 text-right text-xs text-ink-subtle">{fund.pct}%</span>
            <span className="w-24 shrink-0 text-right text-sm font-medium text-ink">{formatCurrency(fund.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
