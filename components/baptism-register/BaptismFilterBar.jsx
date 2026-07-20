"use client";

import { Search, RotateCcw, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GENDER_OPTIONS } from "@/utils/constants";

export function BaptismFilterBar({ onSearchChange, onFieldChange, onReset, onSearch }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Search</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-7">
        <div className="relative xl:col-span-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="search"
            placeholder="Search by name or baptism no..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-ink-subtle">From Date</label>
          <input type="date" onChange={(e) => onFieldChange("from_date", e.target.value || undefined)} className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-ink-subtle">To Date</label>
          <input type="date" onChange={(e) => onFieldChange("to_date", e.target.value || undefined)} className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" />
        </div>
        <select onChange={(e) => onFieldChange("gender", e.target.value || undefined)} defaultValue="" className="h-10 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All</option>
          {GENDER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select onChange={(e) => onFieldChange("church", e.target.value || undefined)} defaultValue="" className="h-10 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All Churches</option>
          <option>St. John's Church</option>
          <option>St. Peter's Church</option>
          <option>St. Mary's Church</option>
        </select>
        <select onChange={(e) => onFieldChange("status", e.target.value || undefined)} defaultValue="" className="h-10 rounded-md border border-border px-3 text-sm text-ink">
          <option value="">All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button type="button" variant="secondary" size="sm" leftIcon={<RotateCcw className="h-3.5 w-3.5" />} onClick={onReset}>
          Reset Filters
        </Button>
        <div className="flex gap-2">
          <Button type="button" variant="secondary" size="sm" leftIcon={<SlidersHorizontal className="h-3.5 w-3.5" />}>
            More Filters
          </Button>
          <Button type="button" size="sm" leftIcon={<Filter className="h-3.5 w-3.5" />} onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
