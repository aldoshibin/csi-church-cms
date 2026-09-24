"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useYmLessons } from "@/hooks/useYmLessons";
import { Button } from "@/components/ui/Button";
import { LessonsStatsCards } from "@/components/youth-ministry/lessons/LessonsStatsCards";
import { YmLessonsTable } from "@/components/youth-ministry/lessons/YmLessonsTable";
import { YmUpcomingLessonsCard } from "@/components/youth-ministry/lessons/YmUpcomingLessonsCard";
import { LessonsByCategoryCard, YmLessonsQuickActions } from "@/components/youth-ministry/lessons/LessonsByCategoryCard";

export default function YmLessonsPage() {
  const {
    lessons, totalCount, isLoading, stats, upcomingLessons, byCategory,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useYmLessons();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Lessons</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create, manage and organize Sunday school lessons.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/lessons/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Lesson</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <LessonsStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <YmLessonsTable
            lessons={lessons}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onPublish={(row) => console.log("Publish", row.id)}
            onArchive={(row) => console.log("Archive", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <YmUpcomingLessonsCard lessons={upcomingLessons} />
          <LessonsByCategoryCard breakdown={byCategory.breakdown} />
          <YmLessonsQuickActions />
        </div>
      </div>
    </div>
  );
}
