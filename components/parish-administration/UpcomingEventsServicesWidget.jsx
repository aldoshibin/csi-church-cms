"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const TAG_BADGE_CLASS = {
  event: "border-[#3b48c4] bg-[#eef6ff] text-[#3b48c4]",
  service: "border-[f58220] bg-[#fff2e0] text-[#f58220]",
  meeting: "border-[#12954d] bg-[#e5f8e8] text-[#12954d]",
};


export function UpcomingEventsServicesWidget({ events = [] }) {
  return (
    <div>
      <ul className="space-y-3">
        {events.map((event) => (
          <li key={event.id} className="grid grid-cols-[56px_1fr] gap-3 py-4 md:grid-cols-[64px_1fr_180px] md:items-center md:gap-5 items-center  border-b border-border pb-3 last:border-0 last:pb-0">
            <div
              className={cn(
                "flex w-12 shrink-0 flex-col items-center py-2 text-center",
                TAG_BADGE_CLASS[event.type] ?? "border-border bg-surface-canvas text-interactive-500"
              )}
            >
              <span className="text-[10px] font-semibold uppercase">{event.month}</span>
              <span className="text-base font-bold leading-none ">{event.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-[#1f2937]">{event.title}</p>
             
              <p className="text-xs text-ink-subtle">{event.when}</p>
            </div>
            <div>
               <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-subtle">
                <MapPin className="h-3 w-3" /> {event.location}
              </p>
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
