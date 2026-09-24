"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FACILITY_OPTIONS, BOOKING_TYPE_OPTIONS, BOOKING_STATUS_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export function CalendarFiltersCard({
  facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
  statusFilter, setStatusFilter, dateRange, setDateRange, onClear,
}) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Filters</h3>
      <div className="mt-4 flex flex-col gap-4">
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
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={dateRange} onChange={(e) => setDateRange(e.target.value)}
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
        </div>
        <Button type="button" variant="secondary" className="w-full" onClick={onClear}>Clear Filters</Button>
      </div>
    </div>
  );
}
