"use client";

import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { REP_TABS } from "@/lib/mock/ymReportsMockData";

export function YmReportsTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-1">
      <div className="flex gap-6 overflow-x-auto">
        {REP_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={cn(
              "shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors",
              active === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <button type="button" className="mb-2 flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
