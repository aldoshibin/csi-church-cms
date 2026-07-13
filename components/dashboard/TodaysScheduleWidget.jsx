"use client";

import Link from "next/link";

export function TodaysScheduleWidget({ schedule = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">Today's Schedule</h3>
        <Link href="/attendance" className="text-xs font-medium text-interactive-500 hover:underline">
          View All →
        </Link>
      </div>

      <ul className="relative space-y-4 before:absolute before:left-[3px] before:top-1.5 before:bottom-1.5 before:w-px before:bg-border">
        {schedule.map((item) => (
          <li key={item.id} className="relative flex gap-3 pl-5">
            <span className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full bg-interactive-500" />
            <span className="w-20 shrink-0 text-xs font-medium text-ink-subtle">{item.time}</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{item.title}</p>
              <p className="text-xs text-ink-subtle">{item.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
