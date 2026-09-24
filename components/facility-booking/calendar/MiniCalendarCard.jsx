"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function MiniCalendarCard({ monthLabel, days }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <button type="button" className="flex h-7 w-7 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Previous month">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-sm font-semibold text-ink">{monthLabel}</h3>
        <button type="button" className="flex h-7 w-7 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Next month">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-1.5 text-center text-xs">
        {WEEKDAYS.map((d) => <span key={d} className="font-medium text-ink-subtle">{d}</span>)}
        {days.map((day) => (
          <span
            key={day.date}
            className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${
              day.isToday ? "bg-success-500 font-semibold text-white" : day.inMonth ? "text-ink" : "text-ink-subtle/50"
            }`}
          >
            {day.dayNumber}
          </span>
        ))}
      </div>
    </div>
  );
}
