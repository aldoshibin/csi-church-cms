"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import {
  CALENDAR_MAY_2026_EVENTS, PRAYER_AREAS_MOCK, CALENDAR_UPCOMING_EVENTS_MOCK, CALENDAR_OVERVIEW_MOCK,
} from "@/lib/mock/prayerCalendarMockData";

/** Builds a Sun-Sat month grid of {date, day, inMonth, events} cells for the given year/month (0-indexed). */
function buildMonthGrid(year, month, eventsByDay) {
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = 0; i < startOffset; i++) {
    cells.push({ day: daysInPrevMonth - startOffset + i + 1, inMonth: false, events: [] });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, inMonth: true, events: eventsByDay[d] ?? [] });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const nextDay = cells.length - (startOffset + daysInMonth) + 1;
    cells.push({ day: nextDay, inMonth: false, events: [] });
    if (cells.length >= 42) break;
  }
  return cells;
}

export function usePrayerCalendar() {
  const [year] = React.useState(2026);
  const [month] = React.useState(4); // May (0-indexed)
  const [todayDay] = React.useState(15);

  const [eventsByDay, setEventsByDay] = React.useState(CALENDAR_MAY_2026_EVENTS);
  const [prayerAreas] = React.useState(PRAYER_AREAS_MOCK);
  const [upcomingEvents] = React.useState(CALENDAR_UPCOMING_EVENTS_MOCK);
  const [overview] = React.useState(CALENDAR_OVERVIEW_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [eventTypeFilter, setEventTypeFilter] = React.useState("All Events");
  const [prayerAreaFilter, setPrayerAreaFilter] = React.useState("All Prayer Areas");
  const [view, setView] = React.useState("Month");

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await prayerMinistryService.listCalendarEvents({ year, month, eventTypeFilter, prayerAreaFilter });
        if (!cancelled) setEventsByDay(result?.eventsByDay ?? CALENDAR_MAY_2026_EVENTS);
      } catch {
        if (!cancelled) setEventsByDay(CALENDAR_MAY_2026_EVENTS);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [year, month, eventTypeFilter, prayerAreaFilter]);

  const monthGrid = React.useMemo(() => buildMonthGrid(year, month, eventsByDay), [year, month, eventsByDay]);
  const monthLabel = React.useMemo(() => new Date(year, month, 1).toLocaleString("en-US", { month: "long", year: "numeric" }), [year, month]);

  return {
    monthGrid, monthLabel, todayDay, isLoading,
    prayerAreas, upcomingEvents, overview,
    eventTypeFilter, setEventTypeFilter, prayerAreaFilter, setPrayerAreaFilter,
    view, setView,
  };
}
