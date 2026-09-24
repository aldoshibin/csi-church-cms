"use client";

import { ShieldCheck } from "lucide-react";

const GUIDELINES = [
  "Allowed file types: PDF, JPG, PNG, DOC, DOCX",
  "Maximum file size: 10 MB",
  "Ensure the document is clear and readable.",
  "Use appropriate document type for easy organization.",
];

export function UploadGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Upload Guidelines</h3>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
        {GUIDELINES.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-interactive-500" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
