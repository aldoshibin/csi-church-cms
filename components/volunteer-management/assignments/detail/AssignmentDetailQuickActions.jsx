"use client";

import { UserPlus, Pencil, Eye, Printer } from "lucide-react";

const ACTIONS = [
  { key: "assign", label: "Assign Volunteers", icon: UserPlus },
  { key: "edit", label: "Edit Assignment", icon: Pencil },
  { key: "view", label: "View Volunteers", icon: Eye },
  { key: "print", label: "Print Assignment", icon: Printer },
];

export function AssignmentDetailQuickActions({ onAssignVolunteers, onEdit, onViewVolunteers, onPrint }) {
  const handlers = { assign: onAssignVolunteers, edit: onEdit, view: onViewVolunteers, print: onPrint };
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => (
          <button
            key={action.key}
            type="button"
            onClick={handlers[action.key]}
            className="flex flex-col items-center gap-2 rounded-lg border border-border px-3 py-3 text-center transition-colors hover:bg-surface-canvas"
          >
            <action.icon className="h-5 w-5 text-interactive-600" />
            <span className="text-xs font-medium leading-tight text-ink-muted">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
