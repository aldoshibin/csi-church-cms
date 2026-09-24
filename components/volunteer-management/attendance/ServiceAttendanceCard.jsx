"use client";

import { formatDate } from "@/lib/utils";

export function ServiceAttendanceCard({ services = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Service Attendance</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Week</option>
        </select>
      </div>
      <div className="flex flex-col gap-4">
        {services.map((s) => (
          <div key={s.title}>
            <div className="flex items-center justify-between text-sm">
              <p className="truncate font-medium text-ink">{s.title}</p>
              <p className="shrink-0 font-medium text-success-600">{s.present}/{s.total}</p>
            </div>
            <p className="text-xs text-ink-subtle">{formatDate(s.date)}</p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-success-500" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
