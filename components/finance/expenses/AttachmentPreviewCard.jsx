"use client";

import { ImageIcon, Eye } from "lucide-react";

export function AttachmentPreviewCard({ name, size }) {
  if (!name) return null;
  return (
    <div className="mt-4">
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <ImageIcon className="h-4 w-4" /> Attachment Preview
      </p>
      <div className="flex items-center justify-between rounded-lg bg-surface-canvas p-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success-50 text-success-600">
            <ImageIcon className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">{name}</p>
            <p className="text-xs text-ink-subtle">{size}</p>
          </div>
        </div>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-white">
          <Eye className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
