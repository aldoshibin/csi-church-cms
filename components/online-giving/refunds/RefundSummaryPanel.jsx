"use client";

import { formatCurrency } from "@/lib/utils";

export function RefundSummaryPanel({ summary }) {
  const rows = [
    ["Total Refunded Amount", formatCurrency(summary.totalRefundedAmount)],
    ["Completed Amount", formatCurrency(summary.completedAmount)],
    ["Pending Amount", formatCurrency(summary.pendingAmount)],
    ["Failed Amount", formatCurrency(summary.failedAmount)],
    ["Refund Rate", `${summary.refundRate}%`],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Refund Summary <span className="font-normal text-ink-subtle">(This Period)</span></h3>
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
