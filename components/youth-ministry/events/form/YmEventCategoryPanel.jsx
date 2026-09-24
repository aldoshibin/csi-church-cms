"use client";

import { Select } from "@/components/ui/Input";
import { YME_CATEGORY_OPTIONS } from "@/lib/mock/ymEventsMockData";

export function YmEventCategoryPanel({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Event Categories</h3>
      <p className="mb-3 text-xs text-ink-subtle">Select a category for this event</p>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select category</option>
        {YME_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
      </Select>
    </div>
  );
}
