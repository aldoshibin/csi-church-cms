"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useClasses } from "@/hooks/useClasses";
import { Button } from "@/components/ui/Button";
import { ClassesStatsCards } from "@/components/sunday-school/classes/ClassesStatsCards";
import { ClassesTable } from "@/components/sunday-school/classes/ClassesTable";
import { ClassOverviewCard } from "@/components/sunday-school/classes/ClassOverviewCard";
import { UpcomingClassSchedulesCard } from "@/components/sunday-school/classes/UpcomingClassSchedulesCard";

export default function ClassesPage() {
  const {
    classes, totalCount, isLoading, stats, overview, upcomingSchedules,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useClasses();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Classes</h1>
          <nav className="mt-1 flex items-center gap-1.5 text-xs text-interactive-500">
            <Link href="/sunday-school" className="hover:underline">Sunday School Management</Link>
            <span className="text-ink-subtle">›</span>
            <span className="text-ink-subtle">Classes</span>
          </nav>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize Sunday School classes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/classes/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Class</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <ClassesStatsCards stats={stats} />

      <ClassesTable
        classes={classes}
        isLoading={isLoading}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusChange={setStatusFilter}
        onView={(row) => console.log("View", row.id)}
        onEdit={(row) => console.log("Edit", row.id)}
        onManageStudents={(row) => console.log("Manage students", row.id)}
        onManageTeachers={(row) => console.log("Manage teachers", row.id)}
        onClassAttendance={(row) => console.log("Class attendance", row.id)}
        onClassSchedule={(row) => console.log("Class schedule", row.id)}
        onDuplicate={(row) => console.log("Duplicate", row.id)}
        onDeactivate={(row) => console.log("Deactivate", row.id)}
        onDelete={(row) => console.log("Delete", row.id)}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ClassOverviewCard total={overview.total} breakdown={overview.breakdown} />
        <UpcomingClassSchedulesCard schedules={upcomingSchedules} />
      </div>
    </div>
  );
}
