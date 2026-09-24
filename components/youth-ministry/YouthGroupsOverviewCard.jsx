"use client";

import Link from "next/link";
import { UsersRound } from "lucide-react";

export function YouthGroupsOverviewCard({ totalMembers, groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Youth Groups Overview</h3>
        <Link href="/youth-ministry/youth-groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3">
        {groups.map((g) => (
          <div key={g.name} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${g.color}1A` }}>
              <UsersRound className="h-4 w-4" style={{ color: g.color }} />
            </span>
            <span className="min-w-0 flex-1 truncate text-sm text-ink">{g.name}</span>
            <span className="shrink-0 text-xs text-ink-subtle">Members</span>
            <span className="w-6 shrink-0 text-right text-sm font-semibold text-ink">{g.members}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-surface-muted pt-3 text-sm font-semibold">
        <span className="text-ink">Total Members</span>
        <span className="text-ink">{totalMembers}</span>
      </div>
    </div>
  );
}
