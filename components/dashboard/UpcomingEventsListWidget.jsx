"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";


export function UpcomingEventsListWidget({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">Upcoming Events</h3>
        <Link href="/events" className="text-xs font-medium text-interactive-500 hover:underline">
          View Calendar →
        </Link>
      </div>

      <ul className="space-y-3">
        {events.map((event) => (
          <li key={event.id} className="flex items-start gap-3">
            <div
              className={cn(
                "flex w-12 shrink-0 flex-col items-center rounded-md border py-1 text-center",
                event.highlight ? "border-accent-300 bg-accent-50" : "border-border bg-surface-canvas"
              )}
            >
              <span className={cn("text-[10px] font-semibold uppercase", event.highlight ? "text-accent-600" : "text-interactive-500")}>
                {event.month}
              </span>
              <span className="text-base font-bold leading-none text-ink">{event.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{event.title}</p>
              <p className="text-xs text-ink-subtle">{event.when}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {event.location}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
