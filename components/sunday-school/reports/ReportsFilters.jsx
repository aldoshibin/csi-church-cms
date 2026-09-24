"use client";

import { Calendar } from "lucide-react";
import { REPORT_CATEGORY_OPTIONS, REPORT_DATE_RANGE_OPTIONS } from "@/lib/mock/reportsMockData";

export function ReportsFilters({ categoryFilter, onCategoryChange, dateRange, onDateRangeChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Categories</option>
        {REPORT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
      </select>

      <select value={dateRange} onChange={(e) => onDateRangeChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        {REPORT_DATE_RANGE_OPTIONS.map((d) => <option key={d}>{d}</option>)}
      </select>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <Calendar className="h-4 w-4" /> May 1, 2026 - May 31, 2026
      </button>
    </div>
  );
}
