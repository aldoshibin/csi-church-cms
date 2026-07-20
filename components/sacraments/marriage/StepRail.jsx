"use client";

import { Check, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export const MARRIAGE_STEPS = [
  { n: 1, title: "Groom Details", sub: "Enter groom information" },
  { n: 2, title: "Bride Details", sub: "Enter bride information" },
  { n: 3, title: "Marriage Details", sub: "Enter marriage information" },
  { n: 4, title: "Witness Details", sub: "Enter witnesses information" },
  { n: 5, title: "Review & Confirm", sub: "Review all details before saving" },
];

export function MarriageStepRail({ step, onJump }) {
  return (
    <div className="w-[220px] shrink-0 space-y-4">
      <div className="rounded-lg border border-border bg-white p-5 shadow-card">
        {MARRIAGE_STEPS.map((s, i) => {
          const done = s.n < step;
          const active = s.n === step;
          return (
            <button key={s.n} type="button" onClick={() => onJump(s.n)} className="block w-full text-left">
              <div className={cn("flex gap-3 rounded-md", active && "bg-interactive-50/60")}>
                <div className="flex flex-col items-center pl-2 pt-2">
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                      done && "bg-interactive-500 text-white",
                      active && !done && "border-2 border-interactive-500 text-interactive-500",
                      !done && !active && "border-2 border-border text-ink-subtle"
                    )}
                  >
                    {done ? <Check className="h-3.5 w-3.5" /> : s.n}
                  </div>
                  {i < MARRIAGE_STEPS.length - 1 && <div className="w-px flex-1 bg-border" style={{ minHeight: 28 }} />}
                </div>
                <div className="py-2 pr-2">
                  <p className={cn("text-sm font-semibold", done || active ? "text-interactive-500" : "text-ink-subtle")}>
                    {s.title}
                  </p>
                  <p className="text-xs text-ink-subtle">{s.sub}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-interactive-100 bg-interactive-50 p-4">
        <p className="mb-1 flex items-center gap-1.5 text-sm font-bold text-interactive-700">
          <Lightbulb className="h-4 w-4" /> Quick Note
        </p>
        <p className="text-xs text-interactive-700/80">
          {step === 5
            ? "Please review the details carefully. You can go back and edit if needed before saving."
            : "Please ensure all information is accurate before proceeding to the next step."}
        </p>
      </div>
    </div>
  );
}
