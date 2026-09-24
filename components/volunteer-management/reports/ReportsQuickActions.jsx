"use client";

import { CalendarClock, Download, Settings } from "lucide-react";

export function ReportsQuickActions({ onSchedule, onExport, onSettings }) {
  const actions = [
    { key: "schedule", label: "Schedule Report", sub: "Schedule and automate report delivery", icon: CalendarClock, onClick: onSchedule },
    { key: "export", label: "Export Data", sub: "Export data to Excel / PDF", icon: Download, onClick: onExport },
    { key: "settings", label: "Report Settings", sub: "Manage report preferences", icon: Settings, onClick: onSettings },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="flex flex-col gap-1">
        {actions.map((a) => (
          <button
            key={a.key} type="button" onClick={a.onClick}
            className="flex items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-surface-canvas"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <a.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{a.label}</p>
              <p className="truncate text-xs text-ink-subtle">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
