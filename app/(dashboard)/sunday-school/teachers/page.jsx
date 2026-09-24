"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useTeachers } from "@/hooks/useTeachers";
import { Button } from "@/components/ui/Button";
import { TeachersTable } from "@/components/sunday-school/teachers/TeachersTable";
import { ExperienceSummaryRow } from "@/components/sunday-school/teachers/ExperienceSummaryRow";
import { TeachersByGenderCard } from "@/components/sunday-school/teachers/TeachersByGenderCard";
import { ClassesByTeacherCard } from "@/components/sunday-school/teachers/ClassesByTeacherCard";
import { TeachersQuickActions } from "@/components/sunday-school/teachers/TeachersQuickActions";

export default function TeachersPage() {
  const {
    teachers, totalCount, isLoading, byGender, classesByTeacher, experienceSummary,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useTeachers();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Teachers</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage Sunday School teachers and their information.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/teachers/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Teacher</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <TeachersTable
            teachers={teachers}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => console.log("View", row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
            onAssignToClass={(row) => console.log("Assign to class", row.id)}
            onManageClasses={(row) => console.log("Manage classes", row.id)}
            onViewSchedule={(row) => console.log("View schedule", row.id)}
            onAddNote={(row) => console.log("Add note", row.id)}
            onViewDocuments={(row) => console.log("View documents", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />

          <div className="mt-5">
            <ExperienceSummaryRow summary={experienceSummary} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <TeachersByGenderCard total={byGender.total} breakdown={byGender.breakdown} />
          <ClassesByTeacherCard teachers={classesByTeacher} />
          <TeachersQuickActions />
        </div>
      </div>
    </div>
  );
}
