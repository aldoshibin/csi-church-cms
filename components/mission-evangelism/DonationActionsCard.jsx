"use client";

import { Pencil, Undo2, Send, Trash2, ChevronRight } from "lucide-react";

const ACTIONS = [
  { key: "edit", label: "Edit Donation", icon: Pencil },
  { key: "refund", label: "Issue Refund", icon: Undo2 },
  { key: "thankyou", label: "Send Thank You Message", icon: Send },
  { key: "delete", label: "Delete Donation", icon: Trash2, danger: true },
];

export function DonationActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Actions</h3>
      <div className="mt-3 flex flex-col gap-1">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.key} type="button"
              className={`flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm hover:bg-surface-canvas ${action.danger ? "text-danger-600" : "text-ink"}`}
            >
              <span className="flex items-center gap-2.5">
                <Icon className="h-4 w-4" /> {action.label}
              </span>
              <ChevronRight className="h-4 w-4 text-ink-subtle" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
