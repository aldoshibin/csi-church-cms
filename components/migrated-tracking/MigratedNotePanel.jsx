"use client";

import { Info } from "lucide-react";

export function MigratedNotePanel({ text }) {
  return (
    <section className="rounded-lg border border-interactive-100 bg-interactive-50 p-5">
      <div className="flex gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-interactive-500" />
        <div>
          <p className="mb-1 text-sm font-semibold text-ink">Note</p>
          <p className="text-xs leading-relaxed text-ink-muted">{text}</p>
        </div>
      </div>
    </section>
  );
}
