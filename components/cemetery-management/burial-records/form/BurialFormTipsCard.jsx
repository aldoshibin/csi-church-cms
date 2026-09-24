"use client";

import { Lightbulb } from "lucide-react";

const TIPS = [
  "Ensure the plot is available before creating the record.",
  "Enter accurate information for future reference.",
  "You can edit the record details later if needed.",
];

export function BurialFormTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-interactive-700">Burial Record Tips</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
        {TIPS.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span className="text-interactive-500">&bull;</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
