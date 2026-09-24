"use client";

import { Calendar, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { DONATION_PAYMENT_METHOD_OPTIONS, DONATION_FUND_OPTIONS, DONATION_STATUS_OPTIONS } from "@/lib/mock/donationsMockData";

export function DonationsFilters({
  dateRange,
  paymentMethodFilter, onPaymentMethodChange,
  fundFilter, onFundChange,
  statusFilter, onStatusChange,
  search, onSearchChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <Calendar className="h-4 w-4" /> {dateRange} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>

      <select value={paymentMethodFilter} onChange={(e) => onPaymentMethodChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Payment Methods</option>
        {DONATION_PAYMENT_METHOD_OPTIONS.map((m) => <option key={m}>{m}</option>)}
      </select>

      <select value={fundFilter} onChange={(e) => onFundChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Funds / Accounts</option>
        {DONATION_FUND_OPTIONS.map((f) => <option key={f}>{f}</option>)}
      </select>

      <select value={statusFilter} onChange={(e) => onStatusChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Status</option>
        {DONATION_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
      </select>

      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by donor, email, or receipt..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
