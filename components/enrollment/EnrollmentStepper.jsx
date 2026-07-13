"use client";

import * as React from "react";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { STEPS } from "@/hooks/useNewMemberEnrollmentForm";

export function EnrollmentStepper({ currentStep, completedSteps, onStepClick }) {
  return (
    <div className="flex items-center overflow-x-auto rounded-lg border border-border bg-white p-4 shadow-card">
      {STEPS.map((step, idx) => {
        const isCompleted = completedSteps.includes(step.key);
        const isCurrent = step.key === currentStep;
        const clickable = isCompleted || isCurrent;
        return (
          <React.Fragment key={step.key}>
            <button
              type="button"
              disabled={!clickable}
              onClick={() => clickable && onStepClick(step.key)}
              className="flex shrink-0 items-center gap-2 disabled:cursor-default"
            >
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  isCompleted ? "bg-success-500 text-white" : isCurrent ? "bg-interactive-500 text-white" : "bg-surface-muted text-ink-subtle"
                )}
              >
                {isCompleted ? <Check className="h-3.5 w-3.5" /> : step.key}
              </span>
              <span className={cn("text-sm font-medium leading-tight", idx === STEPS.length - 1 ? "max-w-[70px]" : "whitespace-nowrap", isCurrent ? "text-interactive-500" : isCompleted ? "text-ink" : "text-ink-subtle")}>
                {step.label}
              </span>
            </button>
            {idx < STEPS.length - 1 && <ArrowRight className="mx-4 h-4 w-4 shrink-0 text-ink-subtle" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
