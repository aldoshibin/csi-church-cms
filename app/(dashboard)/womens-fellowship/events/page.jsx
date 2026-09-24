"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useFellowshipEvents } from "@/hooks/useFellowshipEvents";
import { Button } from "@/components/ui/Button";
import { FellowshipEventsTable } from "@/components/womens-fellowship/events/FellowshipEventsTable";
import { FeUpcomingEventsCard, EventsByTypeCard, FeQuickActions } from "@/components/womens-fellowship/events/EventsSidebarExtras";
import { EventDetailsModal } from "@/components/womens-fellowship/events/EventDetailsModal";

export default function FellowshipEventsPage() {
  const {
    events, totalCount, isLoading, upcoming, byType,
    search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedEvent, setSelectedEventId,
  } = useFellowshipEvents();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Events</h1>
          <p className="mt-1 text-sm text-ink-subtle">Organize and manage women's fellowship events.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/events/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Event</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FellowshipEventsTable
            events={events}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => setSelectedEventId(row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <FeUpcomingEventsCard events={upcoming} />
          <EventsByTypeCard breakdown={byType.breakdown} />
          <FeQuickActions />
        </div>
      </div>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEventId(null)} />
      )}
    </div>
  );
}
