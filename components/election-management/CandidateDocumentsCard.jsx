"use client";

import { FileText, Image as ImageIcon, Download } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function CandidateDocumentsCard({ documents }) {
  if (!documents?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Documents</h3>
      <div className="mt-4 flex flex-col divide-y divide-border">
        {documents.map((doc) => {
          const isImage = doc.fileType === "IMG";
          return (
            <div key={doc.id} className="flex items-center gap-3 py-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${isImage ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#FFE5E5] text-[#DC2626]"}`}>
                {isImage ? <ImageIcon className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{doc.name}</p>
                <p className="text-xs text-ink-subtle">Uploaded on {formatDate(doc.uploadedOn, { hour: "numeric", minute: "2-digit" })}</p>
              </div>
              <button type="button" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label="Download document">
                <Download className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
