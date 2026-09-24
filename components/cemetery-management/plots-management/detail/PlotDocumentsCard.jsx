"use client";

import { FileText, Download } from "lucide-react";

export function PlotDocumentsCard({ documents = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <FileText className="h-4 w-4 text-interactive-600" /> Documents
      </h3>
      <div className="flex flex-col gap-2.5">
        {documents.map((d) => (
          <div key={d.id} className="flex items-center gap-2.5 rounded-md border border-border px-3 py-2 text-sm">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-600 text-[10px] font-semibold">
              {d.fileType}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-ink">{d.name}</p>
              <p className="text-xs text-ink-subtle">{d.fileType} &middot; {d.sizeLabel}</p>
            </div>
            <button type="button" className="shrink-0 text-ink-subtle hover:text-interactive-600" aria-label={`Download ${d.name}`}>
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
        {documents.length === 0 && <p className="text-sm text-ink-subtle">No documents attached.</p>}
      </div>
    </div>
  );
}
