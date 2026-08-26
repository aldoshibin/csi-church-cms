"use client";

import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { ACCOUNT_TYPE_OPTIONS, ACCOUNT_CATEGORY_OPTIONS } from "@/lib/mock/chartOfAccountsMockData";

export function ChartOfAccountsFilters({
  search, onSearchChange,
  typeFilter, onTypeChange,
  categoryFilter, onCategoryChange,
  statusFilter, onStatusChange,
  view, onViewChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by account name or code..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <select value={typeFilter} onChange={(e) => onTypeChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Types</option>
        {ACCOUNT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
      </select>

      <select value={categoryFilter} onChange={(e) => onCategoryChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Categories</option>
        {ACCOUNT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
      </select>

      <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> More Filters
      </button>

      <div className="flex h-10 items-center rounded-md border border-border p-0.5">
        <button
          type="button" onClick={() => onViewChange("grid")}
          className={`flex h-8 w-8 items-center justify-center rounded ${view === "grid" ? "bg-surface-canvas text-ink" : "text-ink-subtle"}`}
        >
          <LayoutGrid className="h-4 w-4" />
        </button>
        <button
          type="button" onClick={() => onViewChange("list")}
          className={`flex h-8 w-8 items-center justify-center rounded ${view === "list" ? "bg-interactive-500 text-white" : "text-ink-subtle"}`}
        >
          <List className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
