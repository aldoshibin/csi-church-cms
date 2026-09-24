"use client";

import { cn } from "@/lib/utils";

const TABS = ["Attendance Records", "Attendance Summary", "Check-in / Check-out Log", "Notes"];

export function AttendanceDetailTabs({ active, onChange }) {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-border px-1">
      {TABS.map((tab) => (
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
  );
}
