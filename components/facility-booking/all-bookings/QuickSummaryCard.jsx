"use client";

import { formatCurrency } from "@/lib/utils";

const ROWS = [
  { key: "totalAmount", label: "Total Amount", color: "text-ink" },
  { key: "paidAmount", label: "Paid Amount", color: "text-success-600" },
  { key: "pendingAmount", label: "Pending Amount", color: "text-warning-600" },
  { key: "refundedAmount", label: "Refunded Amount", color: "text-danger-600" },
];

export function QuickSummaryCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Quick Summary</h3>
      <div className="mt-3 flex flex-col gap-2.5">
        {ROWS.map((row) => (
          <div key={row.key} className="flex items-center justify-between text-sm">
            <span className="text-ink-muted">{row.label}</span>
            <span className={`font-semibold ${row.color}`}>{formatCurrency(data[row.key])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
