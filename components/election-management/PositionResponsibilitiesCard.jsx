"use client";

import { CheckCircle2 } from "lucide-react";

export function PositionResponsibilitiesCard({ responsibilities }) {
  if (!responsibilities?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Permissions &amp; Responsibilities</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {responsibilities.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
