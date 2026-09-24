"use client";

import { Select } from "@/components/ui/Input";
import { ANNOUNCEMENT_CATEGORY_OPTIONS } from "@/lib/mock/vmAnnouncementsMockData";

export function AnnouncementDetailsSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-sm font-medium text-ink">
            Title <span className="text-danger-500">*</span>
          </label>
          <span className="text-xs text-ink-subtle">{form.title.length}/150</span>
        </div>
        <input
          value={form.title} maxLength={150}
          onChange={(e) => setField("title", e.target.value)}
          placeholder="Enter announcement title"
          className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <div className="mt-5">
        <Select label="Category" required value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {ANNOUNCEMENT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>
      </div>
    </div>
  );
}
