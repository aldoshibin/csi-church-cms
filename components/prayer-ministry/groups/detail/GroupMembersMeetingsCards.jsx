"use client";

import { Badge } from "@/components/ui/Badge";

export function GroupMembersCard({ count, extra }) {
  const shown = Math.max(count - extra, 0);
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">Group Members ({count})</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex items-center -space-x-2">
        {Array.from({ length: Math.min(shown, 6) }).map((_, i) => (
          <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-interactive-50 text-xs font-semibold text-interactive-600">
            {String.fromCharCode(65 + i)}
          </span>
        ))}
        {extra > 0 && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-surface-muted text-xs font-semibold text-ink-subtle">
            +{extra}
          </span>
        )}
      </div>
    </div>
  );
}

export function GroupDetailUpcomingMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">Upcoming Meetings</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View Calendar</button>
      </div>
      <div className="flex flex-col gap-3">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
                <span className="text-[9px] font-semibold uppercase leading-none">{m.month}</span>
                <span className="text-sm font-bold leading-tight">{m.day}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">{m.weekday}, {m.time}</p>
              </div>
            </div>
            <Badge variant="info">Upcoming</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
