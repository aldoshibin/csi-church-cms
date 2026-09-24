"use client";

import Link from "next/link";
import { Clock } from "lucide-react";

export function UpcomingLessonsCard({ lessons = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Upcoming Lessons</h3>
        <Link href="/sunday-school/lessons" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-4">
        {lessons.map((l, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex w-12 shrink-0 flex-col items-center justify-center rounded-lg border border-border py-1.5 text-center">
              <span className="text-[10px] font-semibold uppercase text-danger-600">{l.month}</span>
              <span className="text-sm font-bold text-ink">{l.day}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{l.title}</p>
              <p className="mt-0.5 truncate text-xs text-ink-subtle">{l.className} · {l.teacher}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle">
                <Clock className="h-3 w-3" /> {l.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
