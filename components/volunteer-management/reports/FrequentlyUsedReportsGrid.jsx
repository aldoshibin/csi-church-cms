"use client";

import { ChevronRight } from "lucide-react";
import { ReportIcon } from "./ReportIcon";

const ICON_STYLE = {
  member: { bg: "bg-success-50", color: "text-success-600" },
  attendance: { bg: "bg-interactive-50", color: "text-interactive-600" },
  volunteer: { bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
  ministry: { bg: "bg-warning-50", color: "text-warning-600" },
  offering: { bg: "bg-warning-50", color: "text-warning-600" },
  assignment: { bg: "bg-interactive-50", color: "text-interactive-600" },
  event: { bg: "bg-danger-50", color: "text-danger-600" },
  custom: { bg: "bg-surface-muted", color: "text-ink-subtle" },
};

export function FrequentlyUsedReportsGrid({ reports = [], onView }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Frequently Used Reports</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {reports.map((r) => {
          const style = ICON_STYLE[r.key] ?? ICON_STYLE.custom;
          return (
            <button
              key={r.key} type="button" onClick={() => onView?.(r)}
              className="flex items-start gap-3 rounded-lg border border-border p-4 text-left transition-colors hover:bg-surface-canvas"
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
                <ReportIcon name={r.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{r.title}</p>
                <p className="mt-0.5 text-xs text-ink-subtle">{r.description}</p>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-ink-subtle" />
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center">
        <button type="button" className="flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
          View All Reports <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
