"use client";

import { cn } from "@/lib/utils";

const TABS = ["Recent Burials", "Plots", "Upcoming Burials", "Maintenance Due"];

export function OverviewTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-border">
      {TABS.map((tab) => (
        <button
          key={tab} type="button" onClick={() => onTabChange(tab)}
          className={cn(
            "border-b-2 pb-3 text-sm font-medium transition-colors",
            activeTab === tab ? "border-success-500 text-success-600" : "border-transparent text-ink-subtle hover:text-ink"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
