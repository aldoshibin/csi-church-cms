"use client";

import { Mail } from "lucide-react";

export function TemplateCategoriesCard({ categories = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Template Categories</h3>
      <div className="flex flex-col gap-3">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <Mail className="h-4 w-4" />
            </span>
            <p className="flex-1 truncate text-sm text-ink">{c.label}</p>
            <span className="text-sm font-medium text-ink-muted">{c.count}</span>
          </div>
        ))}
      </div>
      <button type="button" className="mt-3 flex w-full items-center justify-center gap-1 text-xs font-medium text-interactive-600 hover:underline">
        View all categories &rarr;
      </button>
    </div>
  );
}
