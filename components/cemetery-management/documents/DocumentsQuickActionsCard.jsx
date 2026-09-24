"use client";

import Link from "next/link";
import { Upload, FolderKanban, Files, Trash2 } from "lucide-react";

const ACTIONS = [
  { key: "upload", label: "Upload Document", description: "Upload new document", icon: Upload, href: "/cemetery-management/documents/upload" },
  { key: "categories", label: "Document Categories", description: "Manage document types", icon: FolderKanban, href: "#" },
  { key: "bulk", label: "Bulk Upload", description: "Upload multiple documents", icon: Files, href: "#" },
  { key: "recycle", label: "Recycle Bin", description: "View deleted documents", icon: Trash2, href: "#" },
];

export function DocumentsQuickActionsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Quick Actions</h3>
      <div className="mt-3 flex flex-col gap-1">
        {ACTIONS.map((action) => (
          <Link
            key={action.key} href={action.href}
            className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-surface-canvas"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
              <action.icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{action.label}</p>
              <p className="text-xs text-ink-subtle">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
