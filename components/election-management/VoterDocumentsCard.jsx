"use client";

import { FileText, Download } from "lucide-react";

export function VoterDocumentsCard({ documents }) {
  if (!documents?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Documents</h3>
      <div className="mt-4 flex flex-col divide-y divide-border">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center gap-3 py-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#DCFCE7] text-[#16A34A]">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{doc.label}</p>
              <p className="truncate text-xs text-ink-subtle">{doc.fileName}</p>
            </div>
            <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Download document">
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
