"use client";

import { Info } from "lucide-react";

export function MemberTipsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
        <Info className="h-4 w-4 text-interactive-500" /> Quick Tips
      </h3>
      <p className="text-sm leading-relaxed text-ink-muted">
        Make sure the email and phone number are correct to receive notifications and updates.
      </p>
    </div>
  );
}
