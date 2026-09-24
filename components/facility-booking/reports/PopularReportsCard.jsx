"use client";

import * as Icons from "lucide-react";
import { Download } from "lucide-react";

export function PopularReportsCard({ reports }) {
  if (!reports?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Popular Reports</h3>
      <div className="mt-3 flex flex-col gap-1">
        {reports.map((report) => {
          const Icon = Icons[report.icon] ?? Icons.FileText;
          return (
            <button
              key={report.title} type="button"
              className="flex items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-surface-canvas"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{report.title}</p>
                <p className="truncate text-xs text-ink-subtle">{report.description}</p>
              </div>
              <Download className="h-4 w-4 shrink-0 text-ink-subtle" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
