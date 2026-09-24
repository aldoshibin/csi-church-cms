"use client";

import Link from "next/link";
import { formatDate } from "@/lib/utils";

export function RecentJoinedMembersCard({ members = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Joined Members</h3>
        <Link href="/mens-fellowship/members" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3.5">
        {members.map((m, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {m.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{m.name}</p>
              <p className="truncate text-xs text-ink-subtle">{m.group}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-subtle">{formatDate(m.date)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
