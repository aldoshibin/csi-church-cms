"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, CalendarDays, Users, Cross, Megaphone, Plus, List } from "lucide-react";

import { EVENTS_SERVICES_MOCK } from "@/lib/mock/eventsServicesMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { EventCategoryFilterBar } from "@/components/events-services/EventCategoryFilterBar";
import { EventsServicesTable } from "@/components/events-services/EventsServicesTable";
import { EventCalendarFull } from "@/components/events-services/EventCalendarFull";


export default function UpcomingEventsServicesPage() {
  const data = EVENTS_SERVICES_MOCK;
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [viewMode, setViewMode] = React.useState("table"); // "table" | "calendar"

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Upcoming Events &amp; Services</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Upcoming Events &amp; Services</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode(viewMode === "table" ? "calendar" : "table")}
            className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink shadow-card hover:bg-surface-muted"
          >
            {viewMode === "table" ? <CalendarDays className="h-4 w-4" /> : <List className="h-4 w-4" />}
            {viewMode === "table" ? "Calendar View" : "Table View"}
          </button>
          <button className="flex items-center gap-2 rounded-md bg-interactive-500 px-3 py-2 text-sm font-semibold text-white shadow-card hover:bg-interactive-600">
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        </div>
      </div>

     
      {viewMode === "calendar" && (
        <EventCalendarFull
          monthLabel={data.calendarMonth}
          eventsByDate={data.calendarEventsByDate}
          today={data.today}
          year={2025}
          month={4}
        />
      )}

      {/* 5 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <ParishStatCard
          label="Total Events" value={data.cards.totalEvents.value} sublabel={data.cards.totalEvents.sublabel}
          icon={CalendarDays} href="/events" viewLabel="View Calendar"
        />
        <ParishStatCard
          label="Services" value={data.cards.services.value} sublabel={data.cards.services.sublabel}
          icon={Users} href="/events?category=services" viewLabel="View Services"
        />
        <ParishStatCard
          label="Special Services" value={data.cards.specialServices.value} sublabel={data.cards.specialServices.sublabel}
          icon={Cross} href="/events?category=special-services" viewLabel="View Details"
        />
        <ParishStatCard
          label="Retreats & Programs" value={data.cards.retreatsPrograms.value} sublabel={data.cards.retreatsPrograms.sublabel}
          icon={Users} href="/events?category=retreats" viewLabel="View Details"
        />
        <ParishStatCard
          label="Registrations" value={data.cards.registrations.value} sublabel={data.cards.registrations.sublabel}
          icon={Megaphone} href="/events/registrations" viewLabel="View Registrations"
        />
      </div>

      <div className="rounded-lg border border-border bg-white shadow-card">
        <EventCategoryFilterBar
          categories={data.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          dateRangeLabel={data.dateRangeLabel}
        />
        <EventsServicesTable rows={data.rows} />
      </div>
    </div>
  );
}
