"use client";

import { FileText, Download } from "lucide-react";

const KIND_STYLE = {
  pdf: { bg: "bg-danger-50", color: "text-danger-500" },
  docx: { bg: "bg-interactive-50", color: "text-interactive-600" },
};

export function MeetingAttachmentsCard({ attachments = [] }) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-ink">Attachments ({attachments.length})</h3>
      <div className="flex flex-col gap-2.5">
        {attachments.map((file, i) => {
          const style = KIND_STYLE[file.kind] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
          return (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${style.bg} ${style.color}`}>
                <FileText className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{file.name}</p>
                <p className="text-xs text-ink-subtle">{file.size}</p>
              </div>
              <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${file.name}`}>
                <Download className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
