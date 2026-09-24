"use client";

import { CheckCircle2, CalendarClock } from "lucide-react";
import { QUICK_PRESETS } from "@/lib/mock/availabilityMockData";

const GUIDELINES = [
  "Provide accurate availability for better scheduling.",
  "Make sure to select all the time slots you are available.",
  "You can update or remove your availability anytime.",
  "Your availability helps us assign you to suitable services.",
];

export function AvailabilityGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Guidelines</h3>
      <div className="flex flex-col gap-2.5">
        {GUIDELINES.map((g, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            <p className="text-xs leading-relaxed text-ink-muted">{g}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function QuickPresetsCard({ onApply }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Presets</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {QUICK_PRESETS.map((preset) => (
          <button
            key={preset} type="button" onClick={() => onApply?.(preset)}
            className="rounded-md border border-border px-3 py-2 text-center text-xs font-medium text-ink-muted transition-colors hover:bg-surface-canvas hover:text-ink"
          >
            {preset}
          </button>
        ))}
      </div>
    </div>
  );
}

export function CurrentAvailabilityCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Current Availability</h3>
      <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success-50 text-success-600">
          <CalendarClock className="h-6 w-6" />
        </span>
        <p className="text-sm font-medium text-ink">No availability set yet.</p>
        <p className="text-xs text-ink-subtle">Add your availability to start receiving assignments.</p>
      </div>
    </div>
  );
}
