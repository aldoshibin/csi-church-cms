"use client";

import { FileText } from "lucide-react";

export function FacilityNoteCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Note</h3>
      </div>
      <p className="mt-2 text-sm text-ink-subtle">Fields marked with * are mandatory.</p>
    </div>
  );
}
