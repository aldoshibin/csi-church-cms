"use client";

import { FolderOpen } from "lucide-react";

export function CampaignAttachmentsCard({ attachments = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Attachments</h3>
      {attachments.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
          <p className="text-sm text-ink-subtle">No attachments in this campaign.</p>
          <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-surface-canvas text-ink-subtle">
            <FolderOpen className="h-8 w-8" />
          </span>
          <p className="text-xs text-ink-subtle">You can add files while creating a new SMS campaign.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {attachments.map((f) => (
            <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
              <p className="text-sm font-medium text-ink">{f.name}</p>
              <span className="ml-auto text-xs text-ink-subtle">{f.size}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
