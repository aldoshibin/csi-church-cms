"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const CC_STEPS = [
  { n: 1, title: "Confirmand Details", sub: "Enter confirmand information" },
  { n: 2, title: "Sponsor Details", sub: "Enter sponsor information" },
  { n: 3, title: "Confirmation Details", sub: "Enter confirmation information" },
  { n: 4, title: "Review & Confirm", sub: "Review and confirm information" },
];

export function CCStepRail({ step, onJump }) {
  return (
    <div className="w-[220px] shrink-0 rounded-lg border border-border bg-white p-5 shadow-card">
      {CC_STEPS.map((s, i) => {
        const done = s.n < step;
        const active = s.n === step;
        return (
          <button key={s.n} type="button" onClick={() => onJump(s.n)} className="block w-full text-left">
            <div className={cn("flex gap-3 rounded-md p-2 -m-2", active && "bg-surface-muted")}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                    done && "bg-interactive-500 text-white",
                    active && "bg-[#1e3a6e] text-white",
                    !done && !active && "border-2 border-border text-ink-subtle"
                  )}
                >
                  {s.n}
                </div>
                {i < CC_STEPS.length - 1 && <div className="w-px flex-1 bg-border" style={{ minHeight: 28 }} />}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      done && "text-interactive-500",
                      active && "text-[#1e3a6e]",
                      !done && !active && "text-ink-subtle"
                    )}
                  >
                    {s.title}
                  </p>
                  {done && <Check className="h-4 w-4 shrink-0 text-interactive-500" />}
                </div>
                <p className="text-xs text-ink-subtle">{s.sub}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
