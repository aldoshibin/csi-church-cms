"use client";

import { useSundaySchoolDashboard } from "@/hooks/useSundaySchoolDashboard";
import { SundaySchoolStatsCards } from "@/components/sunday-school/SundaySchoolStatsCards";
import { AttendanceOverviewChart } from "@/components/sunday-school/AttendanceOverviewChart";
import { ClassWiseAttendanceCard } from "@/components/sunday-school/ClassWiseAttendanceCard";
import { RecentAttendanceCard } from "@/components/sunday-school/RecentAttendanceCard";
import { UpcomingEventsPanel } from "@/components/sunday-school/UpcomingEventsPanel";
import { SundaySchoolQuickActions } from "@/components/sunday-school/SundaySchoolQuickActions";

export default function SundaySchoolDashboardPage() {
  const {
    stats, attendanceOverview, classWiseAttendance, upcomingEvents, isLoading,
    recentAttendance, totalCount, classFilter, setClassFilter, dateRange, page, setPage, pageSize,
  } = useSundaySchoolDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Sunday School Management</h1>
        <p className="mt-1 text-sm text-ink-subtle">Manage sunday school activities, classes, students, teachers and more.</p>
      </div>

      <SundaySchoolStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AttendanceOverviewChart data={attendanceOverview} />
        </div>
        <ClassWiseAttendanceCard total={classWiseAttendance.total} totalPct={classWiseAttendance.totalPct} breakdown={classWiseAttendance.breakdown} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentAttendanceCard
            attendance={recentAttendance}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            classFilter={classFilter}
            onClassFilterChange={setClassFilter}
            dateRange={dateRange}
            onView={(row) => console.log("View attendance", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <UpcomingEventsPanel events={upcomingEvents} />
          <SundaySchoolQuickActions />
        </div>
      </div>
    </div>
  );
}
