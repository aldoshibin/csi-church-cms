"use client";

import { formatDate } from "@/lib/utils";

export function EditAttendanceEventBar({ event }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-lg border border-border bg-white p-4 shadow-card sm:grid-cols-4">
      <div>
        <p className="text-xs text-ink-subtle">Event</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{event.title}</p>
      </div>
      <div>
        <p className="text-xs text-ink-subtle">Date &amp; Time</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{formatDate(event.date)} ({event.day}) · {event.time}</p>
      </div>
      <div>
        <p className="text-xs text-ink-subtle">Venue</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{event.venue}</p>
      </div>
      <div>
        <p className="text-xs text-ink-subtle">Total Registered</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{event.totalRegistered}</p>
      </div>
    </div>
  );
}
