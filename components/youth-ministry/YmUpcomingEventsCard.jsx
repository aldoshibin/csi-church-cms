"use client";

import Link from "next/link";
import { Music, BookOpen, Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP = { music: Music, book: BookOpen, star: Star };

export function YmUpcomingEventsCard({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
        <Link href="/youth-ministry/events" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {events.map((e, i) => {
          const Icon = ICON_MAP[e.icon] ?? Star;
          return (
            <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <div className="flex w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
                <span className="text-[10px] font-semibold uppercase text-danger-600">{e.month}</span>
                <span className="text-sm font-bold text-ink">{e.day}</span>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${e.color}1A` }}>
                <Icon className="h-4 w-4" style={{ color: e.color }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{e.title}</p>
                <p className="text-xs text-ink-subtle">{e.time}</p>
              </div>
              <span className="hidden shrink-0 text-sm text-ink-muted sm:block">{e.venue}</span>
              <Badge variant="info" className="shrink-0">{e.status}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
