"use client";

import { FileText, CircleCheck } from "lucide-react";

const CHECKLIST = [
  "All * marked fields are required.",
  "Ensure correct email and phone number for communication.",
  "Assign the teacher to appropriate classes.",
  "Login credentials will be used to access the system.",
];

export function TeacherGuidelinesPanel() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <FileText className="h-4 w-4 text-success-600" /> Guidelines
      </h3>
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
