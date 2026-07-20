"use client";

import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const DATE_RANGE_OPTIONS = [
  { key: "today", label: "Today", value: "18 May 2025" },
  { key: "week", label: "This Week", value: "18 May - 24 May 2025" },
  { key: "month", label: "This Month", value: "May 2025" },
  { key: "quarter", label: "This Quarter", value: "Apr - Jun 2025" },
];

export function DateRangeDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(DATE_RANGE_OPTIONS[0]);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-ink shadow-card hover:bg-surface-muted"
      >
        <CalendarDays className="h-4 w-4 text-interactive-500" />
        {selected.value}
        <ChevronDown className={cn("h-4 w-4 text-ink-subtle transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-72 rounded-lg border border-border bg-white p-2 shadow-elevated">
          {DATE_RANGE_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
                onSelect?.(opt);
              }}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm hover:bg-surface-muted"
            >
              <span className="font-semibold text-ink">{opt.label}</span>
              <span className="text-ink-subtle">{opt.value}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}