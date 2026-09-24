"use client";

import { Calendar, Search, SlidersHorizontal } from "lucide-react";
import { PAYMENT_LINK_STATUS_OPTIONS, PAYMENT_LINK_FUND_OPTIONS } from "@/lib/mock/paymentLinksMockData";

export function PaymentLinksFilters({
  search, onSearchChange,
  statusFilter, onStatusChange,
  fundFilter, onFundChange,
  createdFilter,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by link name, purpose or URL..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Status</option>
        {PAYMENT_LINK_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
      </select>

      <select value={fundFilter} onChange={(e) => onFundChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Funds / Accounts</option>
        {PAYMENT_LINK_FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
      </select>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <Calendar className="h-4 w-4" /> {createdFilter}
      </button>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
