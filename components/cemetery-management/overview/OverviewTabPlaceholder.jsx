"use client";

import { Construction } from "lucide-react";

export function OverviewTabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-white p-16 text-center">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <Construction className="h-6 w-6" />
      </span>
      <p className="text-sm font-medium text-ink">{label} view coming soon</p>
      <p className="mt-1 text-sm text-ink-subtle">This tab isn&apos;t built yet — check back after a future update.</p>
    </div>
  );
}
