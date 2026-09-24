"use client";

import { RotateCcw, Mail, Copy, Trash2 } from "lucide-react";

export function RelatedActionsCard({ onResend, onFollowUp, onDuplicate, onDelete }) {
  const actions = [
    { key: "resend", label: "Resend Message", sub: "Resend this message to audience", icon: RotateCcw, onClick: onResend },
    { key: "followup", label: "Create Follow-up Message", sub: "Send a follow-up message", icon: Mail, onClick: onFollowUp },
    { key: "duplicate", label: "Duplicate Message", sub: "Create a copy of this message", icon: Copy, onClick: onDuplicate },
    { key: "delete", label: "Delete Message", sub: "Permanently delete this message", icon: Trash2, onClick: onDelete, danger: true },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Related Actions</h3>
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
