"use client";

import { Send, MessageSquareText, FileBarChart, Download } from "lucide-react";
import { FaRegEdit } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa6";


export function MigratedQuickActionsPanel({ onSendConfirmation, onFollowUp, onGenerateReport, onExport }) {
  const actions = [
    { label: "Send Confirmation Request", icon: IoMailOutline, onClick: onSendConfirmation },
    { label: "Follow-up with Receiving Church", icon: FaRegEdit, onClick: onFollowUp },
    { label: "Generate Migration Report", icon: FaFileAlt, disabled: true, hint: "No report-generation endpoint yet" },
    { label: "Export Migrated Members List", icon: FaFileExport, onClick: onExport },
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
