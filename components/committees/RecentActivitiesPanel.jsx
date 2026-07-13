"use client";

import { HeartPulse, Users, BookOpen, Music, Leaf } from "lucide-react";
import { iconBgClass } from "@/lib/mock/committeesMockData";

const ICON_MAP = { medical: HeartPulse, people: Users, book: BookOpen, music: Music, leaf: Leaf };

/** "Recent Activities" panel — icon badge, title, committee name, date. */
export function RecentActivitiesPanel({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Recent Activities</h3>
      <ul className="space-y-3">
        {activities.map((activity) => {
          const Icon = ICON_MAP[activity.icon] ?? Users;
          return (
            <li key={activity.id} className="flex items-start gap-3">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBgClass(activity.icon)}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{activity.title}</p>
                <p className="text-xs text-ink-subtle">{activity.committee}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-subtle">{activity.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
