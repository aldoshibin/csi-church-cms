"use client";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function buildMayGrid() {
  const days = [];
  for (let d = 27; d <= 30; d++) days.push({ date: d, inMonth: false });
  for (let d = 1; d <= 31; d++) days.push({ date: d, inMonth: true });
  for (let d = 1; d <= 7; d++) days.push({ date: d, inMonth: false });
  return days;
}

export function UpcomingSacramentsCalendar({ monthLabel, highlighted, legend, onViewFullCalendar }) {
  const days = buildMayGrid();

  return (
    <div className="flex h-full flex-col rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <button className="rounded-md p-1 text-ink-muted hover:bg-surface-muted" aria-label="Previous month">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h3 className="text-sm font-semibold text-ink">{monthLabel}</h3>
        <button className="rounded-md p-1 text-ink-muted hover:bg-surface-muted" aria-label="Next month">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1.5 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="text-[10px] font-medium text-ink-subtle">{d}</span>
        ))}
        {days.map((day, i) => {
          const tag = day.inMonth ? highlighted[day.date] : undefined;
          return (
            <span
              key={i}
              className={cn(
                "mx-auto flex h-6 w-6 items-center justify-center rounded-full text-xs",
                !day.inMonth && "text-ink-subtle/40",
                day.inMonth && !tag && "text-ink",
                tag === "today" && "bg-interactive-500 font-semibold text-white",
                tag === "meeting" && "bg-[#8B5CF6] font-semibold text-white"
              )}
            >
              {day.date}
            </span>
          );
        })}
      </div>

      <div className="mt-3 flex flex-1 flex-wrap items-end gap-x-3 gap-y-1">
        {legend.map((item) => (
          <span key={item.label} className="flex items-center gap-1 text-[11px] text-ink-subtle">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /> {item.label}
          </span>
        ))}
      </div>

      <button type="button" onClick={onViewFullCalendar} className="mt-3 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
        View full calendar <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}
