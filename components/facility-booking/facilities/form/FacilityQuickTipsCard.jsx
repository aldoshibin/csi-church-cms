"use client";

import { Lightbulb, ArrowRight } from "lucide-react";

const TIPS = [
  "Add accurate details to help users understand the facility.",
  "Upload a high-quality image for better visibility.",
  "Amenities can be managed anytime after creation.",
];

export function FacilityQuickTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-interactive-700">Quick Tips</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
        {TIPS.map((tip) => (
          <li key={tip} className="flex gap-2">
            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-interactive-500" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
