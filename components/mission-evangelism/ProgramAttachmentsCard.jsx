"use client";

import Link from "next/link";
import { Download, FileText, FileSpreadsheet, FileArchive, Paperclip, ArrowRight } from "lucide-react";

const FILE_ICON_MAP = {
  pdf: { icon: FileText, bg: "bg-[#FFE5E5]", color: "text-[#DC2626]" },
  xlsx: { icon: FileSpreadsheet, bg: "bg-[#DCFCE7]", color: "text-[#16A34A]" },
  zip: { icon: FileArchive, bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
};

// Optional `viewAllLabel`/`viewAllHref` add a trailing link (used by the
// Mission Trips detail page's "View All Documents"); omitted by default so
// the Program Details usage of this card is unchanged.
export function ProgramAttachmentsCard({ attachments = [], emptyText = "No files attached to this program yet.", viewAllLabel, viewAllHref }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Paperclip className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Attachments</h3>
      </div>
      {attachments.length === 0 ? (
        <p className="mt-3 text-sm text-ink-subtle">{emptyText}</p>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {attachments.map((file) => {
            const meta = FILE_ICON_MAP[file.type] ?? { icon: FileText, bg: "bg-surface-canvas", color: "text-ink-subtle" };
            const Icon = meta.icon;
            return (
              <div key={file.name} className="flex items-center gap-3 rounded-md border border-border px-3 py-2">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${meta.bg} ${meta.color}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">{file.name}</p>
                  <p className="text-xs text-ink-subtle">{file.size}</p>
                </div>
                <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md text-ink-subtle hover:bg-surface-canvas" aria-label={`Download ${file.name}`}>
                  <Download className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      )}
      {viewAllLabel && (
        <Link href={viewAllHref ?? "#"} className="mt-4 flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
          {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
