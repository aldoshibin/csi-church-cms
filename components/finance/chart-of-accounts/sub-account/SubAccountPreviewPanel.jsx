"use client";

import { Info } from "lucide-react";

export function SubAccountPreviewPanel({ form }) {
  const rows = [
    ["Sub Account Code", form.code || "—"],
    ["Sub Account Name", form.name || "—"],
    ["Sub Account Type", form.type || "—"],
    ["Opening Balance", `₹${Number(form.openingBalance || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`],
    ["Account Currency", form.currency],
    ["Account Nature", form.nature],
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Sub Account Preview
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
