"use client";

import { CircleCheck, ClipboardList } from "lucide-react";

const DEFAULT_ITEMS = [
  "All income details are correct",
  "Amount is accurate",
  "Payment information is complete",
  "Reference number is added",
  "Receipt / document is attached (optional)",
];

export function IncomeChecklistPanel({ items = DEFAULT_ITEMS }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <ClipboardList className="h-4 w-4 text-interactive-600" /> Checklist
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
            <CircleCheck className="h-4 w-4 shrink-0 text-success-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
