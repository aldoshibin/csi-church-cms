"use client";

import { FileText, Download, Link2, ExternalLink } from "lucide-react";

export function CampaignAttachmentsLinksCard({ campaign }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="rounded-lg border border-border bg-white p-5 shadow-card">
        <h3 className="mb-3 text-sm font-semibold text-ink">Attachments ({campaign.attachments?.length ?? 0})</h3>
        <div className="flex flex-col gap-2">
          {(campaign.attachments ?? []).map((f) => (
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

      <div className="rounded-lg border border-border bg-white p-5 shadow-card">
        <h3 className="mb-3 text-sm font-semibold text-ink">Links ({campaign.links?.length ?? 0})</h3>
        <div className="flex flex-col gap-2">
          {(campaign.links ?? []).map((l) => (
            <div key={l.url} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-interactive-50 text-interactive-600">
                <Link2 className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{l.label}</p>
                <p className="truncate text-xs text-ink-subtle">{l.url}</p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-ink-subtle" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
