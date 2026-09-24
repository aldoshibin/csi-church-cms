"use client";

import { Plus } from "lucide-react";
import { MessageIcon } from "./MessageIcon";

export function MessageFoldersCard({ folders = [], onCreateFolder }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Message Folders</h3>
      <div className="flex flex-col gap-3">
        {folders.map((f) => (
          <div key={f.key} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <MessageIcon name={f.icon} className="h-4 w-4" />
            </span>
            <p className="flex-1 truncate text-sm text-ink">{f.label}</p>
            <span className="text-sm font-medium text-ink-muted">{f.count}</span>
          </div>
        ))}
      </div>
      <button
        type="button" onClick={onCreateFolder}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-border py-2 text-sm font-medium text-interactive-600 hover:bg-surface-canvas"
      >
        <Plus className="h-4 w-4" /> Create New Folder
      </button>
    </div>
  );
}
