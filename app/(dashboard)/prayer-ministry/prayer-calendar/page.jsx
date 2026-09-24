"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePrayerCalendar } from "@/hooks/usePrayerCalendar";
import { Button } from "@/components/ui/Button";
import { CalendarMonthGrid } from "@/components/prayer-ministry/calendar/CalendarMonthGrid";
import { PrayerAreasSection } from "@/components/prayer-ministry/calendar/PrayerAreasSection";
import { CalendarUpcomingEventsCard, CalendarOverviewCard } from "@/components/prayer-ministry/calendar/CalendarSidebarCards";
import { CalendarQuickActions } from "@/components/prayer-ministry/calendar/CalendarQuickActions";

export default function PrayerCalendarPage() {
  const {
    monthGrid, monthLabel, todayDay, prayerAreas, upcomingEvents, overview,
    eventTypeFilter, setEventTypeFilter, prayerAreaFilter, setPrayerAreaFilter, view, setView,
  } = usePrayerCalendar();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Prayer Calendar</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage prayer schedules, events and intercession plans.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/prayer-calendar/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Prayer Event</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <CalendarMonthGrid
            monthGrid={monthGrid} monthLabel={monthLabel} todayDay={todayDay}
            eventTypeFilter={eventTypeFilter} onEventTypeFilterChange={setEventTypeFilter}
            prayerAreaFilter={prayerAreaFilter} onPrayerAreaFilterChange={setPrayerAreaFilter}
            view={view} onViewChange={setView}
          />
          <PrayerAreasSection areas={prayerAreas} />
        </div>

        <div className="flex flex-col gap-5">
          <CalendarUpcomingEventsCard events={upcomingEvents} />
          <CalendarOverviewCard overview={overview} />
          <CalendarQuickActions />
        </div>
      </div>
    </div>
  );
}
