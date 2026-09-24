"use client";

import Link from "next/link";

export function UpcomingPrayerMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Prayer Meetings</h3>
        <Link href="/prayer-ministry/prayer-calendar" className="text-xs font-medium text-interactive-500 hover:underline">View Calendar</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <span className="text-[10px] font-semibold uppercase leading-none">{m.month}</span>
              <span className="text-sm font-bold leading-tight">{m.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{m.title}</p>
              <p className="truncate text-xs text-ink-subtle">{m.meta}, {m.time}</p>
              <p className="truncate text-xs text-ink-subtle">{m.location}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/prayer-ministry/prayer-calendar" className="mt-4 flex items-center justify-center rounded-md border border-border py-2.5 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
        View Full Prayer Calendar
      </Link>
    </div>
  );
}
