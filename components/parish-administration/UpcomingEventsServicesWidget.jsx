"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const TAG_BADGE_CLASS = {
  event: "border-success-300 bg-success-50 text-success-600",
  service: "border-accent-300 bg-accent-50 text-accent-600",
  meeting: "border-purple-300 bg-purple-50 text-purple-600",
};


export function UpcomingEventsServicesWidget({ events = [] }) {
  return (
    <div>
      <ul className="space-y-3">
        {events.map((event) => (
          <li key={event.id} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
            <div
              className={cn(
                "flex w-12 shrink-0 flex-col items-center rounded-md border py-1 text-center",
                TAG_BADGE_CLASS[event.type] ?? "border-border bg-surface-canvas text-interactive-500"
              )}
            >
              <span className="text-[10px] font-semibold uppercase">{event.month}</span>
              <span className="text-base font-bold leading-none text-ink">{event.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{event.title}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {event.location}
              </p>
              <p className="text-xs text-ink-subtle">{event.when}</p>
            </div>
          </li>
        ))}
      </ul>

      <a href="/events" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        See all events →
      </a>
    </div>
  );
}
