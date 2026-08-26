"use client";

import { formatCurrency } from "@/lib/utils";

export function TopExpenseCategoriesCard({ categories = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#00695C]">Top Expense Categories</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
        </select>
      </div>

      <div className="flex flex-col gap-3.5">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center gap-3">
            <div className="flex-1">
              <p className="mb-1 text-xs text-ink-muted">{cat.label}</p>
              <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }} />
              </div>
            </div>
            <div className="w-28 shrink-0 text-right text-xs text-ink-muted">
              {formatCurrency(cat.amount)} <span className="text-ink-subtle">({cat.pct}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
