"use client";

import { CheckCircle2 } from "lucide-react";

export function ActivityDescriptionCard({ description, objectives = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Description</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>

      {objectives.length > 0 && (
        <>
          <h3 className="mt-6 text-sm font-semibold text-ink">Objectives</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {objectives.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
