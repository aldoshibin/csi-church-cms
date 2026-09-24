"use client";

import { Plus, CalendarClock, FileCog } from "lucide-react";

const ACTIONS = [
  { label: "Generate Custom Report", icon: Plus, accent: true },
  { label: "Schedule Report", icon: CalendarClock },
  { label: "Manage Report Templates", icon: FileCog },
];

export function FellowshipReportsQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-2.5">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
              action.accent
                ? "border-success-200 bg-success-50 text-success-700 hover:bg-success-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
