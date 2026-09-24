"use client";

import { Pencil, Copy, CalendarClock, Trash2 } from "lucide-react";

export function AnnouncementActionsListCard({ onEdit, onDuplicate, onSchedule, onDelete }) {
  const actions = [
    { key: "edit", label: "Edit Announcement", sub: "Update announcement details", icon: Pencil, onClick: onEdit },
    { key: "duplicate", label: "Duplicate Announcement", sub: "Create a copy of this announcement", icon: Copy, onClick: onDuplicate },
    { key: "schedule", label: "Schedule Again", sub: "Schedule this announcement again", icon: CalendarClock, onClick: onSchedule },
    { key: "delete", label: "Delete Announcement", sub: "Permanently delete this announcement", icon: Trash2, onClick: onDelete, danger: true },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Actions</h3>
      <div className="flex flex-col gap-1">
        {actions.map((a) => (
          <button
            key={a.key} type="button" onClick={a.onClick}
            className="flex items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-surface-canvas"
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${a.danger ? "bg-danger-50 text-danger-600" : "bg-interactive-50 text-interactive-600"}`}>
              <a.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={`text-sm font-medium ${a.danger ? "text-danger-600" : "text-ink"}`}>{a.label}</p>
              <p className="truncate text-xs text-ink-subtle">{a.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
