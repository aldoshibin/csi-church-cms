"use client";

import { Pencil, Copy, Trash2, ChevronRight } from "lucide-react";

export function BulletinActionsCard({ onEdit, onDuplicate, onDelete }) {
  const actions = [
    { label: "Edit Request", icon: Pencil, onClick: onEdit, danger: false },
    { label: "Duplicate Request", icon: Copy, onClick: onDuplicate, danger: false },
    { label: "Delete Request", icon: Trash2, onClick: onDelete, danger: true },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Actions</h3>
      <div className="flex flex-col divide-y divide-border">
        {actions.map((a) => (
          <button
            key={a.label}
            type="button"
            onClick={a.onClick}
            className={`flex items-center justify-between gap-2 py-2.5 text-left text-sm transition-colors first:pt-0 last:pb-0 ${
              a.danger ? "text-danger-600 hover:text-danger-700" : "text-ink-muted hover:text-ink"
            }`}
          >
            <span className="flex items-center gap-2"><a.icon className="h-4 w-4" /> {a.label}</span>
            <ChevronRight className="h-4 w-4 text-ink-subtle" />
          </button>
        ))}
      </div>
    </div>
  );
}
