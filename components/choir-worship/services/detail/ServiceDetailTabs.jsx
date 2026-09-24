"use client";

import { cn } from "@/lib/utils";

const TABS = ["Overview", "Schedule", "Team & Roles", "Songs & Setlist", "Attendance", "Notes"];

export function ServiceDetailTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-5 border-b border-border">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "border-b-2 pb-3 text-sm font-medium transition-colors",
            active === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
