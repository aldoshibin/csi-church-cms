"use client";

import { Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FACILITY_OPTIONS, BOOKING_TYPE_OPTIONS, BOOKING_STATUS_OPTIONS, PAYMENT_STATUS_OPTIONS, BOOKED_BY_OPTIONS,
} from "@/lib/mock/vmFacilityBookingMockData";

export function FiltersPanelCard({
  dateRange, setDateRange, facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
  statusFilter, setStatusFilter, paymentStatusFilter, setPaymentStatusFilter, bookedByFilter, setBookedByFilter,
  onApply, onClear,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-interactive-600" />
          <h3 className="text-sm font-semibold text-ink">Filters</h3>
        </div>
        <button type="button" onClick={onClear} className="text-xs font-medium text-interactive-600 hover:underline">Clear All</button>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={dateRange} onChange={(e) => setDateRange(e.target.value)}
              placeholder="Select date range"
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Facility</label>
          <select value={facilityFilter} onChange={(e) => setFacilityFilter(e.target.value)} className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Facilities</option>
            {FACILITY_OPTIONS.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Booking Type</label>
          <select value={bookingTypeFilter} onChange={(e) => setBookingTypeFilter(e.target.value)} className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Booking Types</option>
            {BOOKING_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Status</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {BOOKING_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Payment Status</label>
          <select value={paymentStatusFilter} onChange={(e) => setPaymentStatusFilter(e.target.value)} className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Payment Status</option>
            {PAYMENT_STATUS_OPTIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Booked By</label>
          <select value={bookedByFilter} onChange={(e) => setBookedByFilter(e.target.value)} className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All</option>
            {BOOKED_BY_OPTIONS.map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>

        <Button type="button" variant="success" className="w-full" onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" className="w-full" onClick={onClear}>Clear Filters</Button>
      </div>
    </div>
  );
}
