"use client";

import { Filter, RefreshCw } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { PRAISE_CATEGORY_OPTIONS, PRAISE_STATUS_OPTIONS } from "@/lib/mock/praiseReportsMockData";

export function PraiseReportsFiltersBar({
  categoryFilter, onCategoryFilterChange, sharedByFilter, onSharedByFilterChange, statusFilter, onStatusFilterChange,
  onApply, onReset,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <input type="text" defaultValue="May 20, 2026 - May 26, 2026" readOnly className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink" />
        </div>
        <Select label="Category" value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)}>
          <option>All Categories</option>
          {PRAISE_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select label="Shared By" value={sharedByFilter} onChange={(e) => onSharedByFilterChange(e.target.value)}>
          <option>All Members</option>
        </Select>
        <Select label="Status" value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)}>
          <option>All Status</option>
          {PRAISE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Button type="button" leftIcon={<Filter className="h-4 w-4" />} onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" leftIcon={<RefreshCw className="h-4 w-4" />} onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
