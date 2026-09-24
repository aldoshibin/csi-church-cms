"use client";

import { Info, CheckCircle2 } from "lucide-react";
import { POSITION_GUIDELINES_MOCK } from "@/lib/mock/vmPositionsMockData";

export function PositionGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Position Guidelines</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {POSITION_GUIDELINES_MOCK.map((tip) => (
          <li key={tip} className="flex items-start gap-2 text-sm text-ink-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
