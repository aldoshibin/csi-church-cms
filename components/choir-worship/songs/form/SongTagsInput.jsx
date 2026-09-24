"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function SongTagsInput({ tags, onAdd, onRemove }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">Tags (Optional)</label>
      <div className="flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-border bg-white px-2 py-1.5 focus-within:ring-2 focus-within:ring-interactive-500/20 focus-within:border-interactive-500">
        {tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1 rounded-sm bg-success-50 px-2 py-1 text-xs font-medium text-success-700">
            {tag}
            <button type="button" onClick={() => onRemove(tag)} aria-label={`Remove ${tag}`}>
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        <input
          value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}
          placeholder="Add tags and press Enter"
          className="h-7 flex-1 min-w-[120px] border-none bg-transparent text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
        />
      </div>
      <p className="mt-1.5 text-xs text-ink-subtle">Examples: Praise, Worship, Hymn, Thanksgiving</p>
    </div>
  );
}
