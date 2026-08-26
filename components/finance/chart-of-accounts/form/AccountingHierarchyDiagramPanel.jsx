"use client";

import { Network, Info } from "lucide-react";

const LEVELS = [
  { label: "Header", desc: "Top level group (e.g., Assets, Liabilities)", color: "text-success-600", bg: "bg-success-50" },
  { label: "Detail", desc: "Used for regular transactions", color: "text-warning-600", bg: "bg-warning-50" },
  { label: "Sub-Detail", desc: "Provides more detailed classification", color: "text-interactive-600", bg: "bg-interactive-50" },
];

export function AccountingHierarchyDiagramPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Info className="h-4 w-4" /> Accounting Hierarchy
      </h3>
      <div className="rounded-lg bg-surface-canvas p-4">
        <div className="flex flex-col gap-4">
          {LEVELS.map((lvl, i) => (
            <div key={lvl.label} className="flex items-start gap-3" style={{ paddingLeft: i * 16 }}>
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${lvl.bg}`}>
                <Network className={`h-4 w-4 ${lvl.color}`} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{lvl.label}</p>
                <p className="text-xs text-ink-subtle">{lvl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
