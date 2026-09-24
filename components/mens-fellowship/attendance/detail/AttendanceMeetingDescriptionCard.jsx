"use client";

import { AlignLeft } from "lucide-react";

export function AttendanceMeetingDescriptionCard({ description }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success-50 text-success-600">
        <AlignLeft className="h-4 w-4" />
      </span>
      <div>
        <h3 className="mb-1 text-base font-semibold text-ink">Meeting Description</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  );
}
