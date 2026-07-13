"use client";

import { UserPlus, Pencil, StickyNote, CalendarClock, FileBarChart, Download } from "lucide-react";

export function WidowWidowerQuickActionsPanel({ onAddMember, onUpdateDetails, onAddNote, onExport }) {
  const actions = [
    { label: "Add Widow / Widower", icon: UserPlus, onClick: onAddMember },
    { label: "Update Member Details", icon: Pencil, onClick: onUpdateDetails },
    { label: "Add Support / Assistance Note", icon: StickyNote, onClick: onAddNote },
    { label: "Schedule Pastoral Visit", icon: CalendarClock, disabled: true, hint: "No scheduling endpoint yet" },
    { label: "Generate Registry Report", icon: FileBarChart, disabled: true, hint: "No report-generation endpoint yet" },
    { label: "Export Member List", icon: Download, onClick: onExport },
  ];

  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h2>
      <ul className="space-y-2.5">
        {actions.map((action) => (
          <li key={action.label}>
            <button
              type="button"
              disabled={action.disabled}
              title={action.hint}
              onClick={action.onClick}
              className={`flex items-center gap-2 text-sm font-medium ${action.disabled ? "cursor-not-allowed text-ink-subtle" : "text-interactive-500 hover:underline"}`}
            >
              <action.icon className="h-4 w-4" /> {action.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
