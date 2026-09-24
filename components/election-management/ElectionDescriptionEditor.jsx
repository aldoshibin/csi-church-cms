"use client";

import { Bold, Italic, Underline, List, ListOrdered, Link2 } from "lucide-react";

// A decorative (non-functional) rich-text-style toolbar over a plain
// textarea, with a live word count — matching this project's precedent
// in NewMessageContentEditor.jsx. Reused by both the Create and Edit
// Election forms' "Description" field.
export function ElectionDescriptionEditor({ value, onChange, label = "Election Description", required = false, placeholder = "Describe the purpose and scope of this election..." }) {
  const wordCount = value?.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div className="w-full">
      <div className="mb-1.5 flex items-center justify-between">
        <label className="text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-0.5 text-danger-500">*</span>}
        </label>
        <span className="text-xs text-ink-subtle">Words: {wordCount}</span>
      </div>
      <div className="overflow-hidden rounded-md border border-border bg-white focus-within:ring-2 focus-within:ring-interactive-500 focus-within:border-interactive-500">
        <div className="flex items-center gap-1 border-b border-border bg-surface-canvas px-2 py-1.5">
          {[Bold, Italic, Underline, List, ListOrdered, Link2].map((Icon, index) => (
            <button
              key={index} type="button" tabIndex={-1}
              className="flex h-7 w-7 items-center justify-center rounded text-ink-subtle hover:bg-surface-muted hover:text-ink"
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full resize-none border-0 px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
        />
      </div>
    </div>
  );
}
