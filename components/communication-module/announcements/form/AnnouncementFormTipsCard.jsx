"use client";

import { Lightbulb } from "lucide-react";

const TIPS = [
  "Use a clear and concise title.",
  "Select the right audience to ensure it reaches the right people.",
  "You can edit or duplicate this announcement after publishing.",
];

export function AnnouncementFormTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-50 bg-interactive-50/40 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Tips</h3>
      </div>
      <ul className="flex flex-col gap-1.5 pl-1">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-interactive-500" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
