"use client";

import { ArrowRight } from "lucide-react";

const TIPS = [
  "You can edit this record later.",
  "Use the search option to check for existing records.",
  "Ensure all mandatory fields are filled before saving.",
];

export function QuickTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <h3 className="text-sm font-semibold text-interactive-700">Quick Tips</h3>
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
