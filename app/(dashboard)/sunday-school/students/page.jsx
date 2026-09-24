"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useStudents } from "@/hooks/useStudents";
import { Button } from "@/components/ui/Button";
import { StudentsStatsCards } from "@/components/sunday-school/students/StudentsStatsCards";
import { StudentsTable } from "@/components/sunday-school/students/StudentsTable";
import { AgeGroupSummaryRow } from "@/components/sunday-school/students/AgeGroupSummaryRow";
import { StudentsByClassCard } from "@/components/sunday-school/students/StudentsByClassCard";
import { RecentRegistrationsCard } from "@/components/sunday-school/students/RecentRegistrationsCard";
import { StudentsQuickActions } from "@/components/sunday-school/students/StudentsQuickActions";

export default function StudentsPage() {
  const {
    students, totalCount, isLoading, stats, byClass, ageGroupSummary, recentRegistrations,
    search, setSearch, classFilter, setClassFilter,
    page, setPage, pageSize,
  } = useStudents();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Students</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage Sunday School students and their details.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/students/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Student</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <StudentsStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <StudentsTable
            students={students}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            classFilter={classFilter} onClassFilterChange={setClassFilter}
            onView={(row) => console.log("View", row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
            onManageAttendance={(row) => console.log("Manage attendance", row.id)}
            onAssignToClass={(row) => console.log("Assign to class", row.id)}
            onAddNote={(row) => console.log("Add note", row.id)}
            onViewDocuments={(row) => console.log("View documents", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />

          <div className="mt-5">
            <AgeGroupSummaryRow summary={ageGroupSummary} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <StudentsByClassCard total={byClass.total} breakdown={byClass.breakdown} />
          <RecentRegistrationsCard registrations={recentRegistrations} />
          <StudentsQuickActions />
        </div>
      </div>
    </div>
  );
}
