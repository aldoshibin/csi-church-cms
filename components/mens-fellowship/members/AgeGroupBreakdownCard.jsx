"use client";

import Link from "next/link";

export function AgeGroupBreakdownCard({ groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Members by Age Group</h3>
        <Link href="/mens-fellowship/reports" className="text-xs font-medium text-interactive-500 hover:underline">View Report</Link>
      </div>
      <div className="flex flex-col gap-3">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-ink-muted">{g.label}</span>
              <span className="font-medium text-ink">{g.count} ({g.pct}%)</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-interactive-500" style={{ width: `${g.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
