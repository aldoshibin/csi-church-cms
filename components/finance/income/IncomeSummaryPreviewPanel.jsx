"use client";

import { FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function IncomeSummaryPreviewPanel({ form, final = false }) {
  const dash = (v) => (v ? v : "-");

  const rows = [
    ["Category", dash(form.category)],
    ["Amount (₹)", form.amount ? Number(form.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 }) : "-"],
    ["Payment Method", dash(form.paymentMethod)],
    ["Received From", dash(form.receivedFrom)],
    ["Income Date", form.date ? formatDate(form.date) : "-"],
    ["Related Account", dash(form.relatedAccount)],
    ["Reference No.", dash(form.referenceNo)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Income Summary {!final && "(Preview)"}
      </h3>
      <div className="flex flex-col gap-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-ink-subtle">{label}</span>
            <span className="font-medium text-ink">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
