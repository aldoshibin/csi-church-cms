"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENT_TYPE_BG_CLASS, CALENDAR_EVENT_TYPE_OPTIONS, CALENDAR_PRAYER_AREA_OPTIONS, CALENDAR_LEGEND } from "@/lib/mock/prayerCalendarMockData";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function CalendarMonthGrid({
  monthGrid, monthLabel, todayDay,
  eventTypeFilter, onEventTypeFilterChange, prayerAreaFilter, onPrayerAreaFilterChange, view, onViewChange,
}) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <button type="button" className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-ink-muted hover:bg-surface-canvas">Today</button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Previous month">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Next month">
            <ChevronRight className="h-4 w-4" />
          </button>
          <h3 className="ml-1 text-base font-semibold text-ink">{monthLabel}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={eventTypeFilter} onChange={(e) => onEventTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Events</option>
            {CALENDAR_EVENT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={prayerAreaFilter} onChange={(e) => onPrayerAreaFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Prayer Areas</option>
            {CALENDAR_PRAYER_AREA_OPTIONS.map((a) => <option key={a}>{a}</option>)}
          </select>
          <div className="flex rounded-md border border-border p-0.5">
            {["Month", "Week", "List"].map((v) => (
              <button
                key={v} type="button" onClick={() => onViewChange(v)}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${view === v ? "bg-ink text-white" : "text-ink-muted hover:bg-surface-canvas"}`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b border-border">
        {WEEKDAYS.map((d) => (
          <div key={d} className="border-r border-border px-2 py-2 text-center text-xs font-semibold text-ink-subtle last:border-r-0">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {monthGrid.map((cell, i) => (
          <div
            key={i}
            className={`min-h-[92px] border-b border-r border-border p-1.5 last:border-r-0 [&:nth-child(7n)]:border-r-0 ${cell.inMonth ? "bg-white" : "bg-surface-canvas"}`}
          >
            <span
              className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${
                cell.inMonth && cell.day === todayDay ? "bg-ink text-white" : cell.inMonth ? "text-ink" : "text-ink-subtle"
              }`}
            >
              {cell.day}
            </span>
            <div className="mt-1 flex flex-col gap-1">
              {cell.events.slice(0, 2).map((e, j) => (
                <span key={j} className={`truncate rounded px-1.5 py-0.5 text-[10px] font-medium ${EVENT_TYPE_BG_CLASS[e.title] ?? "bg-surface-muted text-ink-subtle"}`}>
                  {e.title}{e.time ? ` \u2022 ${e.time}` : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-border px-4 py-3">
        {CALENDAR_LEGEND.map((l) => (
          <span key={l.label} className="flex items-center gap-1.5 text-xs text-ink-muted">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: l.color }} /> {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
