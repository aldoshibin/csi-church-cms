"use client";

import { CalendarDays } from "lucide-react";

export function CwUpcomingRehearsalsCard({ rehearsals = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Rehearsals</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {rehearsals.map((r, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
                <span className="text-[10px] font-semibold uppercase leading-none">{r.month}</span>
                <span className="text-sm font-bold leading-tight">{r.day}</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{r.title}</p>
                <p className="truncate text-xs text-ink-subtle">{r.meta}, {r.time}</p>
                <p className="truncate text-xs text-ink-subtle">{r.location}</p>
              </div>
            </div>
            <CalendarDays className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
          </div>
        ))}
      </div>
    </div>
  );
}
