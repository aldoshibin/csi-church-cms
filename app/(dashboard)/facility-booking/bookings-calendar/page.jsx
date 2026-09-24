"use client";

import { ChevronLeft, ChevronRight, Download, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBookingsCalendar } from "@/hooks/useBookingsCalendar";
import { CalendarGrid } from "@/components/facility-booking/calendar/CalendarGrid";
import { MiniCalendarCard } from "@/components/facility-booking/calendar/MiniCalendarCard";
import { CalendarFiltersCard } from "@/components/facility-booking/calendar/CalendarFiltersCard";
import { BookingLegendCard } from "@/components/facility-booking/calendar/BookingLegendCard";
import { FacilityBookingHelpCard } from "@/components/facility-booking/overview/FacilityBookingHelpCard";

const VIEWS = ["Month", "Week", "Day"];

export default function BookingsCalendarPage() {
  const {
    view, setView, monthLabel, days, legend, categoryStyle,
    facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
    statusFilter, setStatusFilter, dateRange, setDateRange, clearFilters,
  } = useBookingsCalendar();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Bookings Calendar</h1>
          <p className="mt-1 text-sm text-ink-subtle">View all facility bookings and schedules.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />} leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
          <Button variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />} leftIcon={<Download className="h-4 w-4" />}>Export</Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" size="sm">Today</Button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Previous month">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Next month">
            <ChevronRight className="h-4 w-4" />
          </button>
          <span className="ml-1 text-base font-semibold text-ink">{monthLabel}</span>
        </div>
        <div className="flex items-center rounded-md border border-border bg-white p-1">
          {VIEWS.map((v) => (
            <button
              key={v} type="button" onClick={() => setView(v)}
              className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
                view === v ? "bg-success-600 text-white" : "text-ink-muted hover:bg-surface-canvas"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          {view === "Month" ? (
            <CalendarGrid days={days} categoryStyle={categoryStyle} />
          ) : (
            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border text-sm text-ink-subtle">
              {view} view is coming soon — showing Month view for now.
            </div>
          )}
          <p className="text-xs text-ink-subtle">Note: All times are in Asia/Kolkata (IST) timezone.</p>
        </div>

        <div className="flex flex-col gap-6">
          <MiniCalendarCard monthLabel={monthLabel} days={days} />
          <CalendarFiltersCard
            facilityFilter={facilityFilter} setFacilityFilter={setFacilityFilter}
            bookingTypeFilter={bookingTypeFilter} setBookingTypeFilter={setBookingTypeFilter}
            statusFilter={statusFilter} setStatusFilter={setStatusFilter}
            dateRange={dateRange} setDateRange={setDateRange} onClear={clearFilters}
          />
          <BookingLegendCard legend={legend} />
          <FacilityBookingHelpCard />
        </div>
      </div>
    </div>
  );
}
