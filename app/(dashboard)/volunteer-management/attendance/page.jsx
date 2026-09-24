"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useAttendance } from "@/hooks/useAttendance";
import { Button } from "@/components/ui/Button";
import { AttendanceOverviewRow } from "@/components/volunteer-management/attendance/AttendanceOverviewRow";
import { AttendanceTable } from "@/components/volunteer-management/attendance/AttendanceTable";
import { AttendanceSummaryDonutCard } from "@/components/volunteer-management/attendance/AttendanceSummaryDonutCard";
import { ServiceAttendanceCard } from "@/components/volunteer-management/attendance/ServiceAttendanceCard";
import { AttendanceQuickActions } from "@/components/volunteer-management/attendance/AttendanceQuickActions";
import { RecentActivityCard } from "@/components/volunteer-management/attendance/RecentActivityCard";

export default function AttendancePage() {
  const router = useRouter();
  const {
    records, totalCount, isLoading, stats, donut, serviceAttendance, recentActivity,
    tabs, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, serviceFilter, setServiceFilter, dateRange, setDateRange,
    page, setPage, pageSize, resetFilters,
  } = useAttendance();

  const openDetails = (row) => router.push(`/volunteer-management/attendance/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage volunteer attendance for services and assignments.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/attendance/mark">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Mark Attendance</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <AttendanceOverviewRow stats={stats} />
          <AttendanceTable
            records={records}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
            serviceFilter={serviceFilter} onServiceFilterChange={setServiceFilter}
            dateRange={dateRange} onDateRangeChange={setDateRange}
            onReset={resetFilters}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAddNote={(row) => console.log("Add note", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceSummaryDonutCard data={donut} />
          <ServiceAttendanceCard services={serviceAttendance} />
          <AttendanceQuickActions />
          <RecentActivityCard activities={recentActivity} />
        </div>
      </div>
    </div>
  );
}
