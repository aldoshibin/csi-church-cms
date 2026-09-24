"use client";

import { Users, UsersRound, PersonStanding, BadgeCheck, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import { AUDIENCE_TYPE_OPTIONS } from "@/lib/mock/vmAnnouncementsMockData";

const TYPE_ICON = { all: Users, groups: UsersRound, ageGroups: PersonStanding, role: BadgeCheck, custom: ListChecks };

export function AudienceSelector({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <label className="text-sm font-medium text-ink">
        Audience <span className="text-danger-500">*</span>
      </label>
      <p className="mt-0.5 text-xs text-ink-subtle">Select who should see this announcement.</p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {AUDIENCE_TYPE_OPTIONS.map((opt) => {
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
            </button>
          );
        })}
      </div>
    </div>
  );
}
