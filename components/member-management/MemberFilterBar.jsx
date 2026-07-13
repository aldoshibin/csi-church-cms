"use client";

import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";


export function MemberFilterBar({ onSearchChange, onStatusChange, onBranchChange }) {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Search Member</span>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="search"
            placeholder="Search by name, phone or email..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 w-64 rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Member Type</span>
        <select className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
          <option>All Types</option>
          <option>Family Head</option>
          <option>Spouse</option>
          <option>Child</option>
          <option>Individual</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Status</span>
        <select
          onChange={(e) => onStatusChange(e.target.value)}
          className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink"
          defaultValue=""
        >
          <option value="">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
          <option value="TRANSFERRED_OUT">Transferred Out</option>
          <option value="DECEASED">Deceased</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Branch / Church</span>
        <select
          onChange={(e) => onBranchChange(e.target.value)}
          className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink"
          defaultValue=""
        >
          <option value="">All Branches</option>
          <option>Main Church</option>
          <option>St. Peter's Church</option>
          <option>St. Thomas Church</option>
          <option>CSI Church</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink">Age Group</span>
        <select className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
          <option>All Age Groups</option>
          <option>Children (0-12)</option>
          <option>Youth (13-17)</option>
          <option>Adults (18+)</option>
        </select>
      </div>

      <button className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-ink hover:bg-surface-muted">
        <SlidersHorizontal className="h-3.5 w-3.5" />
        More Filters
      </button>
      <button className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-ink hover:bg-surface-muted">
        <RotateCcw className="h-3.5 w-3.5" />
        Reset
      </button>
    </div>
  );
}
