"use client";

import { YM_VISIBILITY_OPTIONS } from "@/lib/mock/youthMinistryMockData";

export function YmVisibilityPanel({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Visibility</h3>
      <p className="mb-3 text-xs text-ink-subtle">Who can see this activity?</p>
      <div className="flex flex-col gap-3">
        {YM_VISIBILITY_OPTIONS.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-start gap-2.5">
            <input type="radio" name="activity-visibility" className="mt-0.5 h-4 w-4 accent-interactive-500" checked={value === option.value} onChange={() => onChange(option.value)} />
            <span>
              <span className="block text-sm font-medium text-ink">{option.label}</span>
              <span className="block text-xs text-ink-subtle">{option.desc}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
