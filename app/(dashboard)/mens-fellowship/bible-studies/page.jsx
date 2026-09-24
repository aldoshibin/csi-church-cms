"use client";

import { Download, ChevronDown } from "lucide-react";

import { useBibleStudiesList } from "@/hooks/useBibleStudiesList";
import { Button } from "@/components/ui/Button";
import { BibleStudiesTable } from "@/components/mens-fellowship/bible-studies/BibleStudiesTable";
import { StudyOverviewCard } from "@/components/mens-fellowship/bible-studies/StudyOverviewCard";
import { UpcomingSessionsCard } from "@/components/mens-fellowship/bible-studies/UpcomingSessionsCard";
import { BibleStudiesQuickActions } from "@/components/mens-fellowship/bible-studies/BibleStudiesQuickActions";

export default function BibleStudiesPage() {
  const {
    studies, totalCount, isLoading, overview, upcomingSessions,
    search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter,
    teacherFilter, setTeacherFilter, dayFilter, setDayFilter,
    page, setPage, pageSize,
  } = useBibleStudiesList();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Bible Studies</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage men&apos;s fellowship group bible studies and study series.</p>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BibleStudiesTable
            studies={studies}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
            teacherFilter={teacherFilter} onTeacherFilterChange={setTeacherFilter}
            dayFilter={dayFilter} onDayFilterChange={setDayFilter}
            onEdit={(row) => console.log("Edit", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <StudyOverviewCard overview={overview} />
          <UpcomingSessionsCard sessions={upcomingSessions} />
          <BibleStudiesQuickActions />
        </div>
      </div>
    </div>
  );
}
