"use client";

import { AssignmentIcon } from "../assignments/AssignmentIcon";
import { formatDate } from "@/lib/utils";

export function UpcomingServicesCard({ services = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Services</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {services.map((s, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.bg} ${s.color}`}>
                <AssignmentIcon name={s.icon} className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{s.title}</p>
                <p className="truncate text-xs text-ink-subtle">{formatDate(s.date)}</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-success-50 px-2.5 py-1 text-xs font-medium text-success-700">{s.assigned} Assigned</span>
          </div>
        ))}
      </div>
    </div>
  );
}
