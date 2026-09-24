"use client";

import * as Icons from "lucide-react";
import { formatDate } from "@/lib/utils";

export function ElectionTimelineCard({ timeline }) {
  if (!timeline?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Election Timeline</h3>
      <div className="mt-4 flex flex-col divide-y divide-border">
        {timeline.map((step) => {
          const Icon = Icons[step.icon] ?? Icons.Calendar;
          return (
            <div key={step.key} className="flex items-center gap-3 py-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${step.iconBg} ${step.iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex-1 text-sm font-medium text-ink">{step.label}</span>
              <span className="text-right text-sm text-ink-muted">
                {formatDate(step.date)} <span className="text-ink-subtle">{step.time}</span>
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-ink-subtle">All timings are in your local timezone.</p>
    </div>
  );
}
