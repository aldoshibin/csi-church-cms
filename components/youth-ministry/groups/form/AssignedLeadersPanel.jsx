"use client";

import { Users } from "lucide-react";

export function AssignedLeadersPanel({ primaryLeader, coLeader }) {
  const hasLeaders = primaryLeader || coLeader;

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Assigned Leaders</h3>
      {hasLeaders ? (
        <div className="flex flex-col gap-2.5">
          {primaryLeader && (
            <div className="flex items-center gap-2.5 rounded-lg border border-border p-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                {primaryLeader.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{primaryLeader}</p>
                <p className="text-xs text-ink-subtle">Primary Leader</p>
              </div>
            </div>
          )}
          {coLeader && (
            <div className="flex items-center gap-2.5 rounded-lg border border-border p-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-xs font-semibold text-[#7C3AED]">
                {coLeader.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{coLeader}</p>
                <p className="text-xs text-ink-subtle">Co-Leader</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-lg bg-surface-canvas py-8 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-subtle">
            <Users className="h-5 w-5" />
          </span>
          <p className="text-sm font-medium text-ink">No leaders assigned yet.</p>
          <p className="px-4 text-xs text-ink-subtle">Select a leader to get started.</p>
        </div>
      )}
    </div>
  );
}
