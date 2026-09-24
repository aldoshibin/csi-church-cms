"use client";

import { useState } from "react";
import { Search, Users, X } from "lucide-react";

export function GroupMembersPanel({ members = [], onAdd, onRemove }) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault();
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Group Members</h3>
      <p className="mb-3 text-xs text-ink-subtle">Add initial members to this group.</p>
      <label className="mb-1.5 block text-sm font-medium text-ink">Add Members</label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}
          placeholder="Search members by name..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      {members.length === 0 ? (
        <div className="mt-5 flex flex-col items-center gap-2 py-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50">
            <Users className="h-7 w-7 text-success-600" />
          </span>
          <p className="text-sm font-medium text-ink">No members added yet</p>
          <p className="text-xs text-ink-subtle">Search and add members to this group.</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          {members.map((m) => (
            <span key={m} className="flex items-center gap-1.5 rounded-full bg-interactive-50 px-3 py-1 text-xs font-medium text-interactive-600">
              {m}
              <button type="button" onClick={() => onRemove(m)} aria-label={`Remove ${m}`}>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
