"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { BAPTISM_STEPS } from "@/hooks/useAddBaptismForm";

/** Vertical step list with a connecting line — matches the reference
 * exactly: numbered circle (or checkmark once complete), title, subtitle,
 * a thin vertical line between steps. */
export function BaptismWizardStepper({ currentStep, completedSteps, onStepClick }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <ol>
        {BAPTISM_STEPS.map((step, idx) => {
          const isCompleted = completedSteps.includes(step.key);
          const isCurrent = step.key === currentStep;
          const clickable = isCompleted || isCurrent;
          return (
            <li key={step.key} className="relative flex gap-3 pb-7 last:pb-0">
              {idx < BAPTISM_STEPS.length - 1 && (
                <span className="absolute left-[15px] top-8 h-full w-px bg-border" aria-hidden="true" />
              )}
              <button
                type="button"
                disabled={!clickable}
                onClick={() => clickable && onStepClick(step.key)}
                className="flex items-start gap-3 text-left disabled:cursor-default"
              >
                <span
                  className={cn(
                    "z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                    isCompleted ? "bg-success-500 text-white" : isCurrent ? "bg-interactive-500 text-white" : "bg-surface-muted text-ink-subtle"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step.key}
                </span>
                <span className="pt-1">
                  <p className={cn("text-sm font-semibold", isCurrent ? "text-interactive-500" : isCompleted ? "text-ink" : "text-ink-subtle")}>
                    {step.title}
                  </p>
                  <p className="text-xs text-ink-subtle">{step.subtitle}</p>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
