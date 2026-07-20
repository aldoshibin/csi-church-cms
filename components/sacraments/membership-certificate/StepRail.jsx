"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const MC_STEPS = [
  { n: 1, title: "Member Details", sub: "Select member and certificate type" },
  { n: 2, title: "Certificate Details", sub: "Enter certificate information" },
  { n: 3, title: "Purpose & Address", sub: "Enter purpose and address details" },
  { n: 4, title: "Review & Confirm", sub: "Review and confirm details" },
];

export function MCStepRail({ step, onJump }) {
  return (
    <div className="w-[220px] shrink-0 rounded-lg border border-border bg-white p-5 shadow-card">
      {MC_STEPS.map((s, i) => {
        const done = s.n < step;
        const active = s.n === step;
        return (
          <button key={s.n} type="button" onClick={() => onJump(s.n)} className="block w-full text-left">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
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
                {i < MC_STEPS.length - 1 && <div className="w-px flex-1 bg-border" style={{ minHeight: 28 }} />}
              </div>
              <div className="pb-6">
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
  );
}
