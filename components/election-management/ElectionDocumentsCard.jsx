"use client";

import { FileText, Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ElectionDocumentsCard({ documents }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Documents &amp; Attachments</h3>
        <button type="button" className="text-sm font-medium text-interactive-600 hover:underline">View All →</button>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {documents?.length ? documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between rounded-md border border-border p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#FFE5E5] text-[#DC2626]">
                <FileText className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{doc.name}</p>
                <p className="text-xs text-ink-subtle">{doc.fileType} · {doc.size} · Uploaded on {formatDate(doc.uploadedOn)}</p>
              </div>
            </div>
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Download document">
              <Download className="h-4 w-4" />
            </button>
          </div>
        )) : (
          <p className="text-center text-sm text-ink-subtle">No documents attached to this election.</p>
        )}
      </div>
    </div>
  );
}
