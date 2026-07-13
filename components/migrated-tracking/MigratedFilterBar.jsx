"use client";

import { Search, RotateCcw, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MEMBER_CATEGORY_OPTIONS } from "@/utils/constants";

export function MigratedFilterBar({ onSearchChange, onFieldChange, onClear, onApply }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 font-display text-base font-semibold text-ink">Search &amp; Filter</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Search Member</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="search"
              placeholder="Search by name, membership no., phone..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Migrated On or After</label>
          <input type="date" onChange={(e) => onFieldChange("migrated_on_after", e.target.value || undefined)} className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Migrated On or Before</label>
          <input type="date" onChange={(e) => onFieldChange("migrated_on_before", e.target.value || undefined)} className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink" />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Migrated To Church / Diocese</label>
          <select onChange={(e) => onFieldChange("migrated_to_church", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option>St. Thomas Church, Kochi</option>
            <option>CSI Christ Church, Dubai</option>
            <option>St. Peter's Church, Bangalore</option>
            <option>Holy Trinity Church, Mumbai</option>
            <option>CSI Cathedral Church, Delhi</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">From Church / Diocese</label>
          <select onChange={(e) => onFieldChange("from_church", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option>St. John's Church (Main)</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Member Type</label>
          <select onChange={(e) => onFieldChange("member_category", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            {MEMBER_CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Age Group</label>
          <select onChange={(e) => onFieldChange("age_group", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="child">Children (0-12)</option>
            <option value="youth">Youth (13-17)</option>
            <option value="adult">Adults (18+)</option>
            <option value="senior">Senior (60+)</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Status</label>
          <select onChange={(e) => onFieldChange("migration_status", e.target.value || undefined)} defaultValue="" className="h-10 w-full rounded-md border border-border px-3 text-sm text-ink">
            <option value="">All</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING_CONFIRMATION">Pending Confirmation</option>
            <option value="AWAITING_DETAILS">Awaiting Details</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button type="button" variant="secondary" size="sm" leftIcon={<RotateCcw className="h-3.5 w-3.5" />} onClick={onClear}>
          Clear Filters
        </Button>
        <Button type="button" size="sm" leftIcon={<Filter className="h-3.5 w-3.5" />} onClick={onApply}>
          Apply Filters
        </Button>
      </div>
    </section>
  );
}
