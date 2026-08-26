"use client";

import { Info } from "lucide-react";

export function ParentAccountSummaryPanel({ parentInfo }) {
  const rows = [
    ["Account Code", parentInfo.code],
    ["Account Name", parentInfo.name],
    ["Account Type", parentInfo.type],
    ["Account Nature", parentInfo.nature],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Parent Account Summary
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
