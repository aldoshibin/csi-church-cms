"use client";

import { Calendar, Filter } from "lucide-react";


export function PrayerFilterBar({ filters }) {
  return (
    <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Status</span>
        <select defaultValue={filters.status} className="h-9 w-36 rounded-md border border-border px-2 text-sm text-ink">
          <option>All</option>
          <option>Active</option>
          <option>Answered</option>
          <option>Closed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Category</span>
        <select defaultValue={filters.category} className="h-9 w-36 rounded-md border border-border px-2 text-sm text-ink">
          <option>All</option>
          <option>Health</option>
          <option>Family</option>
          <option>Financial</option>
          <option>Employment</option>
          <option>Education</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Date Range</span>
        <div className="relative">
          <input
            type="text"
            defaultValue={filters.dateRange}
            className="h-9 w-56 rounded-md border border-border px-2 pr-7 text-sm text-ink"
          />
          <Calendar className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Requested By</span>
        <select defaultValue={filters.requestedBy} className="h-9 w-36 rounded-md border border-border px-2 text-sm text-ink">
          <option>All</option>
          <option>Self</option>
          <option>Other</option>
        </select>
      </div>

      <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-ink hover:bg-surface-muted">
        <Filter className="h-3.5 w-3.5" />
        Filter
      </button>
      <button className="h-9 px-2 text-sm font-medium text-interactive-500 hover:underline">
        Reset
      </button>
    </div>
  );
}
