"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { MEETING_STATUS_VARIANT } from "@/lib/mock/meetingsMockData";
import { formatDate } from "@/lib/utils";

export function RecentMeetingsCard({ meetings = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Meetings</h3>
        <Link href="/mens-fellowship/meetings" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {meetings.map((m, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{m.title}</p>
              <p className="text-xs text-ink-subtle">{formatDate(m.date)}</p>
            </div>
            <Badge variant={MEETING_STATUS_VARIANT[m.status] ?? "default"}>{m.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
