"use client";

import { Megaphone } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function AnnouncementsPanelCard({ announcements = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Announcements</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {announcements.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
              <Megaphone className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink">{a.title}</p>
              <p className="text-xs text-ink-subtle">{a.description}</p>
              <p className="mt-1 text-[11px] text-ink-subtle">{formatDate(a.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
