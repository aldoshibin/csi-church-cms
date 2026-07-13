"use client";

import { Upload, UserPlus, RefreshCw, Trash2, FileBarChart } from "lucide-react";

export function PhotoQuickActionsPanel({ onBulkUpload, onAddPhoto, onUpdatePhoto, onRemovePhoto, onExportReport }) {
  const actions = [
    { label: "Bulk Upload Photos", icon: Upload, onClick: onBulkUpload },
    { label: "Add Photo for Member", icon: UserPlus, onClick: onAddPhoto },
    { label: "Update Member Photo", icon: RefreshCw, onClick: onUpdatePhoto },
    { label: "Remove Member Photo", icon: Trash2, onClick: onRemovePhoto },
    { label: "Export Photo Report", icon: FileBarChart, onClick: onExportReport },
  ];

  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-3 text-sm font-semibold text-interactive-500">Quick Actions</h2>
      <ul className="space-y-2.5">
        {actions.map((action) => (
          <li key={action.label}>
            <button type="button" onClick={action.onClick} className="flex items-center gap-2 text-sm font-medium text-interactive-500 hover:underline">
              <action.icon className="h-4 w-4" /> {action.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
