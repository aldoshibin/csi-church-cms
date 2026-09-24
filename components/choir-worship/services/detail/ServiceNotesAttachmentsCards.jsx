"use client";

import { FileText, Download } from "lucide-react";

export function ServiceNotesCard({ notes }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-2 text-sm font-semibold text-ink">Notes</h4>
      <p className="text-sm leading-relaxed text-ink-muted">{notes || "No notes added."}</p>
    </div>
  );
}

export function ServiceAttachmentsCard({ attachments = [] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-2 text-sm font-semibold text-ink">Attachments</h4>
      <div className="flex flex-col gap-2">
        {attachments.map((file, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-500">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{file.name}</p>
              <p className="text-xs text-ink-subtle">{file.size}</p>
            </div>
            <button type="button" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${file.name}`}>
              <Download className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
