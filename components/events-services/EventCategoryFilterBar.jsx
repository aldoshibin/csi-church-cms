"use client";

import * as React from "react";
import { CalendarDays, Filter, RotateCcw, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


export function EventCategoryFilterBar({ categories = [], activeCategory, onCategoryChange, dateRangeLabel }) {
  return (
    <div className="flex flex-col gap-3 border-b border-border p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-5">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "relative pb-2 text-sm font-medium transition-colors",
                isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
              )}
            >
              {category}
              {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink hover:bg-surface-muted">
          <CalendarDays className="h-4 w-4 text-ink-subtle" />
          {dateRangeLabel}
        </button>
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
        </select>
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Locations</option>
        </select>
        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink hover:bg-surface-muted">
          <Filter className="h-3.5 w-3.5" />
          Filter
        </button>
        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink hover:bg-surface-muted">
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>
    </div>
  );
}
