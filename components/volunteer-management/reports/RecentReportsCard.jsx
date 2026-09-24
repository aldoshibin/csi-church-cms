"use client";

import { FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function RecentReportsCard({ reports = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Reports</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {reports.map((r, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{r.title}</p>
              <p className="truncate text-xs text-ink-subtle">{formatDate(r.date)} &bull; {r.time}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-subtle">{r.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
