"use client";

import { Lightbulb } from "lucide-react";

export function NewFolderQuickTipsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-warning-600" />
        <h3 className="text-sm font-semibold text-ink">Quick Tips</h3>
      </div>
      <p className="mt-3 text-sm text-ink-muted">
        Use folders to keep related documents together and make them easy to find.
      </p>
    </div>
  );
}
