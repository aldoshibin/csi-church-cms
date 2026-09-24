"use client";

import { Calendar, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { AUDIT_MODULE_OPTIONS, AUDIT_ACTION_OPTIONS, AUDIT_USER_OPTIONS } from "@/lib/mock/auditLogsMockData";

export function AuditLogsFilters({
  dateRange,
  moduleFilter, onModuleChange,
  actionFilter, onActionChange,
  userFilter, onUserChange,
  search, onSearchChange,
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-white p-3 shadow-card">
      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <Calendar className="h-4 w-4" /> {dateRange} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
      </button>

      <select value={moduleFilter} onChange={(e) => onModuleChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Modules</option>
        {AUDIT_MODULE_OPTIONS.map((m) => <option key={m}>{m}</option>)}
      </select>

      <select value={actionFilter} onChange={(e) => onActionChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Actions</option>
        {AUDIT_ACTION_OPTIONS.map((a) => <option key={a}>{a}</option>)}
      </select>

      <select value={userFilter} onChange={(e) => onUserChange(e.target.value)} className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
        <option>All Users</option>
        {AUDIT_USER_OPTIONS.map((u) => <option key={u}>{u}</option>)}
      </select>

      <div className="relative min-w-[220px] flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by user, action or details..."
          className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        />
      </div>

      <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
