"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useLessons } from "@/hooks/useLessons";
import { Button } from "@/components/ui/Button";
import { LessonsTable } from "@/components/sunday-school/lessons/LessonsTable";
import { PopularTopicsRow } from "@/components/sunday-school/lessons/PopularTopicsRow";
import { UpcomingLessonsCard } from "@/components/sunday-school/lessons/UpcomingLessonsCard";
import { LessonsQuickActions, LessonsNotePanel } from "@/components/sunday-school/lessons/LessonsQuickActions";

export default function LessonsPage() {
  const {
    lessons, totalCount, isLoading, popularTopics, upcomingLessons,
    search, setSearch, classFilter, setClassFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useLessons();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Lessons</h1>
          <p className="mt-1 text-sm text-ink-subtle">Organize and manage Sunday School lessons and curriculum.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/sunday-school/lessons/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Lesson</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <LessonsTable
            lessons={lessons}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            classFilter={classFilter} onClassFilterChange={setClassFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onPublish={(row) => console.log("Publish", row.id)}
            onArchive={(row) => console.log("Archive", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />

          <div className="mt-5">
            <PopularTopicsRow topics={popularTopics} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <UpcomingLessonsCard lessons={upcomingLessons} />
          <LessonsQuickActions />
          <LessonsNotePanel />
        </div>
      </div>
    </div>
  );
}
