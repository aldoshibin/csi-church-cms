"use client";

import { Calendar, Filter, RotateCcw } from "lucide-react";


export function SacramentFilterBar({ filters }) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-ink">Date Range</span>
        <input
          type="text"
          defaultValue={filters.dateFrom}
          className="h-9 w-28 rounded-md border border-border px-2 text-sm text-ink"
        />
        <span className="text-sm text-ink-subtle">to</span>
        <div className="relative">
          <input
            type="text"
            defaultValue={filters.dateTo}
            className="h-9 w-28 rounded-md border border-border px-2 pr-7 text-sm text-ink"
          />
          <Calendar className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-ink">Location</span>
        <select defaultValue={filters.location} className="h-9 rounded-md border border-border px-2 text-sm text-ink">
          <option>All Locations</option>
          <option>Main Church</option>
          <option>St. Peter's Chapel</option>
          <option>St. Mary's Mission</option>
          <option>Hill View Branch</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-ink">Sacrament Type</span>
        <select defaultValue={filters.sacramentType} className="h-9 rounded-md border border-border px-2 text-sm text-ink">
          <option>Holy Communion</option>
          <option>Baptism</option>
          <option>Confirmation</option>
          <option>Marriage</option>
          <option>Funeral</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-ink">Performed By</span>
        <select defaultValue={filters.performedBy} className="h-9 rounded-md border border-border px-2 text-sm text-ink">
          <option>All</option>
          <option>Rev. Michael</option>
          <option>Bishop Samuel</option>
        </select>
      </div>

      <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-medium text-ink hover:bg-surface-muted">
        <Filter className="h-3.5 w-3.5" />
        Filter
      </button>
      <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-medium text-ink hover:bg-surface-muted">
        <RotateCcw className="h-3.5 w-3.5" />
        Reset
      </button>
    </div>
  );
}
