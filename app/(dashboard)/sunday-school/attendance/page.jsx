"use client";

import { CircleCheck, Download } from "lucide-react";

import { useAttendance } from "@/hooks/useAttendance";
import { Button } from "@/components/ui/Button";
import { AttendanceStatsCards } from "@/components/sunday-school/attendance/AttendanceStatsCards";
import { AttendanceOverviewTable } from "@/components/sunday-school/attendance/AttendanceOverviewTable";
import { RecentAttendanceRecordsCard } from "@/components/sunday-school/attendance/RecentAttendanceRecordsCard";
import { AttendanceByStatusCard } from "@/components/sunday-school/attendance/AttendanceByStatusCard";
import { AttendanceTrendChart } from "@/components/sunday-school/attendance/AttendanceTrendChart";
import { AttendanceQuickActions, AttendanceNotePanel } from "@/components/sunday-school/attendance/AttendanceQuickActions";

export default function AttendancePage() {
  const {
    stats, overview, overviewTotal, byStatus, trend, isLoading,
    records, totalCount, date, classFilter, setClassFilter, page, setPage, pageSize,
  } = useAttendance();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Attendance</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage attendance for students across all classes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<CircleCheck className="h-4 w-4" />}>Mark Attendance</Button>
          <Button type="button" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
        </div>
      </div>

      <AttendanceStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AttendanceOverviewTable
            overview={overview} overviewTotal={overviewTotal}
            date={date} classFilter={classFilter} onClassFilterChange={setClassFilter}
            onView={(row) => console.log("View class attendance", row.className)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceByStatusCard total={byStatus.total} breakdown={byStatus.breakdown} />
          <AttendanceTrendChart data={trend} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentAttendanceRecordsCard
            records={records} isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewRecord={(row) => console.log("View record", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceQuickActions />
          <AttendanceNotePanel />
        </div>
      </div>
    </div>
  );
}
