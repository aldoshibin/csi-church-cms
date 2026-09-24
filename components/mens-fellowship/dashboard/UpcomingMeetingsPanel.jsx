"use client";

import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function UpcomingMeetingsPanel({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Meetings</h3>
        <Link href="/mens-fellowship/meetings" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <CalendarDays className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{m.title}</p>
              <p className="truncate text-xs text-ink-subtle">{m.group}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                {formatDate(m.date)} · {m.time} · <MapPin className="h-3 w-3" /> {m.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
