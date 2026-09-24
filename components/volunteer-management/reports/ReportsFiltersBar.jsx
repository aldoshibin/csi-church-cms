"use client";

import { Calendar, SlidersHorizontal } from "lucide-react";

export function ReportsFiltersBar({
  dateRange, onDateRangeChange, ministryFilter, onMinistryFilterChange, serviceFilter, onServiceFilterChange,
  ministryOptions = [], serviceOptions = [],
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <div className="relative">
        <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="text" value={dateRange} onChange={(e) => onDateRangeChange(e.target.value)}
          className="h-9 w-64 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink-muted"
        />
      </div>
      <select value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Ministries</option>
        {ministryOptions.map((m) => <option key={m}>{m}</option>)}
      </select>
      <select value={serviceFilter} onChange={(e) => onServiceFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Services / Events</option>
        {serviceOptions.map((s) => <option key={s}>{s}</option>)}
      </select>
      <button type="button" className="ml-auto flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
