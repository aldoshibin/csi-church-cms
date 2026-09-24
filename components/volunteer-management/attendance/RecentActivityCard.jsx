"use client";

import { CalendarCheck, RefreshCcw, FileBarChart } from "lucide-react";
import { formatDate } from "@/lib/utils";

const TYPE_ICON = { create: CalendarCheck, update: RefreshCcw, event: FileBarChart };

export function RecentActivityCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activity</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {activities.map((a, i) => {
          const Icon = TYPE_ICON[a.type] ?? CalendarCheck;
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{a.title}</p>
                <p className="truncate text-xs text-ink-subtle">{formatDate(a.date)} &bull; {a.time} by {a.user}</p>
              </div>
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
