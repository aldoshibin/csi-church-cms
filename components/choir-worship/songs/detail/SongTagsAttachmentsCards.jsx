"use client";

import { Plus, FileText, Download } from "lucide-react";

export function SongTagsCard({ tags = [] }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-ink">Tags</h4>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-sm bg-success-50 px-2.5 py-1 text-xs font-medium text-success-700">{tag}</span>
        ))}
        <button type="button" className="flex items-center gap-1 rounded-sm border border-dashed border-border px-2.5 py-1 text-xs font-medium text-ink-muted hover:bg-surface-canvas">
          <Plus className="h-3 w-3" /> Add Tag
        </button>
      </div>
    </div>
  );
}

export function SongAttachmentsCard({ attachments = [] }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-ink">Attachments</h4>
      <div className="flex flex-col gap-2">
        {attachments.map((file, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-500">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{file.name}</p>
              <p className="text-xs text-ink-subtle">{file.kind?.toUpperCase()} · {file.size}</p>
            </div>
            <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${file.name}`}>
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
