"use client";

import { Plus, Minus, Maximize, RotateCcw } from "lucide-react";

const CONTROLS = [
  { icon: Plus, label: "Zoom in" },
  { icon: Minus, label: "Zoom out" },
  { icon: Maximize, label: "Fit to screen" },
  { icon: RotateCcw, label: "Reset zoom" },
];

export function ZoomControlsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Zoom Controls</h3>
      <div className="flex items-center gap-2">
        {CONTROLS.map((c) => (
          <button
            key={c.label} type="button" aria-label={c.label}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-canvas"
          >
            <c.icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}
