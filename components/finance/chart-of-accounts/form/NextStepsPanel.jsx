"use client";

import { CircleCheck, Flag } from "lucide-react";

export function NextStepsPanel({ title = "Next Steps", intro, items = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold text-accent-700">
        <Flag className="h-4 w-4" /> {title}
      </h3>
      {intro && <p className="mb-2 text-xs text-ink-subtle">{intro}</p>}
      <ul className="mt-2 flex flex-col gap-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-ink-muted">
            <CircleCheck className="h-4 w-4 shrink-0 text-success-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
