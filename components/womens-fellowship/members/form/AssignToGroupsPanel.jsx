"use client";

import { useState } from "react";
import { Search, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MEM_GROUP_OPTIONS } from "@/lib/mock/fellowshipMembersMockData";

export function AssignToGroupsPanel({ assignedGroups, primaryGroup, onToggle, onSetPrimary }) {
  const [search, setSearch] = useState("");
  const visibleGroups = MEM_GROUP_OPTIONS.filter((g) => g.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-1 text-sm font-semibold text-ink">Assign to Groups</h3>
      <p className="mb-3 text-xs text-ink-subtle">Select the fellowship group(s) this member belongs to.</p>
      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="Search groups..."
          className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        {visibleGroups.map((group) => {
          const checked = assignedGroups.includes(group);
          const isPrimary = primaryGroup === group;
          return (
            <label key={group} className="flex items-center gap-2 text-sm text-ink">
              <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={checked} onChange={() => onToggle(group)} />
              <span className="flex-1">{group}</span>
              {checked && (
                isPrimary
                  ? <Badge variant="success">Primary</Badge>
                  : <button type="button" onClick={() => onSetPrimary(group)} className="text-xs font-medium text-interactive-500 hover:underline">Set Primary</button>
              )}
            </label>
          );
        })}
      </div>
      <div className="mt-3 flex gap-2 text-xs text-ink-subtle">
        <Info className="h-3.5 w-3.5 shrink-0 text-interactive-500" />
        Select one group as Primary.
      </div>
    </div>
  );
}
