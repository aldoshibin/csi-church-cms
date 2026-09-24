"use client";

import { Download } from "lucide-react";
import { REPORT_ICON_COMPONENTS } from "./reportIcons";
import { formatDateTime } from "@/lib/utils";

const ICON_STYLE = {
  users: { bg: "bg-success-50", color: "text-success-600" },
  calendar: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  check: { bg: "bg-warning-50", color: "text-warning-600" },
};

export function RecentReportsCard({ reports = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Recent Reports</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {reports.map((r, i) => {
          const Icon = REPORT_ICON_COMPONENTS[r.icon] ?? REPORT_ICON_COMPONENTS.file;
          const style = ICON_STYLE[r.icon] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
          return (
            <div key={i} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{r.name}</p>
                <p className="text-xs text-ink-subtle">{formatDateTime(r.generatedOn)}</p>
              </div>
              <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${r.name}`}>
                <Download className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
