"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const TAG_DOT_COLOR = {
  event: "bg-success-500",
  service: "bg-accent-500",
  meeting: "bg-purple-500",
  holiday: "bg-success-600",
};


export function EventsCalendarWidget({ monthLabel, days = [] }) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button className="rounded-md p-1.5 text-ink-muted hover:bg-surface-muted" aria-label="Previous month">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-base font-bold text-ink">{monthLabel}</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>Month</option>
          <option>Week</option>
          <option>Day</option>
        </select>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {WEEKDAYS.map((day) => (
          <span key={day} className="text-xs font-medium text-ink-subtle">{day}</span>
        ))}

        {days.map((day, index) => {
          const isMarked = day.inMonth && day.tag;
          return (
            <div key={index} className="flex flex-col items-center gap-0.5 py-1">
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-sm",
                  !day.inMonth && "text-ink-subtle/40",
                  day.inMonth && !isMarked && !day.italic && "text-ink",
                  day.inMonth && !isMarked && day.italic && "font-semibold italic text-ink",
                  isMarked && "bg-accent-50 font-semibold text-accent-600"
                )}
              >
                {day.date}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-3">
        {Object.entries({ Event: "event", Service: "service", Meeting: "meeting", Holiday: "holiday" }).map(
          ([label, key]) => (
            <span key={key} className="flex items-center gap-1.5 text-xs text-ink-muted">
              <span className={cn("h-2 w-2 rounded-full", TAG_DOT_COLOR[key])} />
              {label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
