"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { STEPS } from "@/hooks/useNewMemberEnrollmentForm";

export function EnrollmentProgressPanel({ currentStep, completedSteps }) {
  return (
    <section className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h2 className="mb-4 text-sm font-semibold text-interactive-500">Enrollment Progress</h2>
      <ol className="space-y-4">
        {STEPS.map((step) => {
          const isCompleted = completedSteps.includes(step.key);
          const isCurrent = step.key === currentStep;
          const status = isCompleted ? "Completed" : isCurrent ? "In Progress" : "Pending";
          return (
            <li key={step.key} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  isCompleted ? "bg-success-500 text-white" : isCurrent ? "bg-interactive-500 text-white" : "bg-surface-muted text-ink-subtle"
                )}
              >
                {isCompleted ? <Check className="h-3.5 w-3.5" /> : step.key}
              </span>
              <div>
                <p className={cn("text-sm font-medium", isCurrent ? "text-interactive-500" : "text-ink")}>{step.label}</p>
                <p className="text-xs text-ink-subtle">{status}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
