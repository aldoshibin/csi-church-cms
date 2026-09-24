"use client";

import { FileText } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function NewRefundSummaryPanel({ form }) {
  const dash = (v) => (v ? v : "-");
  const rows = [
    ["Donor", dash(form.donor)],
    ["Refund For", dash(form.refundFor)],
    ["Refund Amount", form.refundAmount ? `₹${Number(form.refundAmount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}` : "-"],
    ["Refund Date", dash(form.refundDate)],
    ["Payment Method", dash(form.paymentMethod)],
    ["Reason for Refund", dash(form.reason)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Refund Summary
      </h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-surface-muted pt-3">
        <span className="text-sm font-medium text-ink">Amount to be Refunded</span>
        <span className="text-base font-bold text-success-600">{formatCurrency(form.refundAmount || 0)}</span>
      </div>
    </div>
  );
}
