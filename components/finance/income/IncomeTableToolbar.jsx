"use client";

import { Search, SlidersHorizontal, Plus, MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function IncomeTableToolbar({ search, onSearchChange, title = "Recent Income" }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search income..."
            className="h-10 w-56 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filter
        </button>
        <Link href="/finance/income/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Income</Button>
        </Link>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
