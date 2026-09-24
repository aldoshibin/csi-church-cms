"use client";

import { FileText } from "lucide-react";

export function ReportTabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-white py-16 text-center shadow-card">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <FileText className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium text-ink">{label} Report</p>
      <p className="max-w-sm text-xs text-ink-subtle">This section isn't in the current design reference — let me know if you'd like it built out.</p>
    </div>
  );
}
