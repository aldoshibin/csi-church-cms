"use client";

import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function UpcomingEventsPanel({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
        <Link href="/sunday-school/events" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{event.month}</span>
              <span className="text-sm font-bold text-ink">{event.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-ink">{event.title}</p>
                <Badge variant="info" className="shrink-0">{event.status}</Badge>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-subtle">
                <Clock className="h-3 w-3" /> {event.time}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/sunday-school/events" className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-interactive-500 hover:underline">
        View Full Calendar
      </Link>
    </div>
  );
}
