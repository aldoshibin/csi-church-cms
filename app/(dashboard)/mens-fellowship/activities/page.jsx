"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useActivitiesList } from "@/hooks/useActivitiesList";
import { Button } from "@/components/ui/Button";
import { ActivitiesTable } from "@/components/mens-fellowship/activities/ActivitiesTable";
import { ActivityOverviewCard } from "@/components/mens-fellowship/activities/ActivityOverviewCard";
import { UpcomingActivitiesCard } from "@/components/mens-fellowship/activities/UpcomingActivitiesCard";
import { ActivityTypesBreakdownCard } from "@/components/mens-fellowship/activities/ActivityTypesBreakdownCard";
import { ActivitiesQuickActions } from "@/components/mens-fellowship/activities/ActivitiesQuickActions";

export default function ActivitiesPage() {
  const {
    activities, totalCount, isLoading, overview, upcoming, typesBreakdown,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, monthFilter, setMonthFilter,
    page, setPage, pageSize,
  } = useActivitiesList();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Activities</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage men&apos;s fellowship group activities and events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/activities/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Activity</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActivitiesTable
            activities={activities}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            monthFilter={monthFilter} onMonthFilterChange={setMonthFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onManageParticipants={(row) => console.log("Manage participants", row.id)}
            onSendAnnouncement={(row) => console.log("Send announcement", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <ActivityOverviewCard overview={overview} />
          <UpcomingActivitiesCard activities={upcoming} />
          <ActivityTypesBreakdownCard types={typesBreakdown} />
          <ActivitiesQuickActions />
        </div>
      </div>
    </div>
  );
}
