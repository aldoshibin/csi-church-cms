"use client";

import { formatDateTime } from "@/lib/utils";

// Optional per-step `color` ("slate" | "blue" | "amber" | "green") lets a
// step be tinted for its own stage (Planned/Started/In Progress/Completed)
// instead of the plain done/not-done green-or-gray dot. Steps without a
// `color` keep the original done-boolean behavior unchanged.
const DOT_COLOR_CLASSES = {
  slate: "bg-ink-subtle",
  blue: "bg-interactive-500",
  amber: "bg-warning-500",
  green: "bg-success-500",
};

export function ActivityTimelineCard({ timeline = [], title = "Activity Timeline" }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <div className="mt-4 flex flex-col gap-5">
        {timeline.map((step, index) => (
          <div key={step.key} className="relative flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${step.color ? DOT_COLOR_CLASSES[step.color] : step.done ? "bg-success-500" : "bg-border"}`} />
              {index < timeline.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="pb-1">
              <p className="text-sm font-medium text-ink">{step.title}</p>
              {step.date && <p className="text-xs text-ink-subtle">{formatDateTime(step.date)}</p>}
              {step.by && <p className="text-xs text-ink-subtle">By {step.by}</p>}
              {step.at && <p className="text-xs text-ink-subtle">At {step.at}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
