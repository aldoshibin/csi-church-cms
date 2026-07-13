"use client";

import { UserPlus, HeartPulse, StickyNote, FileBarChart, Download } from "lucide-react";

export function SeniorQuickActionsPanel({ onAddMember, onUpdateHealth, onAddNote, onExport }) {
  const actions = [
    { label: "Add Senior Member", icon: UserPlus, onClick: onAddMember },
    { label: "Update Health Information", icon: HeartPulse, onClick: onUpdateHealth },
    { label: "Add Assistance / Support Note", icon: StickyNote, onClick: onAddNote },
    { label: "Generate Senior Members Report", icon: FileBarChart, disabled: true, hint: "No report-generation endpoint yet" },
    { label: "Export Senior Members List", icon: Download, onClick: onExport },
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
