"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TRANSFER_OUT_STEPS } from "@/hooks/useMemberTransferOutForm";

export function TransferOutStepper({ currentStep, completedSteps, onStepClick }) {
  return (
    <div className="flex items-center overflow-x-auto rounded-lg border border-border bg-white p-4 shadow-card">
      {TRANSFER_OUT_STEPS.map((step, idx) => {
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
              <span className={cn("whitespace-nowrap text-sm font-medium", isCurrent ? "text-interactive-500" : isCompleted ? "text-ink" : "text-ink-subtle")}>
                {step.label}
              </span>
            </button>
            {idx < TRANSFER_OUT_STEPS.length - 1 && <span className="mx-4 h-px w-10 shrink-0 bg-border" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
