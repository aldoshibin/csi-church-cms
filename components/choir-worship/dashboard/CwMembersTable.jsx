"use client";

import { Search, SlidersHorizontal, Eye, Pencil, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import {
  CW_STATUS_VARIANT, CW_TEAM_BADGE, CW_ROLE_OPTIONS, CW_TEAM_OPTIONS, CW_STATUS_OPTIONS,
} from "@/lib/mock/choirWorshipMockData";

const TABS = ["All Members", "Choir Members", "Worship Team Members"];

export function CwMembersTable({
  members, isLoading, pagination,
  memberTab, onMemberTabChange,
  search, onSearchChange, roleFilter, onRoleFilterChange, teamFilter, onTeamFilterChange, statusFilter, onStatusFilterChange,
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
    { key: "role", header: "Role", render: (row) => <span className="text-ink-muted">{row.role}</span> },
    {
      key: "team", header: "Team",
      render: (row) => {
        const style = CW_TEAM_BADGE[row.team] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.team}</span>;
      },
    },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={CW_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
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

      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or role..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={roleFilter} onChange={(e) => onRoleFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Roles</option>
          {CW_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
        </select>
        <select value={teamFilter} onChange={(e) => onTeamFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Teams</option>
          {CW_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {CW_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>
      <Table columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
