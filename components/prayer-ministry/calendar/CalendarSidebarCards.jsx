"use client";

import { Sun, CalendarDays, Clock, HandHeart, Users } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export function CalendarUpcomingEventsCard({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {events.map((e, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warning-50 text-warning-600">
                <Sun className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{e.title}</p>
                <p className="truncate text-xs text-ink-subtle">{formatDate(e.date)} • {e.time}</p>
              </div>
            </div>
            <Badge variant="info">Upcoming</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CalendarOverviewCard({ overview }) {
  if (!overview) return null;
  const cards = [
    { key: "totalEvents", label: "Total Events", sub: "This Month", icon: CalendarDays, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "prayerHours", label: "Prayer Hours", sub: "This Month", icon: Clock, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "prayerAreas", label: "Prayer Areas", sub: "Covered", icon: HandHeart, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "peopleInvolved", label: "People Involved", sub: "This Month", icon: Users, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Prayer Calendar Overview</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, sub, icon: Icon, iconBg, iconColor }) => (
          <div key={key} className="flex items-start gap-2.5">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg font-bold leading-tight text-ink">{overview[key]}</p>
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="text-xs text-ink-subtle">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
