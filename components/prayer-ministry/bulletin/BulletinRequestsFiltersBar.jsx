"use client";

import { Search, Filter, RefreshCw } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { BULLETIN_STATUS_OPTIONS, BULLETIN_REQUEST_TYPE_OPTIONS } from "@/lib/mock/bulletinRequestsMockData";

export function BulletinRequestsFiltersBar({
  search, onSearchChange, statusFilter, onStatusFilterChange, typeFilter, onTypeFilterChange, submittedByFilter, onSubmittedByFilterChange,
  onApply, onReset,
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
              placeholder="Search requests..."
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
        <Select label="Status" value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)}>
          <option>All Status</option>
          {BULLETIN_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Request Type" value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)}>
          <option>All Types</option>
          {BULLETIN_REQUEST_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
        <Select label="Submitted By" value={submittedByFilter} onChange={(e) => onSubmittedByFilterChange(e.target.value)}>
          <option>All Members</option>
        </Select>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <input type="text" placeholder="Select date range" readOnly className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-subtle" />
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <Button type="button" leftIcon={<Filter className="h-4 w-4" />} onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" leftIcon={<RefreshCw className="h-4 w-4" />} onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
