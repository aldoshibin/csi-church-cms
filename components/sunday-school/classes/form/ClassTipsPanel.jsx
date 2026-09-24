"use client";

import { Lightbulb } from "lucide-react";

const TIPS = [
  "Use clear and simple class names.",
  "Ensure the selected teacher is available at the chosen time.",
  "You can edit class details anytime after creating.",
  "Inactive classes will not appear in dropdowns.",
];

export function ClassTipsPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Lightbulb className="h-4 w-4 text-warning-500" /> Tips
      </h3>
      <ul className="flex flex-col gap-2.5">
        {TIPS.map((tip, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
