"use client";

import { Info } from "lucide-react";

const TYPES = [
  { label: "Header", desc: "Major group of accounts. Cannot have transactions directly." },
  { label: "Detail", desc: "Used to record transactions. Can have opening balance." },
  { label: "Sub-Detail", desc: "Used for more detailed classification under a Detail account." },
];

export function AccountTypeGuidePanel() {
  return (
    <div className="rounded-lg border border-border bg-surface-canvas p-4">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Account Type Guide
      </h3>
      <ul className="flex flex-col gap-3">
        {TYPES.map((t) => (
          <li key={t.label} className="flex gap-2 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
            <div>
              <p className="font-medium text-ink">{t.label}</p>
              <p className="text-xs text-ink-subtle">{t.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
