"use client";

import * as Icons from "lucide-react";
import { formatDate } from "@/lib/utils";

// The List mockup's "Election Timeline (Next Election)" section is a
// horizontal row of steps joined by a connecting line — a different
// layout from the module's existing sidebar-style, divided-list
// ElectionTimelineCard.jsx, so this is a new, purpose-built component
// rather than an extension of that one. See README_CHANGES.txt.
export function ElectionsListTimelineHorizontal({ timeline, title = "Election Timeline (Next Election)" }) {
  if (!timeline?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-6 flex items-start overflow-x-auto pb-2">
        {timeline.map((step, index) => {
          const Icon = Icons[step.icon] ?? Icons.Calendar;
          const isLast = index === timeline.length - 1;
          return (
            <div key={step.key} className="flex min-w-[140px] flex-1 flex-col items-center text-center">
              <div className="flex w-full items-center">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.iconBg} ${step.iconColor}`}>
                  <Icon className="h-4 w-4" />
                </span>
                {!isLast && <span className="h-0.5 flex-1 bg-border" />}
              </div>
              <p className="mt-2 text-xs font-medium text-ink">{step.label}</p>
              <p className="text-xs text-ink-subtle">{formatDate(step.date)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
