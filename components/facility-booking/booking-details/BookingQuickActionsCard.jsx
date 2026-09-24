"use client";

import { Settings, Download, CalendarClock, Trash2, Copy } from "lucide-react";

const ACTIONS = [
  { key: "receipt", label: "Download Receipt", icon: Download },
  { key: "reschedule", label: "Reschedule Booking", icon: CalendarClock },
  { key: "cancel", label: "Cancel Booking", icon: Trash2, danger: true },
  { key: "duplicate", label: "Duplicate Booking", icon: Copy },
];

export function BookingQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Settings className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {ACTIONS.map((action) => (
          <button
            key={action.key} type="button"
            className={`flex items-center gap-2.5 rounded-md px-2 py-2 text-left text-sm font-medium hover:bg-surface-canvas ${action.danger ? "text-danger-600" : "text-ink"}`}
          >
            <action.icon className="h-4 w-4" />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
