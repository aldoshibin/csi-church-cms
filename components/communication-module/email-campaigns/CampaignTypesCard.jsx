"use client";

import { CampaignIcon } from "./CampaignIcon";

export function CampaignTypesCard({ types = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Campaign Types</h3>
      <div className="flex flex-col gap-3">
        {types.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <CampaignIcon name={t.icon} className="h-4 w-4" />
            </span>
            <p className="flex-1 truncate text-sm text-ink">{t.label}</p>
            <span className="text-sm font-medium text-ink-muted">{t.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
