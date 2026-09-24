"use client";

import { UserPlus, CircleCheck } from "lucide-react";

const CHECKLIST = [
  "All * marked fields are required.",
  "Ensure date of birth is correct.",
  "You can edit student details anytime.",
  "Assign the student to a class after saving.",
];

export function StudentInformationPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-50">
          <UserPlus className="h-5 w-5 text-success-600" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-ink">Student Information</h3>
          <p className="mt-0.5 text-xs text-ink-subtle">Add a new student to the Sunday School system. Fill in accurate details to help us manage and track their progress.</p>
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
