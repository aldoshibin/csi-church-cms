"use client";

import { Lightbulb } from "lucide-react";

export function CampaignTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-interactive-700">Tips</h3>
      </div>
      <p className="mt-3 text-sm text-ink-muted">
        Personalize your emails and send at the right time to increase engagement and open rates.
      </p>
    </div>
  );
}
