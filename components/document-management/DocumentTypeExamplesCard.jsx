"use client";

import * as Icons from "lucide-react";

export function DocumentTypeExamplesCard({ types }) {
  if (!types?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Document Type Examples</h3>
      <div className="mt-3 flex flex-col gap-2.5">
        {types.map((t) => {
          const Icon = Icons[t.icon] ?? Icons.File;
          return (
            <div key={t.label} className="flex items-center gap-2.5 text-sm">
              <Icon className={`h-4 w-4 shrink-0 ${t.color}`} />
              <span className="text-ink-muted">{t.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
