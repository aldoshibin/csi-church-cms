"use client";

import Link from "next/link";
import { Users2, Plus } from "lucide-react";

export function PrayerGroupsCard({ groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Prayer Groups</h3>
        <Link href="/prayer-ministry/prayer-groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3">
        {groups.map((g, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${g.colorBg} ${g.colorFg}`}>
              <Users2 className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{g.name}</p>
              <p className="truncate text-xs text-ink-subtle">{g.schedule}</p>
            </div>
            <span className="shrink-0 text-xs font-medium text-ink-muted">{g.members} Members</span>
          </div>
        ))}
      </div>
      <Link href="/prayer-ministry/prayer-groups" className="mt-4 flex items-center justify-center gap-2 rounded-md border border-dashed border-border py-2.5 text-sm font-medium text-interactive-600 hover:bg-surface-canvas">
        <Plus className="h-4 w-4" /> Create New Group
      </Link>
    </div>
  );
}
