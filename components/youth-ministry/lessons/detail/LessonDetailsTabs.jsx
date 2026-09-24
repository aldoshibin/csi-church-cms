"use client";

import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ["Overview", "Content", "Materials", "Schedule", "Assignments", "Notes", "History"];

export function LessonDetailsTabs({ active, onChange }) {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-border px-1">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors",
            active === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export function LessonTabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-muted text-ink-subtle">
        <FileText className="h-5 w-5" />
      </span>
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="max-w-sm text-xs text-ink-subtle">This section isn't in the current design reference — let me know if you'd like it built out.</p>
    </div>
  );
}
