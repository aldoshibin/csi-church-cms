"use client";

import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function GroupUpcomingMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Meetings</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <CalendarDays className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{m.title}</p>
                <p className="truncate text-xs text-ink-subtle">{m.meta}, {m.time}</p>
              </div>
            </div>
            <Badge variant="info">Upcoming</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
