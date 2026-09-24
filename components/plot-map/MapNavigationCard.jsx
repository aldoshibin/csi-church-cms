"use client";

import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Circle } from "lucide-react";

export function MapNavigationCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Map Navigation</h3>
      <div className="grid w-fit grid-cols-3 gap-1.5">
        <span />
        <button type="button" aria-label="Pan up" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas">
          <ChevronUp className="h-4 w-4" />
        </button>
        <span />
        <button type="button" aria-label="Pan left" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Center view" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
          <Circle className="h-2.5 w-2.5 fill-current" />
        </button>
        <button type="button" aria-label="Pan right" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas">
          <ChevronRight className="h-4 w-4" />
        </button>
        <span />
        <button type="button" aria-label="Pan down" className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas">
          <ChevronDown className="h-4 w-4" />
        </button>
        <span />
      </div>
    </div>
  );
}
