"use client";

import { CalendarRange, Download, Megaphone } from "lucide-react";

const ACTIONS = [
  { label: "View Calendar", icon: CalendarRange, accent: true },
  { label: "Download Study Report", icon: Download },
  { label: "Send Announcement", icon: Megaphone },
];

export function BibleStudiesQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            type="button"
            className={`flex items-center gap-2 rounded-lg border px-3 py-3 text-left transition-colors ${
              action.accent
                ? "border-warning-200 bg-warning-50 text-warning-700 hover:bg-warning-100"
                : "border-border text-ink-muted hover:bg-surface-canvas"
            }`}
          >
            <action.icon className="h-4 w-4 shrink-0" />
            <span className="text-xs font-medium leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
