"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionsListCard({ sections, search, onSearchChange, selectedSection, onSelectSection }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Sections</h3>
      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search} onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search section..."
          className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        {sections.map((s) => (
          <button
            key={s} type="button" onClick={() => onSelectSection(s)}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
              selectedSection === s ? "bg-success-50 text-success-700" : "text-ink-muted hover:bg-surface-canvas"
            )}
          >
            <span className={cn("h-2 w-2 shrink-0 rounded-full", selectedSection === s ? "bg-success-500" : "bg-border")} />
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
