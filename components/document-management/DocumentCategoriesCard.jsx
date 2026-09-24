"use client";

import * as Icons from "lucide-react";

export function DocumentCategoriesCard({ categories }) {
  if (!categories?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Document Categories</h3>
      <div className="mt-3 flex flex-col gap-2">
        {categories.map((cat) => {
          const Icon = Icons[cat.icon] ?? Icons.File;
          return (
            <div key={cat.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-ink-muted">
                <Icon className={`h-4 w-4 ${cat.color}`} />
                {cat.label}
              </span>
              <span className="font-medium text-ink">{cat.count}</span>
            </div>
          );
        })}
      </div>
      <button type="button" className="mt-3 w-full rounded-md border border-border py-2 text-sm font-medium text-ink hover:bg-surface-canvas">
        View All Categories
      </button>
    </div>
  );
}
