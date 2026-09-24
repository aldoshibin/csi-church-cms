"use client";

import { Badge } from "@/components/ui/Badge";
import { PS_STATUS_VARIANT } from "@/lib/mock/practiceScheduleMockData";

export function TeamMembersSidebarCard({ members = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Team Members</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {members.map((m, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{m.name}</p>
              <p className="truncate text-xs text-ink-subtle">{m.role}</p>
            </div>
            <Badge variant={PS_STATUS_VARIANT[m.status] ?? "default"}>{m.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
