"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { formatDateTime } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export function UpcomingEventsWidget({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <CalendarDays className="h-4 w-4 text-interactive-500" />
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
      </div>

      {events.length === 0 ? (
        <p className="py-6 text-center text-sm text-ink-subtle">No upcoming events scheduled.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="flex items-start justify-between gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{event.title}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                  <MapPin className="h-3 w-3" /> {event.venue || "Venue TBA"}
                </p>
                <p className="mt-0.5 text-xs text-ink-subtle">{formatDateTime(event.start_datetime)}</p>
              </div>
              <Badge variant="info" className="shrink-0">{event.event_type}</Badge>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
