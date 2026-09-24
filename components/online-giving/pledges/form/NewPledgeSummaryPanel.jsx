"use client";

import { FileText } from "lucide-react";

export function NewPledgeSummaryPanel({ form }) {
  const dash = (v) => (v ? v : "-");
  const rows = [
    ["Fund / Purpose", dash(form.fundPurpose)],
    ["Pledged Amount", form.pledgedAmount ? `₹${Number(form.pledgedAmount).toLocaleString("en-IN", { minimumFractionDigits: 2 })}` : "-"],
    ["Commitment Type", dash(form.commitmentType)],
    ["Payment Frequency", dash(form.paymentFrequency)],
    ["Number of Payments", dash(form.numberOfPayments)],
    ["Start Date", dash(form.startDate)],
    ["End Date", dash(form.endDate)],
    ["First Payment Date", dash(form.firstPaymentDate)],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <FileText className="h-4 w-4" /> Pledge Summary
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
