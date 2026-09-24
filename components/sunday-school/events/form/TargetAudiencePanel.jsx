"use client";

import { EVENT_TARGET_AUDIENCE_OPTIONS } from "@/lib/mock/eventsMockData";

export function TargetAudiencePanel({ selected = [], onToggle, customAudience, onCustomChange }) {
  const customChecked = selected.includes("Custom Audience");

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Target Audience</h3>
      <label className="mb-1 mt-3 block text-sm font-medium text-ink">Select Audience <span className="text-danger-500">*</span></label>
      <p className="mb-3 text-xs text-ink-subtle">You can select multiple options</p>
      <div className="flex flex-col gap-2.5">
        {EVENT_TARGET_AUDIENCE_OPTIONS.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={selected.includes(option)} onChange={() => onToggle(option)} />
            {option}
          </label>
        ))}
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={customChecked} onChange={() => onToggle("Custom Audience")} />
          Custom Audience
        </label>
        {customChecked && (
          <input
            value={customAudience}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder="Enter custom audience"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        )}
      </div>
    </div>
  );
}
