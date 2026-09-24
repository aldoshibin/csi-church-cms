"use client";

import { Search, Filter, RefreshCw } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import {
  INTERCESSOR_STATUS_OPTIONS, INTERCESSOR_MINISTRY_OPTIONS, INTERCESSOR_AVAILABILITY_OPTIONS, INTERCESSOR_SORT_OPTIONS,
} from "@/lib/mock/intercessorsMockData";

export function IntercessorsFiltersBar({
  search, onSearchChange, statusFilter, onStatusFilterChange, ministryFilter, onMinistryFilterChange,
  availabilityFilter, onAvailabilityFilterChange, sortBy, onSortByChange, onApply, onReset,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-ink">Search</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search intercessors..."
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
        <Select label="Status" value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)}>
          <option>All Status</option>
          {INTERCESSOR_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Ministry / Group" value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)}>
          <option>All Groups</option>
          {INTERCESSOR_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </Select>
        <Select label="Availability" value={availabilityFilter} onChange={(e) => onAvailabilityFilterChange(e.target.value)}>
          <option>All Availability</option>
          {INTERCESSOR_AVAILABILITY_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </Select>
        <Select label="Sort By" value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
          {INTERCESSOR_SORT_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" leftIcon={<Filter className="h-4 w-4" />} onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" leftIcon={<RefreshCw className="h-4 w-4" />} onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
