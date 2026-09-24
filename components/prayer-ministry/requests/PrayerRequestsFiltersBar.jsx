"use client";

import { Select } from "@/components/ui/Input";
import { PRAYER_STATUS_OPTIONS, PRAYER_CATEGORY_OPTIONS, PRAYER_GROUP_OPTIONS } from "@/lib/mock/prayerRequestsMockData";

export function PrayerRequestsFiltersBar({
  statusFilter, onStatusFilterChange, categoryFilter, onCategoryFilterChange, groupFilter, onGroupFilterChange,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Select label="Status" value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)}>
          <option>All Status</option>
          {PRAYER_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </Select>
        <Select label="Category" value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)}>
          <option>All Categories</option>
          {PRAYER_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
        <Select label="Prayer Group" value={groupFilter} onChange={(e) => onGroupFilterChange(e.target.value)}>
          <option>All Groups</option>
          {PRAYER_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </Select>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <input type="text" defaultValue="May 20, 2026 - May 26, 2026" readOnly className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink" />
        </div>
      </div>
    </div>
  );
}
