"use client";

import { Download, CalendarCheck2, CheckCircle2, Clock, XCircle, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useFacilityBookingReports } from "@/hooks/useFacilityBookingReports";
import { ReportStatCard } from "@/components/facility-booking/reports/ReportStatCard";
import { BookingsTrendChart } from "@/components/facility-booking/reports/BookingsTrendChart";
import { BookingsByStatusReportDonutCard } from "@/components/facility-booking/reports/BookingsByStatusReportDonutCard";
import { BookingsByFacilityTable } from "@/components/facility-booking/reports/BookingsByFacilityTable";
import { BookingsByDayTable } from "@/components/facility-booking/reports/BookingsByDayTable";
import { ReportOverviewCard } from "@/components/facility-booking/reports/ReportOverviewCard";
import { PopularReportsCard } from "@/components/facility-booking/reports/PopularReportsCard";

export default function FacilityBookingReportsPage() {
  const {
    stats, comparisonLabel, trend, statusDonut, byFacility, byDay, overview, popularReports,
    facilityOptions, statusOptions, bookingTypeOptions,
    dateRange, setDateRange, facilityFilter, setFacilityFilter,
    statusFilter, setStatusFilter, bookingTypeFilter, setBookingTypeFilter, clearFilters,
  } = useFacilityBookingReports();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Facility Booking Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">Analyze booking trends, revenue, and facility utilization.</p>
        </div>
        <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
        <input
          value={dateRange} onChange={(e) => setDateRange(e.target.value)}
          className="h-10 min-w-[220px] flex-1 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
        <select value={facilityFilter} onChange={(e) => setFacilityFilter(e.target.value)} className={selectClass}>
          <option>All Facilities</option>
          {facilityOptions?.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
          <option>All Status</option>
          {statusOptions?.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={bookingTypeFilter} onChange={(e) => setBookingTypeFilter(e.target.value)} className={selectClass}>
          <option>All Booking Types</option>
          {bookingTypeOptions?.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <Button type="button" variant="outline" onClick={clearFilters}>Clear</Button>
        <span className="ml-auto text-xs text-ink-subtle">{comparisonLabel}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <ReportStatCard icon={CalendarCheck2} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Bookings" value={stats.totalBookings.value} delta={stats.totalBookings.delta} trendUp={stats.totalBookings.trendUp} />
        <ReportStatCard icon={CheckCircle2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Approved" value={stats.approvedBookings.value} delta={stats.approvedBookings.delta} trendUp={stats.approvedBookings.trendUp} />
        <ReportStatCard icon={Clock} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Pending" value={stats.pendingBookings.value} delta={stats.pendingBookings.delta} trendUp={stats.pendingBookings.trendUp} />
        <ReportStatCard icon={XCircle} iconBg="bg-[#FEE2E2]" iconColor="text-[#DC2626]" label="Rejected" value={stats.rejectedBookings.value} delta={stats.rejectedBookings.delta} trendUp={stats.rejectedBookings.trendUp} />
        <ReportStatCard icon={IndianRupee} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Revenue" value={stats.totalRevenue.value} delta={stats.totalRevenue.delta} trendUp={stats.totalRevenue.trendUp} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
            <BookingsTrendChart data={trend} />
            <BookingsByStatusReportDonutCard data={statusDonut} />
          </div>
          <BookingsByFacilityTable data={byFacility} />
          <BookingsByDayTable data={byDay} />
        </div>

        <div className="flex flex-col gap-6">
          <ReportOverviewCard items={overview} />
          <PopularReportsCard reports={popularReports} />
        </div>
      </div>
    </div>
  );
}
