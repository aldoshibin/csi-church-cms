"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { PS_MEMBERS_MOCK } from "@/lib/mock/practiceScheduleMockData";

const CANDIDATES = PS_MEMBERS_MOCK.slice(0, 8);

export function AssignMembersPanel({ assignedMemberIds, onToggle, onRemove, onClearAll }) {
  const [search, setSearch] = useState("");
  const filtered = CANDIDATES.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase()) || m.instrument.toLowerCase().includes(search.toLowerCase()));
  const selectedMembers = CANDIDATES.filter((m) => assignedMemberIds.includes(m.id));

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Assign Members</h3>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Select Members <span className="text-danger-500">*</span></label>
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search members by name, role or instrument..."
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <div className="flex max-h-80 flex-col gap-1 overflow-y-auto">
            {filtered.map((m) => (
              <label key={m.id} className="flex cursor-pointer items-center gap-3 rounded-md px-1 py-2 hover:bg-surface-canvas">
                <input
                  type="checkbox"
                  checked={assignedMemberIds.includes(m.id)}
                  onChange={() => onToggle(m.id)}
                  className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
                />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{m.name}</p>
                  <p className="truncate text-xs text-ink-subtle">{m.role}</p>
                </div>
                <span className="shrink-0 text-xs text-ink-subtle">{m.instrument}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-sm font-medium text-success-600">Selected Members ({selectedMembers.length})</label>
            {selectedMembers.length > 0 && (
              <button type="button" onClick={onClearAll} className="text-xs font-medium text-danger-500 hover:underline">Clear All</button>
            )}
          </div>
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto">
            {selectedMembers.map((m) => (
              <div key={m.id} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                  {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{m.name}</p>
                  <p className="truncate text-xs text-ink-subtle">{m.role}</p>
                </div>
                <button type="button" onClick={() => onRemove(m.id)} className="text-ink-subtle hover:text-danger-500" aria-label={`Remove ${m.name}`}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-ink-muted">Total Members Selected: <span className="font-semibold text-ink">{selectedMembers.length}</span></p>
        </div>
      </div>
    </div>
  );
}
