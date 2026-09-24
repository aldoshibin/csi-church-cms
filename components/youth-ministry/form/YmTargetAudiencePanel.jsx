"use client";

import { YM_TARGET_AUDIENCE_OPTIONS } from "@/lib/mock/youthMinistryMockData";

export function YmTargetAudiencePanel({ selected = [], onToggle }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Target Audience</h3>
      <label className="mb-1 mt-3 block text-sm font-medium text-ink">Select Audience <span className="text-danger-500">*</span></label>
      <p className="mb-3 text-xs text-ink-subtle">You can select multiple options</p>
      <div className="flex flex-col gap-2.5">
        {YM_TARGET_AUDIENCE_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={selected.includes(option)} onChange={() => onToggle(option)} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
