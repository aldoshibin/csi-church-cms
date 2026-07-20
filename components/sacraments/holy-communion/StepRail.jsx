"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const HC_STEPS = [
  { n: 1, title: "Communicant Information", sub: "Enter communicant details" },
  { n: 2, title: "Parent / Guardian Details", sub: "Enter parent or guardian details" },
  { n: 3, title: "Record Details", sub: "Enter communion & class details" },
  { n: 4, title: "Confirmation", sub: "Review and confirm details" },
];

export function HCStepRail({ step, onJump }) {
  return (
    <div className="w-[220px] shrink-0 rounded-lg border border-border bg-white p-5 shadow-card">
      {HC_STEPS.map((s, i) => {
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
                {i < HC_STEPS.length - 1 && <div className="w-px flex-1 bg-border" style={{ minHeight: 28 }} />}
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
  );
}
