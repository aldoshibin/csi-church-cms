"use client";

import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/vmAttendanceMockData";

export function ThisWeekAttendanceCard({ week = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">This Week&apos;s Attendance</h3>
      <div className="flex flex-col gap-3.5">
        {week.map((d) => (
          <div key={d.day} className="flex items-center justify-between gap-3">
            <p className="truncate text-sm text-ink">{d.day}</p>
            <Badge variant={ATTENDANCE_STATUS_VARIANT[d.status] ?? "default"}>{d.status}</Badge>
          </div>
        ))}
      </div>
      <button type="button" className="mt-4 flex w-full items-center justify-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        View Full Attendance History
      </button>
    </div>
  );
}
