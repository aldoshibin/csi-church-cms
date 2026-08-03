"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAMILY_STEPS = [
  { n: 1, title: "Family Details" },
  { n: 2, title: "Date & Time" },
  { n: 3, title: "Venue & Organizer" },
  { n: 4, title: "Attendees (Optional)" },
  { n: 5, title: "Review & Confirm" },
  { n: 6, title: "Event Created" },

];

export function FamilyStepRail({ step, onJump }) {
  return (
    <div className="flex items-center rounded-lg border border-border bg-white p-5 shadow-card">
      {FAMILY_STEPS.map((s, i) => {
        const done = s.n < step;
        const active = s.n === step;
        return (
          <div key={s.n} className="flex flex-1 items-center last:flex-none">
            <button type="button" onClick={() => onJump(s.n)} className="flex items-center gap-2.5">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  done && "bg-interactive-500 text-white",
                  active && !done && "bg-interactive-500 text-white",
                  !done && !active && "border-2 border-border text-ink-subtle"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : s.n}
              </div>
              <span className={cn("whitespace-nowrap text-sm font-semibold", done || active ? "text-ink" : "text-ink-subtle")}>
                {s.title}
              </span>
            </button>
            {i < FAMILY_STEPS.length - 1 && (
              <div className={cn("mx-4 h-px flex-1", s.n < step ? "bg-interactive-500" : "bg-border")} />
            )}
          </div>
        );
      })}
    </div>
  );
}
