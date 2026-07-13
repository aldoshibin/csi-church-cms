"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


export function EventCalendarFull({ monthLabel, eventsByDate = {}, today = 18, year = 2025, month = 4 }) {
  const [view, setView] = React.useState("Month");
  const [selectedDay, setSelectedDay] = React.useState(today);

  const days = React.useMemo(() => buildMonthGrid(year, month), [year, month]);

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-interactive-500">Event Calendar</h3>
          <p className="text-xs text-ink-subtle">Switch between month and day view, navigate dates, and select an event day.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-md border border-border p-1.5 text-ink-muted hover:bg-surface-muted" aria-label="Previous month">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm font-semibold text-ink">{monthLabel}</span>
          <button className="rounded-md border border-border p-1.5 text-ink-muted hover:bg-surface-muted" aria-label="Next month">
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("Month")}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium",
              view === "Month" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted"
            )}
          >
            Month View
          </button>
          <button
            onClick={() => setView("Day")}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium",
              view === "Day" ? "bg-interactive-500 text-white" : "border border-border text-ink-muted"
            )}
          >
            Day View
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {WEEKDAYS.map((day) => (
          <div key={day} className="bg-surface-canvas py-2 text-center text-xs font-medium text-ink-subtle">
            {day}
          </div>
        ))}

        {days.map((day, index) => {
          const dateKey = day.inMonth ? formatDateKey(year, month, day.date) : null;
          const eventTitle = dateKey ? eventsByDate[dateKey] : null;
          const isSelected = day.inMonth && day.date === selectedDay;

          return (
            <button
              key={index}
              disabled={!day.inMonth}
              onClick={() => day.inMonth && setSelectedDay(day.date)}
              className={cn(
                "flex min-h-[64px] flex-col items-start rounded-md border p-2 text-left transition-colors",
                !day.inMonth && "border-transparent",
                day.inMonth && !isSelected && "border-border hover:border-interactive-300",
                isSelected && "border-2 border-interactive-500 bg-interactive-50"
              )}
            >
              {day.inMonth && <span className="text-sm text-ink">{day.date}</span>}
              {eventTitle && (
                <span className="mt-1 w-full truncate rounded bg-interactive-100 px-1.5 py-0.5 text-[10px] font-medium text-interactive-700">
                  {eventTitle}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function buildMonthGrid(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const startWeekday = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < startWeekday; i++) days.push({ inMonth: false });
  for (let d = 1; d <= daysInMonth; d++) days.push({ inMonth: true, date: d });
  while (days.length % 7 !== 0) days.push({ inMonth: false });
  return days;
}

function formatDateKey(year, month, date) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
}
