"use client";

import Link from "next/link";
import { Plus, FolderTree, Calendar, BarChart3 } from "lucide-react";

export function YmEventsUpcomingCard({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
        <Link href="/youth-ministry/events" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{e.month}</span>
              <span className="text-sm font-bold text-ink">{e.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{e.title}</p>
              <p className="text-xs text-ink-subtle">{e.time}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-muted">{e.venue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ACTIONS = [
  { label: "Add New Event", icon: Plus, href: "/youth-ministry/events/add", accent: true },
  { label: "Event Categories", icon: FolderTree, href: "/youth-ministry/events" },
  { label: "Event Calendar", icon: Calendar, href: "/youth-ministry/events" },
  { label: "Event Report", icon: BarChart3, href: "/youth-ministry/reports" },
];

export function YmEventsQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center gap-2 rounded-lg border px-3 py-3 text-left transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            <span className="text-xs font-medium leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
