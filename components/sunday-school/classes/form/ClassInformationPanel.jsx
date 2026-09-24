"use client";

import { BookOpen, CircleCheck } from "lucide-react";

const CHECKLIST = [
  "Class name should be unique.",
  "Choose appropriate age group and grade level.",
  "Assign a teacher to manage the class.",
  "Set the schedule for regular class timings.",
];

export function ClassInformationPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-50">
          <BookOpen className="h-5 w-5 text-success-600" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">Class Information</h3>
          <p className="mt-0.5 text-xs text-ink-subtle">Fill in the details to create a new Sunday School class.</p>
        </div>
      </div>
      <ul className="flex flex-col gap-2.5">
        {CHECKLIST.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
            <CircleCheck className="h-4 w-4 shrink-0 text-success-500" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
