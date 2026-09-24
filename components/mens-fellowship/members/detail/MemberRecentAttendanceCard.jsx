"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_STATUS_VARIANT } from "@/lib/mock/mensFellowshipMockData";
import { formatDate } from "@/lib/utils";

export function MemberRecentAttendanceCard({ attendance = [], memberId }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Attendance</h3>
        <Link href="/mens-fellowship/attendance" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {attendance.map((a, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
                <CalendarDays className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="text-xs text-ink-subtle">{formatDate(a.date)}</p>
              </div>
            </div>
            <Badge variant={ATTENDANCE_STATUS_VARIANT[a.status] ?? "default"}>{a.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
