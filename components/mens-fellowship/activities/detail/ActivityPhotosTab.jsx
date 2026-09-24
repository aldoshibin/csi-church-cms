"use client";

import { Image as ImageIcon } from "lucide-react";

export function ActivityPhotosTab() {
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Photos</h3>
      <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
          <ImageIcon className="h-6 w-6" />
        </span>
        <p className="text-sm font-medium text-ink">No photos uploaded yet.</p>
        <p className="text-sm text-ink-subtle">Photos from this activity will appear here.</p>
      </div>
    </div>
  );
}
