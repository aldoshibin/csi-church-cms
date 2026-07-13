"use client";

import { Mail, StickyNote, CheckCircle2, FileBarChart, Settings2 } from "lucide-react";

export function InactiveQuickActionsPanel({ onSendReminder, onAddNote, onMarkActive, onExportReport }) {
  const actions = [
    { label: "Send Reminder (Email/SMS)", icon: Mail, onClick: onSendReminder },
    { label: "Add Follow-up Note", icon: StickyNote, onClick: onAddNote },
    { label: "Mark as Active", icon: CheckCircle2, onClick: onMarkActive },
    { label: "Generate Inactive Members Report", icon: FileBarChart, onClick: onExportReport },
    { label: "Customize Inactive Criteria", icon: Settings2, disabled: true, hint: "No settings endpoint yet" },
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
