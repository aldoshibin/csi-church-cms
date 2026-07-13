"use client";

import { Calendar, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";


export function BirthdayTabsAndFilters({ activeTab, onTabChange, filters }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex gap-6 border-b border-border px-4 pt-4">
        {["Birthdays", "Wedding Anniversaries"].map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "relative pb-3 text-sm font-medium transition-colors",
                isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
              )}
            >
              {tab}
              {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-end gap-4 p-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Date Range</span>
          <div className="relative">
            <input
              type="text"
              defaultValue={filters.dateRange}
              className="h-9 w-44 rounded-md border border-border px-2 pr-7 text-sm text-ink"
            />
            <Calendar className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Location</span>
          <select defaultValue={filters.location} className="h-9 w-40 rounded-md border border-border px-2 text-sm text-ink">
            <option>All Locations</option>
            <option>Main Church</option>
            <option>St. Peter's Chapel</option>
            <option>St. Mary's Mission</option>
            <option>Hill View Branch</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">Age Group</span>
          <select defaultValue={filters.ageGroup} className="h-9 w-32 rounded-md border border-border px-2 text-sm text-ink">
            <option>All</option>
            <option>Child (0-12)</option>
            <option>Teen (13-17)</option>
            <option>Adult (18-59)</option>
            <option>Senior (60+)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink">View:</span>
          <select defaultValue={filters.view} className="h-9 w-40 rounded-md border border-border px-2 text-sm text-ink">
            <option>Upcoming 30 Days</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        <button className="h-9 rounded-md border border-border px-4 text-sm font-medium text-ink hover:bg-surface-muted">
          Reset
        </button>
        <button className="flex h-9 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-interactive-500 hover:bg-surface-muted">
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
}
