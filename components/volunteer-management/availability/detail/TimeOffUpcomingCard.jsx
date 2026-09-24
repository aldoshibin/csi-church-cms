"use client";

import { CalendarOff } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function TimeOffUpcomingCard({ timeOff = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Time Off (Upcoming)</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {timeOff.map((t, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-danger-50 text-danger-600">
                <CalendarOff className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{t.range}</p>
                <p className="truncate text-xs text-ink-subtle">{t.type}</p>
              </div>
            </div>
            <Badge variant={t.status === "Approved" ? "success" : "warning"}>{t.status}</Badge>
          </div>
        ))}
        {!timeOff.length && <p className="text-sm text-ink-subtle">No upcoming time off.</p>}
      </div>
    </div>
  );
}
