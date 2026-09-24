"use client";

import { cn } from "@/lib/utils";

export function AssignmentDetailTabs({ active, onChange, volunteersCount = 0 }) {
  const tabs = ["Overview", `Volunteers (${volunteersCount})`, "Details", "Notes", "History"];
  return (
    <div className="flex flex-wrap gap-6 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab.startsWith("Volunteers") ? "Volunteers" : tab)}
          className={cn(
            "border-b-2 pb-3 text-sm font-medium transition-colors",
            (active === tab || (active === "Volunteers" && tab.startsWith("Volunteers")))
              ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
