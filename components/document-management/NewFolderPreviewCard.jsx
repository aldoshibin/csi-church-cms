"use client";

import { Folder } from "lucide-react";

export function NewFolderPreviewCard({ folderName }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Preview</h3>
      <div className="mt-3 flex flex-col items-center gap-2 rounded-lg border border-dashed border-border bg-surface-canvas py-6">
        <Folder className="h-10 w-10 text-[#F59E0B]" />
        <p className="text-sm font-medium text-ink">
          {folderName || "New folder will appear here"}
        </p>
      </div>
    </div>
  );
}
