"use client";

import { Search, SlidersHorizontal, RefreshCw, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import { PsMemberRowActionsMenu } from "./PsMemberRowActionsMenu";
import {
  PS_STATUS_VARIANT, PS_TEAM_OPTIONS, PS_INSTRUMENT_OPTIONS, PS_DAY_OPTIONS,
} from "@/lib/mock/practiceScheduleMockData";

const TABS = ["All Members", "Vocalists", "Instrumentalists", "Sound & Tech", "Others"];

export function PracticeScheduleTable({
  members, isLoading, pagination,
  memberTab, onMemberTabChange,
  search, onSearchChange, teamFilter, onTeamFilterChange, instrumentFilter, onInstrumentFilterChange, dayFilter, onDayFilterChange,
  onRefresh,
  selectedIds, onSelectionChange,
  onViewDetails, onEdit, onAssignRole, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    { key: "team", header: "Team", render: (row) => <span className="text-ink-muted">{row.team}</span> },
    { key: "instrument", header: "Instrument/Skill", render: (row) => <span className="text-ink-muted">{row.instrument}</span> },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    {
      key: "nextPractice", header: "Next Practice",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.nextPractice)}</p>
          <p className="text-xs text-ink-subtle">{row.nextPracticeDay}, {row.nextPracticeTime}</p>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={PS_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <PsMemberRowActionsMenu
            member={row}
            onViewDetails={onViewDetails} onEdit={onEdit} onAssignRole={onAssignRole}
            onDeactivate={onDeactivate} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, role, phone..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={teamFilter} onChange={(e) => onTeamFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Teams</option>
          {PS_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={instrumentFilter} onChange={(e) => onInstrumentFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Instruments</option>
          {PS_INSTRUMENT_OPTIONS.map((v) => <option key={v}>{v}</option>)}
        </select>
        <select value={dayFilter} onChange={(e) => onDayFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Days</option>
          {PS_DAY_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onRefresh} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Refresh">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      <div className="border-b border-border px-4 py-3">
        <h3 className="mb-3 text-base font-semibold text-ink">Members</h3>
        <div className="flex flex-wrap gap-6 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onMemberTabChange(tab)}
              className={cn(
                "border-b-2 pb-2.5 text-sm font-medium transition-colors",
                memberTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <Table
        columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id}
        selectable selectedRows={selectedIds} onSelectionChange={onSelectionChange}
        className="rounded-none border-0 shadow-none" pagination={pagination}
      />
    </div>
  );
}
