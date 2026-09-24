"use client";

import { Download, Printer } from "lucide-react";

const ACTIONS = [
  { label: "Download Attendance List", icon: Download },
  { label: "Download Attendance Report", icon: Download },
  { label: "Print Attendance Sheet", icon: Printer },
];

export function AttendanceDetailQuickActions() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-2.5">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            type="button"
            className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-left text-sm text-ink-muted hover:bg-surface-canvas"
          >
            <action.icon className="h-4 w-4 shrink-0" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
