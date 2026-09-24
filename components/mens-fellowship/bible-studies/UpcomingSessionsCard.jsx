"use client";

import Link from "next/link";

export function UpcomingSessionsCard({ sessions = [], viewAllHref = "/mens-fellowship/bible-studies" }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Sessions</h3>
        <Link href={viewAllHref} className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {sessions.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
              <span className="text-[10px] font-semibold uppercase leading-none">{s.month}</span>
              <span className="text-sm font-bold leading-tight">{s.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{s.title}</p>
              <p className="truncate text-xs text-ink-subtle">{s.meta}</p>
              <p className="truncate text-xs text-ink-subtle">{s.location}</p>
              <p className="text-xs text-ink-subtle">{s.timeRange}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
