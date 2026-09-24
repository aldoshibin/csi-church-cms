"use client";

import { Lightbulb } from "lucide-react";

const TIPS = [
  "Keep your message short and clear.",
  "Personalize your message for better engagement.",
  "Include a clear call-to-action.",
  "Avoid using too many special characters.",
];

export function CampaignFormTipsCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-interactive-700">Tips</h3>
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
