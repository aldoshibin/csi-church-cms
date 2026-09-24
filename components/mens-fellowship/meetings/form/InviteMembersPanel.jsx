"use client";

import { useState } from "react";
import { Search, UserPlus } from "lucide-react";

export function InviteMembersPanel({ candidates, selectedIds, onToggle }) {
  const [search, setSearch] = useState("");
  const filtered = candidates.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Invite Members</h3>
      <p className="mb-3 text-xs text-ink-subtle">Add members to invite for this meeting.</p>
      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search members..."
          className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>
      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto">
        {filtered.map((m) => (
          <label key={m.id} className="flex cursor-pointer items-center gap-3 rounded-md px-1 py-1.5 hover:bg-surface-canvas">
            <input
              type="checkbox"
              checked={selectedIds.includes(m.id)}
              onChange={() => onToggle(m.id)}
              className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
            />
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {m.name.replace(/^Mr\.\s*/, "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{m.name}</p>
              <p className="truncate text-xs text-ink-subtle">{m.group}</p>
            </div>
          </label>
        ))}
      </div>
      <button type="button" className="mt-3 flex items-center gap-2 text-sm font-medium text-success-600 hover:underline">
        <UserPlus className="h-4 w-4" /> Add New Member
      </button>
    </div>
  );
}
