"use client";

import Link from "next/link";
import { Plus, Calendar, HandHeart, BarChart3 } from "lucide-react";

export function WfUpcomingEventsCard({ events = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Events</h3>
        <Link href="/womens-fellowship/events" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="flex w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{e.month}</span>
              <span className="text-sm font-bold text-ink">{e.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{e.title}</p>
              <p className="text-xs text-ink-subtle">{e.time}</p>
              <p className="text-xs text-ink-subtle">{e.venue}</p>
            </div>
            <span className="shrink-0 rounded-sm px-2 py-0.5 text-[10.5px] font-medium" style={{ backgroundColor: `${e.color}1A`, color: e.color }}>
              {e.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ACTIONS = [
  { label: "Add New Group", icon: Plus, href: "/womens-fellowship/fellowship-groups/add", accent: true },
  { label: "Add New Event", icon: Calendar, href: "/womens-fellowship/events" },
  { label: "Add Activity", icon: HandHeart, href: "/womens-fellowship/activities" },
  { label: "View Reports", icon: BarChart3, href: "/womens-fellowship/reports" },
];

export function WfQuickActions() {
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
