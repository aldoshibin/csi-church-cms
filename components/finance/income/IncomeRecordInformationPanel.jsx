"use client";

import { Calendar } from "lucide-react";

export function IncomeRecordInformationPanel({ incomeNo, recordedBy, recordedOn }) {
  const rows = [
    ["Income No.", incomeNo],
    ["Recorded By", recordedBy],
    ["Recorded On", recordedOn],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Calendar className="h-4 w-4 text-interactive-600" /> Record Information
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
