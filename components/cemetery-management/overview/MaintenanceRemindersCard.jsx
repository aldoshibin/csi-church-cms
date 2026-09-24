"use client";

import { Bell, ChevronRight } from "lucide-react";

export function MaintenanceRemindersCard({ reminders = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Bell className="h-4 w-4 text-warning-600" /> Maintenance Reminders
        </h3>
        <button type="button" className="text-xs font-medium text-interactive-600 hover:underline">View All</button>
      </div>
      <div className="flex flex-col divide-y divide-border">
        {reminders.map((r) => (
          <button key={r.id} type="button" className="flex w-full items-center gap-3 py-3 text-left first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-ink">{r.title}</p>
              <p className="text-xs text-ink-subtle">{r.description}</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-ink-subtle" />
          </button>
        ))}
        {reminders.length === 0 && <p className="py-3 text-sm text-ink-subtle">No maintenance reminders.</p>}
      </div>
    </div>
  );
}
