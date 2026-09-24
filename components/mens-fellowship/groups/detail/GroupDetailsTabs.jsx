"use client";

import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function GroupDetailsTabs({ active, onChange, group }) {
  const tabs = ["Overview", `Members (${group.members})`, `Meetings (${group.totalMeetings ?? 0})`, `Activities (${group.activitiesThisMonth ?? 0})`, "Attendance", `Documents (${group.documents ?? 0})`];

  return (
    <div className="flex gap-6 overflow-x-auto border-b border-border px-1">
      {tabs.map((tab) => {
        const base = tab.split(" (")[0];
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(base)}
            className={cn(
              "shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors",
              active === base ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export function GroupDetailsTabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-white py-16 text-center shadow-card">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <FileText className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="max-w-sm text-xs text-ink-subtle">This section isn't in the current design reference — let me know if you'd like it built out.</p>
    </div>
  );
}
