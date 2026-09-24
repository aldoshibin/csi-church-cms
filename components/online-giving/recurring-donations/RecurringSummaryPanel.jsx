"use client";

import { formatCurrency } from "@/lib/utils";

export function RecurringSummaryPanel({ summary }) {
  const rows = [
    ["Total Recurring Amount", formatCurrency(summary.totalRecurringAmount)],
    ["Total Collected", formatCurrency(summary.totalCollected)],
    ["Total Failed Payments", formatCurrency(summary.totalFailedPayments)],
    ["Success Rate", `${summary.successRate}%`],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Summary <span className="font-normal text-ink-subtle">(This Period)</span></h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
