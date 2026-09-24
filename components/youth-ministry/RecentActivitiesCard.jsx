"use client";

import Link from "next/link";
import { CheckCircle2, UsersRound, CalendarClock, UserPlus } from "lucide-react";

const ICON_MAP = {
  check: { icon: CheckCircle2, bg: "bg-success-50", color: "text-success-600" },
  group: { icon: UsersRound, bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  event: { icon: CalendarClock, bg: "bg-warning-50", color: "text-warning-600" },
  volunteer: { icon: UserPlus, bg: "bg-interactive-50", color: "text-interactive-600" },
};

export function RecentActivitiesCard({ activities = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Activities</h3>
        <Link href="/youth-ministry" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {activities.map((a, i) => {
          const meta = ICON_MAP[a.type] ?? ICON_MAP.check;
          return (
            <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${meta.bg}`}>
                <meta.icon className={`h-4 w-4 ${meta.color}`} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">
                  <span className="font-semibold">{a.bold}</span> {a.rest}
                </p>
                <p className="text-xs text-ink-subtle">{a.date}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-subtle">By {a.by}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
