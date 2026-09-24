"use client";

import { Paperclip, FileText, Download } from "lucide-react";

export function MessageContentCard({ message }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Message Content</h3>

      <div>
        <p className="text-xs text-ink-subtle">Subject</p>
        <p className="mt-1 text-sm font-medium text-ink">{message.subject}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs text-ink-subtle">Message</p>
        <div className="mt-1 flex flex-col gap-2 text-sm text-ink-muted">
          {message.content.split("\n").filter(Boolean).map((line, i) => <p key={i}>{line}</p>)}
        </div>
      </div>

      {message.attachments?.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs text-ink-subtle">
            <Paperclip className="h-3.5 w-3.5" /> Attachments ({message.attachments.length})
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {message.attachments.map((f) => (
              <div key={f.name} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-danger-50 text-danger-600">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{f.name}</p>
                  <p className="text-xs text-ink-subtle">{f.size}</p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-ink-subtle" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
