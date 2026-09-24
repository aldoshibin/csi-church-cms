"use client";

import { formatCurrency } from "@/lib/utils";

export function PledgeSummaryPanel({ summary }) {
  const rows = [
    ["Total Pledged Amount", formatCurrency(summary.totalPledgedAmount)],
    ["Total Paid Amount", formatCurrency(summary.totalPaidAmount)],
    ["Remaining Amount", formatCurrency(summary.remainingAmount)],
    ["Completion Rate", `${summary.completionRate}%`],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Pledge Summary <span className="font-normal text-ink-subtle">(This Year)</span></h3>
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
