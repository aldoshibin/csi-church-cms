"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Eye, Pencil, UsersRound } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MfGroupRowActionsMenu } from "./MfGroupRowActionsMenu";
import { MFG_STATUS_VARIANT, MFG_STATUS_OPTIONS, MFG_LEADER_OPTIONS } from "@/lib/mock/mensFellowshipGroupsMockData";

export function MfFellowshipGroupsTable({
  groups, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange, leaderFilter, onLeaderFilterChange,
  onEdit, onManageMembers, onDuplicate, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Group Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
            <UsersRound className="h-4 w-4" style={{ color: row.color }} />
          </span>
          <div>
            <Link href={`/mens-fellowship/fellowship-groups/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.name}
            </Link>
            <p className="text-xs text-ink-subtle">{row.tagline}</p>
          </div>
        </div>
      ),
    },
    { key: "leader", header: "Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "members", header: "Members", render: (row) => <span className="text-ink">{row.members} Members</span> },
    { key: "meetingDay", header: "Meeting Day", render: (row) => <span className="text-ink-muted">{row.meetingDay}</span> },
    { key: "meetingTime", header: "Meeting Time", render: (row) => <span className="text-ink-muted">{row.meetingTime}</span> },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    {
      key: "attendanceRate", header: "Attendance Rate",
      render: (row) => (
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface-muted">
            <div className="h-full rounded-full bg-success-500" style={{ width: `${row.attendanceRate}%` }} />
          </div>
          <span className="text-xs font-medium text-ink">{row.attendanceRate}%</span>
        </div>
      ),
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MFG_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/mens-fellowship/fellowship-groups/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <MfGroupRowActionsMenu group={row} onEdit={onEdit} onManageMembers={onManageMembers} onDuplicate={onDuplicate} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">All Fellowship Groups</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search groups..."
              className="h-9 w-40 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {MFG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <select value={leaderFilter} onChange={(e) => onLeaderFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Leaders</option>
            {MFG_LEADER_OPTIONS.map((l) => <option key={l}>{l}</option>)}
          </select>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={groups} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
