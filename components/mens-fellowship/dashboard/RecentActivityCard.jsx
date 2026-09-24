"use client";

import { formatDate } from "@/lib/utils";

export function RecentActivityCard({ activity = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Recent Activity</h3>
      <div className="flex flex-col gap-3.5">
        {activity.map((a, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-xs font-semibold text-success-600">
              {a.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-ink">{a.text}</p>
              <p className="text-xs text-ink-subtle">{formatDate(a.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
