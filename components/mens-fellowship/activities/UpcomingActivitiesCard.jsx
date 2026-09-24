"use client";

import Link from "next/link";

export function UpcomingActivitiesCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Activities</h3>
        <Link href="/mens-fellowship/activities" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <span className="text-[10px] font-semibold uppercase leading-none">{a.month}</span>
              <span className="text-sm font-bold leading-tight">{a.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{a.title}</p>
              <p className="truncate text-xs text-ink-subtle">{a.location}</p>
              <p className="text-xs text-ink-subtle">{a.timeRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
