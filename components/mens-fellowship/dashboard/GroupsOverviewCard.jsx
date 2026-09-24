"use client";

import Link from "next/link";

export function GroupsOverviewCard({ groups = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Fellowship Groups</h3>
        <Link href="/mens-fellowship/groups" className="text-xs font-medium text-interactive-500 hover:underline">View All</Link>
      </div>
      <div className="flex flex-col gap-3">
        {groups.map((g) => (
          <div key={g.id} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{g.name}</p>
              <p className="truncate text-xs text-ink-subtle">Led by {g.leader}</p>
            </div>
            <span className="shrink-0 text-xs font-medium text-ink-muted">{g.members} members</span>
          </div>
        ))}
      </div>
    </div>
  );
}
