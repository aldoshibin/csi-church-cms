"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useFellowshipActivities } from "@/hooks/useFellowshipActivities";
import { Button } from "@/components/ui/Button";
import { ActivitiesStatsCards } from "@/components/womens-fellowship/activities/ActivitiesStatsCards";
import { ActivitiesTable } from "@/components/womens-fellowship/activities/ActivitiesTable";
import { ActUpcomingCard, ActivitiesByFocusCard, ActQuickActions } from "@/components/womens-fellowship/activities/ActivitiesSidebarExtras";
import { ActivityDetailsModal } from "@/components/womens-fellowship/activities/ActivityDetailsModal";

export default function FellowshipActivitiesPage() {
  const {
    activities, totalCount, isLoading, stats, upcoming, byFocus,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedActivity, setSelectedActivityId,
  } = useFellowshipActivities();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Activities</h1>
          <p className="mt-1 text-sm text-ink-subtle">Track and manage fellowship activities and programs.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/activities/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Activity</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <ActivitiesStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActivitiesTable
            activities={activities}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => setSelectedActivityId(row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <ActUpcomingCard activities={upcoming} />
          <ActivitiesByFocusCard breakdown={byFocus.breakdown} />
          <ActQuickActions />
        </div>
      </div>

      {selectedActivity && (
        <ActivityDetailsModal activity={selectedActivity} onClose={() => setSelectedActivityId(null)} />
      )}
    </div>
  );
}
