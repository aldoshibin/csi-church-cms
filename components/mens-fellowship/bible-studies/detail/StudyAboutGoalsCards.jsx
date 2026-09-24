"use client";

import { User, Target, CircleCheck } from "lucide-react";

export function AboutStudyCard({ about }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
        <User className="h-4 w-4" />
      </span>
      <div>
        <h3 className="mb-1 text-base font-semibold text-ink">About the Study</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{about}</p>
      </div>
    </div>
  );
}

export function StudyGoalsCard({ goals = [] }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
        <Target className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 text-base font-semibold text-ink">Study Goals</h3>
        <ul className="flex flex-col gap-2">
          {goals.map((g, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-success-500" /> {g}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
