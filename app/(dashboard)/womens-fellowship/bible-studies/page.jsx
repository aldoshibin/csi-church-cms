"use client";

import { Plus, Download, ChevronDown } from "lucide-react";

import { useBibleStudies } from "@/hooks/useBibleStudies";
import { Button } from "@/components/ui/Button";
import { BibleStudiesTable } from "@/components/womens-fellowship/bible-studies/BibleStudiesTable";
import { BsUpcomingCard, StudiesByTypeCard, BsQuickActions } from "@/components/womens-fellowship/bible-studies/BibleStudiesSidebarExtras";
import { BibleStudyDetailsModal } from "@/components/womens-fellowship/bible-studies/BibleStudyDetailsModal";

export default function BibleStudiesPage() {
  const {
    studies, totalCount, isLoading, upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedStudy, setSelectedStudyId,
  } = useBibleStudies();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Bible Studies</h1>
          <p className="mt-1 text-sm text-ink-subtle">Organize and manage Bible studies and discipleship groups.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Bible Study</Button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BibleStudiesTable
            studies={studies}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => setSelectedStudyId(row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <BsUpcomingCard studies={upcoming} />
          <StudiesByTypeCard breakdown={byType.breakdown} />
          <BsQuickActions />
        </div>
      </div>

      {selectedStudy && (
        <BibleStudyDetailsModal study={selectedStudy} onClose={() => setSelectedStudyId(null)} />
      )}
    </div>
  );
}
