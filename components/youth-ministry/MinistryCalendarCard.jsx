"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKS = [
  [{ d: 26, muted: true }, { d: 27, muted: true }, { d: 28, muted: true }, { d: 29, muted: true }, { d: 30, muted: true }, { d: 1 }, { d: 2 }],
  [{ d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }],
  [{ d: 10 }, { d: 11 }, { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 }, { d: 16 }],
  [{ d: 17 }, { d: 18, today: true }, { d: 19 }, { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 }],
  [{ d: 24, event: true }, { d: 25 }, { d: 26 }, { d: 27 }, { d: 28 }, { d: 29 }, { d: 30 }],
  [{ d: 31 }, { d: 1, muted: true }, { d: 2, muted: true }, { d: 3, muted: true }, { d: 4, muted: true }, { d: 5, muted: true }, { d: 6, muted: true }],
];

export function MinistryCalendarCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Ministry Calendar</h3>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-6 w-6 items-center justify-center rounded text-ink-subtle hover:bg-surface-canvas" aria-label="Previous month">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <span className="text-sm font-medium text-ink">May 2026</span>
          <button type="button" className="flex h-6 w-6 items-center justify-center rounded text-ink-subtle hover:bg-surface-canvas" aria-label="Next month">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <span key={d} className="pb-1 font-medium text-ink-subtle">{d}</span>
        ))}
        {WEEKS.flat().map((cell, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5 py-0.5">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                cell.today ? "bg-success-600 font-semibold text-white" : cell.muted ? "text-ink-subtle/50" : "text-ink"
              }`}
            >
              {cell.d}
            </span>
            {cell.event && <span className="h-1 w-1 rounded-full bg-success-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}
