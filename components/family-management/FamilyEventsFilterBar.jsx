"use client";

import { Search, Filter, Grid3x3, List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";


const inputCls =
  "h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:border-interactive-500 focus:outline-none focus:ring-2 focus:ring-interactive-500/10";

function SelectField({ label, children, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">{label}</label>
      <div className="relative">
        <select {...props} className={inputCls + " appearance-none pr-8"}>
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
      </div>
    </div>
  );
}

export function FamilyDirectoryFilterBar({
  onSearchChange, onParishChange, onStatusChange, onFilterByChange,
  viewMode, onViewModeChange,
}) {
  return (
    <div className="flex flex-wrap items-end gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="min-w-[120px] flex-1">
        <label className="mb-1.5 block text-sm font-medium text-ink">Search Event</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="search"
            placeholder="Search by family name, head, phone..."
            onChange={(e) => onSearchChange?.(e.target.value)}
            className={inputCls + " pl-9"}
          />
        </div>
      </div>

      <div className="w-48">
        <SelectField label="Event Type" onChange={(e) => onParishChange?.(e.target.value)}>
          <option value="">All Parishes</option>
          <option>CSI St. John's Church</option>
        </SelectField>
      </div>

      
      <div>
        <Input label="From Date" placeholder="dd/mm/yyyy" />
      </div>
      <div>
        <Input label="To Date" placeholder="dd/mm/yyyy" />
      </div>
      <div className="w-40">
        <SelectField label="Family " onChange={(e) => onStatusChange?.(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </SelectField>
      </div>
      {/* <div className="w-36">
        <SelectField label="Filter by" onChange={(e) => onFilterByChange?.(e.target.value)}>
          <option value="">All</option>
          <option>Nuclear Family</option>
          <option>Joint Family</option>
          <option>Single Parent</option>
        </SelectField>
      </div> */}

      <button
        type="button"
        className="flex h-10 items-center gap-1.5 rounded-md border border-border bg-white px-3 text-sm font-medium text-ink hover:bg-surface-muted"
      >
        <Filter className="h-3.5 w-3.5" /> More Filters
      </button>

      <div className="flex h-10 overflow-hidden rounded-md border border-border">
        <button
          type="button"
          onClick={() => onViewModeChange?.("grid")}
          aria-label="Grid view"
          aria-pressed={viewMode === "grid"}
          className={cn(
            "flex h-full w-10 items-center justify-center",
            viewMode === "grid" ? "bg-interactive-500 text-white" : "bg-white text-ink-muted hover:bg-surface-muted"
          )}
        >
          <Grid3x3 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange?.("list")}
          aria-label="List view"
          aria-pressed={viewMode === "list"}
          className={cn(
            "flex h-full w-10 items-center justify-center border-l border-border",
            viewMode === "list" ? "bg-interactive-500 text-white" : "bg-white text-ink-muted hover:bg-surface-muted"
          )}
        >
          <List className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
