"use client";

import { Plus, Download, ChevronDown } from "lucide-react";

import { useYmAttendance } from "@/hooks/useYmAttendance";
import { Button } from "@/components/ui/Button";
import { AttendanceMainStatsCards } from "@/components/youth-ministry/attendance/AttendanceMainStatsCards";
import { AttendanceOverviewChart } from "@/components/youth-ministry/attendance/AttendanceOverviewChart";
import { RecentAttendanceRecordsTable } from "@/components/youth-ministry/attendance/RecentAttendanceRecordsTable";
import { AttendanceByMinistryCard } from "@/components/youth-ministry/attendance/AttendanceByMinistryCard";
import { AttendanceUpcomingEventsCard, AttendanceQuickActionsGrid } from "@/components/youth-ministry/attendance/AttendanceSidebarExtras";

export default function YmAttendancePage() {
  const {
    stats, trend, byMinistry, upcomingEvents, isLoading,
    records, totalCount, search, setSearch, page, setPage, pageSize,
  } = useYmAttendance();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage attendance across all ministries and events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Mark Attendance
          </Button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <AttendanceMainStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AttendanceOverviewChart data={trend} />
        </div>
        <AttendanceByMinistryCard total={byMinistry.total} breakdown={byMinistry.breakdown} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentAttendanceRecordsTable
            records={records}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            onExport={(row) => console.log("Export", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceUpcomingEventsCard events={upcomingEvents} />
          <AttendanceQuickActionsGrid />
        </div>
      </div>
    </div>
  );
}
