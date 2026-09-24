"use client";

import { formatDate } from "@/lib/utils";

export function TopAttendedMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Top Attended Meetings</h3>
      <div className="flex flex-col gap-3.5">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success-50 text-xs font-semibold text-success-600">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{m.title}</p>
              <p className="text-xs text-ink-subtle">{formatDate(m.date)}</p>
            </div>
            <span className="shrink-0 text-xs font-medium text-ink-muted">{m.present}/{m.expected} ({m.pct.toFixed(1)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
