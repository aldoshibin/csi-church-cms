"use client";

import { useRouter } from "next/navigation";
import { Download, ChevronDown, Search, SlidersHorizontal, CalendarCheck2, CheckCircle2, Clock, XCircle, CalendarX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAllBookings } from "@/hooks/useAllBookings";
import { AllBookingsStatCard } from "@/components/facility-booking/all-bookings/AllBookingsStatCard";
import { AllBookingsTable } from "@/components/facility-booking/all-bookings/AllBookingsTable";
import { FiltersPanelCard } from "@/components/facility-booking/all-bookings/FiltersPanelCard";
import { QuickSummaryCard } from "@/components/facility-booking/all-bookings/QuickSummaryCard";
import { AllBookingsHelpCard } from "@/components/facility-booking/all-bookings/AllBookingsHelpCard";

export default function AllBookingsPage() {
  const router = useRouter();
  const {
    bookings, totalCount, isLoading, stats, quickSummary,
    search, setSearch, dateRange, setDateRange,
    facilityFilter, setFacilityFilter, bookingTypeFilter, setBookingTypeFilter,
    statusFilter, setStatusFilter, paymentStatusFilter, setPaymentStatusFilter,
    bookedByFilter, setBookedByFilter, clearFilters,
    page, setPage, pageSize,
  } = useAllBookings();

  const handleView = (row) => router.push(`/facility-booking/all-bookings/${row.id}`);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">All Bookings</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage all facility bookings.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
          <Button variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>Filters</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <AllBookingsStatCard icon={CalendarCheck2} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Bookings" value={stats.total} sub="All Time" />
        <AllBookingsStatCard icon={CheckCircle2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Confirmed" labelColor="text-success-600" value={stats.confirmed.count} sub={`${stats.confirmed.pct}%`} />
        <AllBookingsStatCard icon={Clock} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Pending" labelColor="text-warning-600" value={stats.pending.count} sub={`${stats.pending.pct}%`} />
        <AllBookingsStatCard icon={XCircle} iconBg="bg-[#FEE2E2]" iconColor="text-[#DC2626]" label="Rejected" labelColor="text-danger-600" value={stats.rejected.count} sub={`${stats.rejected.pct}%`} />
        <AllBookingsStatCard icon={CalendarX} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Cancelled" labelColor="text-interactive-600" value={stats.cancelled.count} sub={`${stats.cancelled.pct}%`} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by booking ID, facility, event, booked by..."
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>

          <AllBookingsTable
            bookings={bookings} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FiltersPanelCard
            dateRange={dateRange} setDateRange={setDateRange}
            facilityFilter={facilityFilter} setFacilityFilter={setFacilityFilter}
            bookingTypeFilter={bookingTypeFilter} setBookingTypeFilter={setBookingTypeFilter}
            statusFilter={statusFilter} setStatusFilter={setStatusFilter}
            paymentStatusFilter={paymentStatusFilter} setPaymentStatusFilter={setPaymentStatusFilter}
            bookedByFilter={bookedByFilter} setBookedByFilter={setBookedByFilter}
            onApply={() => setPage(1)} onClear={clearFilters}
          />
          <QuickSummaryCard data={quickSummary} />
          <AllBookingsHelpCard />
        </div>
      </div>
    </div>
  );
}
