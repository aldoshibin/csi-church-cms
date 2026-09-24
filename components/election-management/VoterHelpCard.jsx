"use client";

import { HelpCircle } from "lucide-react";

export function VoterHelpCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Help Information</h3>
      </div>
      <p className="mt-2 text-sm text-ink-subtle">
        Need help adding a voter? Contact the system administrator for assistance.
      </p>
    </div>
  );
}
