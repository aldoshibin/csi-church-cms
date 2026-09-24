"use client";

import * as Icons from "lucide-react";
import { formatDate } from "@/lib/utils";

export function VoterTimelineCard({ timeline }) {
  if (!timeline?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Timeline</h3>
      <div className="mt-4 flex flex-col">
        {timeline.map((step, idx) => {
          const Icon = Icons[step.icon] ?? Icons.Clock;
          return (
            <div key={step.key} className="relative flex gap-3 pb-6 last:pb-0">
              {idx < timeline.length - 1 && (
                <span className="absolute left-[11px] top-6 h-[calc(100%-1.25rem)] w-px bg-border" />
              )}
              <span className={`z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${step.iconBg} ${step.iconColor}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{step.label}</p>
                <p className="text-xs text-ink-subtle">{formatDate(step.on, { hour: "numeric", minute: "2-digit" })}</p>
                <p className="text-xs text-ink-subtle">by {step.byName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
