"use client";

import { Users, UsersRound, PersonStanding, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAMPAIGN_AUDIENCE_TYPE_OPTIONS } from "@/lib/mock/vmEmailCampaignsMockData";

const TYPE_ICON = { all: Users, groups: UsersRound, ageGroups: PersonStanding, custom: ListChecks };

export function CampaignAudienceSelector({ value, onChange, estimatedRecipients }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">2. Audience</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">Choose who should receive this campaign.</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CAMPAIGN_AUDIENCE_TYPE_OPTIONS.map((opt) => {
          const Icon = TYPE_ICON[opt.key] ?? Users;
          const active = value === opt.key;
          return (
            <button
              key={opt.key} type="button" onClick={() => onChange(opt.key)}
              className={cn(
                "flex flex-col items-start gap-1.5 rounded-lg border p-3.5 text-left transition-colors",
                active ? "border-interactive-500 bg-interactive-50/40" : "border-border hover:bg-surface-canvas"
              )}
            >
              <div className="flex w-full items-center justify-between">
                <Icon className={cn("h-4 w-4", active ? "text-interactive-600" : "text-ink-subtle")} />
                <span className={cn("h-3.5 w-3.5 shrink-0 rounded-full border", active ? "border-interactive-500 bg-interactive-500" : "border-border")} />
              </div>
              <p className="text-sm font-medium text-ink">{opt.label}</p>
              <p className="text-xs text-ink-subtle">{opt.helper}</p>
              <p className={cn("text-xs font-medium", active ? "text-interactive-600" : "text-ink-subtle")}>{opt.meta}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-surface-canvas/50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          <Users className="h-4 w-4 text-ink-subtle" /> Estimated Recipients
        </div>
        <span className="text-sm font-semibold text-success-600">{estimatedRecipients.toLocaleString()} members</span>
      </div>
    </div>
  );
}
