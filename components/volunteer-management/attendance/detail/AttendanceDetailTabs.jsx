"use client";

import { cn } from "@/lib/utils";

export const ATTENDANCE_DETAIL_TABS = ["Overview", "Check-in History", "Notes", "Service Details"];

export function AttendanceDetailTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-border">
      {ATTENDANCE_DETAIL_TABS.map((tab) => (
        <button
          key={tab} type="button" onClick={() => onChange(tab)}
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
