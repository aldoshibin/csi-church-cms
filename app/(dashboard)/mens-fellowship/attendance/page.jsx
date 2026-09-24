"use client";

import { Download, ChevronDown, SlidersHorizontal } from "lucide-react";

import { useMeetingAttendanceList } from "@/hooks/useMeetingAttendanceList";
import { Button } from "@/components/ui/Button";
import { AttendanceStatsCards } from "@/components/mens-fellowship/attendance/AttendanceStatsCards";
import { AttendanceTable } from "@/components/mens-fellowship/attendance/AttendanceTable";
import { AttendanceOverviewCard } from "@/components/mens-fellowship/attendance/AttendanceOverviewCard";
import { AttendanceTrendCard } from "@/components/mens-fellowship/attendance/AttendanceTrendCard";
import { AttendanceQuickActions } from "@/components/mens-fellowship/attendance/AttendanceQuickActions";
import { TopAttendedMeetingsCard } from "@/components/mens-fellowship/attendance/TopAttendedMeetingsCard";

export default function MeetingAttendancePage() {
  const {
    meetings, totalCount, isLoading, stats, overview, trend, topAttended,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, monthFilter, setMonthFilter,
    page, setPage, pageSize,
  } = useMeetingAttendanceList();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Meeting Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage attendance for all men&apos;s fellowship meetings.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
        </div>
      </div>

      <AttendanceStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AttendanceTable
            meetings={meetings}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            monthFilter={monthFilter} onMonthFilterChange={setMonthFilter}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceOverviewCard overview={overview} />
          <AttendanceTrendCard trend={trend} />
          <AttendanceQuickActions />
          <TopAttendedMeetingsCard meetings={topAttended} />
        </div>
      </div>
    </div>
  );
}
