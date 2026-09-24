"use client";

import { FileText } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function MinistryDocumentsCard({ documents = [], onViewAll }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Documents</h3>
        <button type="button" onClick={onViewAll} className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3.5">
        {documents.map((doc, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-danger-50 text-danger-600">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{doc.name}</p>
              <p className="truncate text-xs text-ink-subtle">{doc.type} &bull; {doc.size}</p>
            </div>
            <span className="shrink-0 text-xs text-ink-subtle">{formatDate(doc.date)}</span>
          </div>
        ))}
        {!documents.length && <p className="text-sm text-ink-subtle">No documents yet.</p>}
      </div>
    </div>
  );
}
