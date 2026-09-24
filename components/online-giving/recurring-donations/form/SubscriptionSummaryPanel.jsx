"use client";

import { FileText } from "lucide-react";

export function SubscriptionSummaryPanel({ form }) {
  const dash = (v) => (v ? v : "-");
  const rows = [
    ["Fund / Account", dash(form.fundAccount)],
    ["Purpose", dash(form.purpose)],
    ["Amount", form.amount ? `₹${Number(form.amount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}` : "-"],
    ["Frequency", dash(form.frequency)],
    ["Starting From", dash(form.startingFrom)],
    ["Payment Method", dash(form.paymentMethod)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Subscription Summary
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
