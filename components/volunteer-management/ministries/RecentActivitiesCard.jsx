"use client";

import { Plus, Pencil, CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/utils";

const TYPE_ICON = { create: Plus, update: Pencil, event: CalendarDays };

export function RecentActivitiesCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activities</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {activities.map((a, i) => {
          const Icon = TYPE_ICON[a.type] ?? CalendarDays;
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="truncate text-xs text-ink-subtle">{formatDate(a.date)} &bull; {a.time}</p>
              </div>
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success-500" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
