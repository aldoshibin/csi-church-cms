"use client";

import { useRef } from "react";
import { UserRound, CheckCircle2, Info } from "lucide-react";

export function VolunteerPhotoCard({ photoName, onPhotoChange }) {
  const inputRef = useRef(null);
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Photo</h3>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) onPhotoChange(f.name); }}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-surface-canvas px-4 py-10 text-center hover:bg-surface-muted"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-interactive-50 text-interactive-600">
          <UserRound className="h-6 w-6" />
        </span>
        <p className="text-sm text-ink-muted">{photoName || "Click to upload photo"}</p>
        <p className="text-xs text-ink-subtle">or drag and drop</p>
        <p className="text-xs text-ink-subtle">PNG, JPG up to 2MB</p>
        <input ref={inputRef} type="file" accept=".png,.jpg,.jpeg" className="hidden" onChange={(e) => onPhotoChange(e.target.files?.[0]?.name ?? "")} />
      </div>
    </div>
  );
}

const GUIDELINES = [
  "Provide accurate and complete information.",
  "Select the ministry and role that best fits the volunteer's skills and interests.",
  "Volunteers must be at least 16 years old.",
  "All information is kept confidential.",
];

export function VolunteerGuidelinesCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Guidelines</h3>
      <div className="flex flex-col gap-2.5">
        {GUIDELINES.map((g, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-500" />
            <p className="text-xs leading-relaxed text-ink-muted">{g}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VolunteerNoteCard() {
  return (
    <div className="rounded-lg border border-warning-200 bg-warning-50 p-4">
      <h3 className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-warning-800">
        <Info className="h-4 w-4" /> Note
      </h3>
      <p className="text-xs leading-relaxed text-warning-700">
        A welcome email with login access (if applicable) will be sent to the volunteer after saving the details.
      </p>
    </div>
  );
}
