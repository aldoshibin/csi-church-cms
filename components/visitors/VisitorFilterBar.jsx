"use client";

import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { VISITOR_STATUS_OPTIONS, VISITOR_SOURCE_OPTIONS } from "@/utils/constants";
import { FaFilter } from "react-icons/fa6";


export function VisitorFilterBar({ onSearchChange, onStatusChange, onSourceChange, onDateRangeChange, onReset }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="relative min-w-[260px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          type="search"
          placeholder="Search visitors by name, email or phone..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-md border border-border pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle"
        />
      </div>

      <select onChange={(e) => onStatusChange(e.target.value)} defaultValue="" className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
        <option value="">All Status</option>
        {VISITOR_STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <div className="flex items-center gap-1.5 rounded-md border border-border px-2">
        <input type="date" onChange={(e) => onDateRangeChange((r) => ({ ...r, from: e.target.value }))} className="h-10 w-32 border-0 text-sm text-ink focus-visible:outline-none" />
        <span className="text-ink-subtle">-</span>
        <input type="date" onChange={(e) => onDateRangeChange((r) => ({ ...r, to: e.target.value }))} className="h-10 w-32 border-0 text-sm text-ink focus-visible:outline-none" />
      </div>

      <select onChange={(e) => onSourceChange(e.target.value)} defaultValue="" className="h-10 w-36 rounded-md border border-border px-3 text-sm text-ink">
        <option value="">All Sources</option>
        {VISITOR_SOURCE_OPTIONS.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <button className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-[#009688] hover:bg-surface-muted">
        <FaFilter className="h-3.5 w-3.5 text-[#009688]" /> Filter
      </button>
      <button onClick={onReset} className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-medium text-[#009688] hover:bg-surface-muted">
        {/* <RotateCcw className="h-3.5 w-3.5" />  */}
        Reset
      </button>
    </div>
  );
}
