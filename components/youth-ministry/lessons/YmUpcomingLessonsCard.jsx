"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { LSN_STATUS_VARIANT } from "@/lib/mock/ymLessonsMockData";

export function YmUpcomingLessonsCard({ lessons = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Lessons</h3>
        <Link href="/youth-ministry/lessons" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col divide-y divide-surface-muted">
        {lessons.map((l, i) => (
          <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="flex w-11 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{l.month}</span>
              <span className="text-sm font-bold text-ink">{l.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{l.title}</p>
              <p className="text-xs text-ink-subtle">{l.time}</p>
              <p className="text-xs text-ink-subtle">{l.targetGroup}</p>
            </div>
            <Badge variant={LSN_STATUS_VARIANT[l.status] ?? "default"} className="shrink-0">{l.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
