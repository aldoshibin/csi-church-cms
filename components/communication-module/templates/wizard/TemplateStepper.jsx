"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TEMPLATE_STEPS } from "@/hooks/useNewTemplateForm";

export function TemplateStepper({ step, completedSteps, onStepClick }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-border bg-white p-5 shadow-card sm:gap-6">
      {TEMPLATE_STEPS.map((s, idx) => {
        const isCompleted = completedSteps.includes(s.key);
        const isCurrent = s.key === step;
        const clickable = isCompleted || isCurrent;
        return (
          <div key={s.key} className="flex items-center gap-3 sm:gap-6">
            <button
              type="button" disabled={!clickable} onClick={() => clickable && onStepClick(s.key)}
              className="flex items-center gap-2 disabled:cursor-default"
            >
              <span className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                isCompleted ? "bg-success-500 text-white" : isCurrent ? "bg-success-500 text-white" : "bg-white text-ink-subtle border border-border"
              )}>
                {isCompleted ? <Check className="h-3.5 w-3.5" /> : s.key}
              </span>
              <span className={cn("hidden text-sm font-medium sm:inline", isCurrent || isCompleted ? "text-ink" : "text-ink-subtle")}>
                {s.label}
              </span>
            </button>
            {idx < TEMPLATE_STEPS.length - 1 && <span className="h-px w-8 shrink-0 bg-border sm:w-16" />}
          </div>
        );
      })}
    </div>
  );
}
