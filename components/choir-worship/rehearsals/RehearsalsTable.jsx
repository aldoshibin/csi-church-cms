"use client";

import { Search, SlidersHorizontal, RefreshCw, CalendarDays, Eye, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import {
  REHEARSAL_STATUS_VARIANT, REHEARSAL_TEAM_OPTIONS, REHEARSAL_LOCATION_OPTIONS, REHEARSAL_STATUS_OPTIONS, REHEARSAL_TEAM_BADGE_COLOR,
} from "@/lib/mock/rehearsalsMockData";
import { formatDate } from "@/lib/utils";

export function RehearsalsTable({
  rehearsals, isLoading, pagination,
  search, onSearchChange, teamFilter, onTeamFilterChange, locationFilter, onLocationFilterChange, statusFilter, onStatusFilterChange,
  onRefresh,
}) {
  const columns = [
    {
      key: "title", header: "Title",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <CalendarDays className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.title}</p>
            <p className="truncate text-xs text-ink-subtle">{row.subtitle}</p>
          </div>
        </div>
      ),
    },
    {
      key: "team", header: "Team",
      render: (row) => (
        <span className={`text-sm font-medium ${REHEARSAL_TEAM_BADGE_COLOR[row.team] ?? "text-ink-muted"}`}>{row.team}</span>
      ),
    },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.day}, {row.timeRange}</p>
        </div>
      ),
    },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    {
      key: "leadBy", header: "Led By",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
            {row.leadBy.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-ink">{row.leadBy}</p>
            <p className="truncate text-xs text-ink-subtle">{row.leadRole}</p>
          </div>
        </div>
      ),
    },
    {
      key: "attendance", header: "Attendance",
      render: (row) => {
        const pct = row.expected ? Math.round((row.present / row.expected) * 100) : 0;
        return (
          <div>
            <p className="text-ink">{row.present}/{row.expected}</p>
            <p className="text-xs text-ink-subtle">({pct}%)</p>
          </div>
        );
      },
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={REHEARSAL_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: () => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="View">
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search rehearsals..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={teamFilter} onChange={(e) => onTeamFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Teams</option>
          {REHEARSAL_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={locationFilter} onChange={(e) => onLocationFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Locations</option>
          {REHEARSAL_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {REHEARSAL_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input type="text" placeholder="Select date range" disabled className="h-9 w-40 rounded-md border border-border bg-white px-3 text-sm text-ink-subtle" />
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onRefresh} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Refresh">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      <Table columns={columns} data={rehearsals} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
