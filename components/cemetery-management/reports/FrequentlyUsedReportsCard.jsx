"use client";

import { ChevronRight, Users2, IdCard, Map, MapPinned, FileText } from "lucide-react";

const ICONS = { Users2, IdCard, Map, MapPinned, FileText };

export function FrequentlyUsedReportsCard({ reports }) {
  if (!reports?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Frequently Used Reports</h3>
      <div className="mt-3 flex flex-col">
        {reports.map((report) => {
          const Icon = ICONS[report.icon] ?? FileText;
          return (
            <button
              key={report.key} type="button"
              className="flex items-center gap-3 rounded-md px-2 py-2.5 text-left hover:bg-surface-canvas"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex-1 text-sm font-medium text-ink">{report.title}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
