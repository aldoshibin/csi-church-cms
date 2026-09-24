"use client";

import { FileText, Tag, Users2 } from "lucide-react";

const TIPS = [
  { icon: FileText, text: "Add a clear title and description to help people understand the event." },
  { icon: Tag, text: "Choose the right category to make it easy to find." },
  { icon: Users2, text: "You can manage registrations and volunteers after creating the event." },
];

export function YmQuickTipsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Quick Tips</h3>
      <ul className="flex flex-col gap-3">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2.5 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
              <tip.icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-ink-muted">{tip.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
