"use client";

import { CircleCheck, ShieldCheck } from "lucide-react";

const DEFAULT_CHECKS = [
  "Parent account is valid",
  "Sub account code is unique",
  "Required fields are completed",
  "Account type is valid",
  "Opening balance is valid",
  "Configuration is correct",
];

export function ValidationChecklistPanel({ items = DEFAULT_CHECKS }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <ShieldCheck className="h-4 w-4" /> Validation Checklist
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
