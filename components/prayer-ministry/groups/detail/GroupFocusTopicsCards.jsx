"use client";

import { Sparkles, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function GroupFocusCard({ focus = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Group Focus</h4>
      <div className="flex flex-col gap-2.5">
        {focus.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] text-[#7C3AED]">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-ink-muted">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecentPrayerTopicsCard({ topics = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-ink">Recent Prayer Topics</h4>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-2.5">
        {topics.map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 text-sm">
            <Clock className="h-3.5 w-3.5 shrink-0 text-ink-subtle" />
            <span className="min-w-0 flex-1 truncate text-ink-muted">{t.text}</span>
            <span className="shrink-0 text-xs text-ink-subtle">{formatDate(t.date)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
