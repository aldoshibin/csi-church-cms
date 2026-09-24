"use client";

import { Upload, TreePine } from "lucide-react";

export function LessonThumbnailDisplayPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Lesson Thumbnail</h3>
      <div className="flex h-[160px] items-center justify-center rounded-lg bg-gradient-to-b from-success-50 to-interactive-50">
        <TreePine className="h-12 w-12 text-success-500" />
      </div>
      <button type="button" className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
        <Upload className="h-4 w-4" /> Change Thumbnail
      </button>
    </div>
  );
}
