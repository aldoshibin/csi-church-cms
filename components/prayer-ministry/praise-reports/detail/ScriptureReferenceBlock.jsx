"use client";

import { Quote } from "lucide-react";

export function ScriptureReferenceBlock({ text, citation }) {
  if (!text) return null;
  return (
    <div className="rounded-lg border border-border bg-surface-canvas p-4">
      <div className="flex gap-2.5">
        <Quote className="h-5 w-5 shrink-0 text-interactive-500" />
        <div>
          <p className="text-sm italic text-ink">{text}</p>
          {citation && <p className="mt-1 text-xs font-medium text-ink-subtle">- {citation}</p>}
        </div>
      </div>
    </div>
  );
}
