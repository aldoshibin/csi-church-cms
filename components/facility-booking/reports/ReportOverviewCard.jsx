"use client";

import * as Icons from "lucide-react";

export function ReportOverviewCard({ items }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Report Overview</h3>
      <div className="mt-3 flex flex-col gap-1">
        {items.map((item) => {
          const Icon = Icons[item.icon] ?? Icons.Info;
          return (
            <div key={item.label} className="flex items-center gap-3 rounded-md px-2 py-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{item.label}</p>
                <p className="text-xs text-ink-subtle">{item.sub}</p>
              </div>
              <span className="ml-auto shrink-0 text-sm font-semibold text-ink">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
