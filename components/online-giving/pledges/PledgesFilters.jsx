"use client";

import { Search, Calendar, SlidersHorizontal } from "lucide-react";
import { PLEDGE_STATUS_OPTIONS, PLEDGE_FUND_OPTIONS, PLEDGE_YEAR_OPTIONS } from "@/lib/mock/pledgesMockData";

export function PledgesFilters({
  search, onSearchChange,
  statusFilter, onStatusChange,
  fundFilter, onFundChange,
  yearFilter, onYearChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by donor name, fund or pledge ID..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Status</option>
        {PLEDGE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
      </select>

      <select value={fundFilter} onChange={(e) => onFundChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Funds / Accounts</option>
        {PLEDGE_FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
      </select>

      <select value={yearFilter} onChange={(e) => onYearChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Years</option>
        {PLEDGE_YEAR_OPTIONS.map((y) => <option key={y}>{y}</option>)}
      </select>

      <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas">
        <Calendar className="h-4 w-4" />
      </button>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
