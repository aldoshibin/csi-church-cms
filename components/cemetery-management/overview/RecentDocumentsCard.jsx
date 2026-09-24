"use client";

import { FileText, Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

const FILE_STYLE = {
  PDF: { bg: "bg-danger-50", color: "text-danger-600" },
  DOCX: { bg: "bg-interactive-50", color: "text-interactive-600" },
};

export function RecentDocumentsCard({ documents = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <FileText className="h-4 w-4 text-interactive-600" /> Recent Documents
        </h3>
        <button type="button" className="text-xs font-medium text-interactive-600 hover:underline">View All</button>
      </div>
      <div className="flex flex-col divide-y divide-border">
        {documents.map((d) => {
          const style = FILE_STYLE[d.fileType] ?? FILE_STYLE.PDF;
          return (
            <div key={d.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold ${style.bg} ${style.color}`}>
                {d.fileType}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{d.name}</p>
                <p className="text-xs text-ink-subtle">{d.fileType} &middot; Updated {formatDate(d.updatedOn)}</p>
              </div>
              <button type="button" className="shrink-0 text-ink-subtle hover:text-interactive-600" aria-label={`Download ${d.name}`}>
                <Download className="h-4 w-4" />
              </button>
            </div>
          );
        })}
        {documents.length === 0 && <p className="py-3 text-sm text-ink-subtle">No documents uploaded yet.</p>}
      </div>
    </div>
  );
}
