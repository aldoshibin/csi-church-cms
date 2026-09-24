"use client";

import { Info, Target } from "lucide-react";

const TIPS = [
  { icon: Info, text: "A youth group helps organize members, track activities, and build a strong community." },
  { icon: Target, text: "You can add activities, meetings, and volunteers after creating the group." },
];

export function GroupQuickTipsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Tips</h3>
      <ul className="flex flex-col gap-3">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2.5 text-sm">
            <tip.icon className="mt-0.5 h-4 w-4 shrink-0 text-interactive-600" />
            <span className="text-ink-muted">{tip.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
