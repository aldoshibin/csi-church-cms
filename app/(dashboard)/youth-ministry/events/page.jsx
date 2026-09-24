"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useYmEvents } from "@/hooks/useYmEvents";
import { Button } from "@/components/ui/Button";
import { YmEventsTable } from "@/components/youth-ministry/events/YmEventsTable";
import { YmEventsByCategoryRow } from "@/components/youth-ministry/events/YmEventsByCategoryRow";
import { YmEventsCalendarCard } from "@/components/youth-ministry/events/YmEventsCalendarCard";
import { YmEventsUpcomingCard, YmEventsQuickActions } from "@/components/youth-ministry/events/YmEventsSidebarExtras";

export default function YmEventsPage() {
  const {
    events, totalCount, isLoading, byCategory, upcomingEvents,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useYmEvents();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Events</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize all church and ministry events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/events/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Event</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <YmEventsTable
            events={events}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onViewRegistrations={(row) => console.log("View registrations", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />

          <div className="mt-5">
            <YmEventsByCategoryRow categories={byCategory} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <YmEventsCalendarCard />
          <YmEventsUpcomingCard events={upcomingEvents} />
          <YmEventsQuickActions />
        </div>
      </div>
    </div>
  );
}
