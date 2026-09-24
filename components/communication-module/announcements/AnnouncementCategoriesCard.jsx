"use client";

import { AnnouncementIcon } from "./AnnouncementIcon";

export function AnnouncementCategoriesCard({ categories = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Categories</h3>
        <button type="button" className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.color}`}>
              <AnnouncementIcon name={c.icon} className="h-4 w-4" />
            </span>
            <p className="flex-1 truncate text-sm text-ink">{c.label}</p>
            <span className="text-sm font-medium text-ink-muted">{c.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
