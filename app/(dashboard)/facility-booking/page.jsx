"use client";

import { useRouter } from "next/navigation";
import { Calendar, Clock, Users2, Search, SlidersHorizontal, CalendarCheck2 } from "lucide-react";
import { useFacilityBookingOverview } from "@/hooks/useFacilityBookingOverview";
import { StatCard } from "@/components/facility-booking/overview/StatCard";
import { BookingsByStatusDonutCard } from "@/components/facility-booking/overview/BookingsByStatusDonutCard";
import { UpcomingBookingsCard } from "@/components/facility-booking/overview/UpcomingBookingsCard";
import { FacilityBookingQuickActionsCard } from "@/components/facility-booking/overview/FacilityBookingQuickActionsCard";
import { FacilityBookingHelpCard } from "@/components/facility-booking/overview/FacilityBookingHelpCard";
import { BookingsTable } from "@/components/facility-booking/overview/BookingsTable";
import { FACILITY_OPTIONS, BOOKING_STATUS_OPTIONS, BOOKING_TYPE_OPTIONS } from "@/lib/mock/vmFacilityBookingMockData";

export default function FacilityBookingOverviewPage() {
  const router = useRouter();
  const {
    bookings, totalCount, isLoading, stats, donut, upcoming,
    search, setSearch, facilityFilter, setFacilityFilter, statusFilter, setStatusFilter,
    bookingTypeFilter, setBookingTypeFilter, clearFilters,
    page, setPage, pageSize,
  } = useFacilityBookingOverview();

  const handleView = (row) => router.push(`/facility-booking/all-bookings/${row.id}`);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Facility Booking</h1>
        <p className="mt-1 text-sm text-ink-subtle">Manage church facilities, bookings and schedules.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={CalendarCheck2} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Bookings" value={stats.totalBookings.value} sub={stats.totalBookings.sub} />
        <StatCard icon={Calendar} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Upcoming Bookings" value={stats.upcomingBookings.value} sub={stats.upcomingBookings.sub} />
        <StatCard icon={Clock} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Today's Bookings" value={stats.todaysBookings.value} sub={stats.todaysBookings.sub} />
        <StatCard icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Pending Requests" value={stats.pendingRequests.value} sub={stats.pendingRequests.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by booking ID, facility, name..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={facilityFilter} onChange={(e) => setFacilityFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Facilities</option>
              {FACILITY_OPTIONS.map((f) => <option key={f}>{f}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Status</option>
              {BOOKING_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={bookingTypeFilter} onChange={(e) => setBookingTypeFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Booking Types</option>
              {BOOKING_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <BookingsTable
            bookings={bookings} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <BookingsByStatusDonutCard data={donut} />
          <UpcomingBookingsCard bookings={upcoming} />
          <FacilityBookingQuickActionsCard />
          <FacilityBookingHelpCard />
        </div>
      </div>
    </div>
  );
}
