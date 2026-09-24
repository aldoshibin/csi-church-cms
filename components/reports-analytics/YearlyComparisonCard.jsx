"use client";

import * as Icons from "lucide-react";

export function YearlyComparisonCard({ rows = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Yearly Comparison</h3>
        <div className="flex items-center gap-3 text-xs text-ink-subtle">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-success-500" /> This Year</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-border" /> Last Year</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {rows.map((row) => {
          const Icon = Icons[row.icon] ?? Icons.BarChart3;
          return (
            <div key={row.key} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${row.iconBg} ${row.iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-ink">{row.label}</p>
                <p className="text-sm font-semibold text-ink">{row.thisYear}</p>
                <p className="text-xs text-ink-subtle">{row.lastYear}</p>
              </div>
              <span className="text-xs font-medium text-success-600">{row.trend}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
