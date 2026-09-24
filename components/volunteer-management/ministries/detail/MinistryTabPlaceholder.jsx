"use client";

import { Construction } from "lucide-react";

export function MinistryTabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <Construction className="h-6 w-6" />
      </span>
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="text-sm text-ink-subtle">This section is coming soon.</p>
    </div>
  );
}
