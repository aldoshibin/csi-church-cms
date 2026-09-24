"use client";

import { Bell } from "lucide-react";

export function TopPraiseContributorsCard({ contributors = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Top Praise Contributors</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {contributors.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">{c.name}</span>
            <span className="shrink-0 text-xs text-ink-subtle">{c.reports} Reports</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PraiseRemindersCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Praise Reminders</h3>
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
          <Bell className="h-5 w-5" />
        </span>
        <p className="text-sm leading-relaxed text-ink-muted">Encourage your members to share their testimonies and praise reports.</p>
      </div>
      <button type="button" className="mt-3 flex w-full items-center justify-center rounded-md border border-border py-2.5 text-sm font-medium text-ink hover:bg-surface-canvas">
        Share Bulletin Reminder
      </button>
    </div>
  );
}
