"use client";

import { Search, SlidersHorizontal, Eye, Pencil } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MemberRowActionsMenu } from "./MemberRowActionsMenu";
import { MEM_STATUS_VARIANT, MEM_GROUP_OPTIONS, MEM_STATUS_OPTIONS } from "@/lib/mock/fellowshipMembersMockData";
import { formatDate } from "@/lib/utils";

export function MembersTable({
  members, isLoading, pagination,
  search, onSearchChange, groupFilter, onGroupFilterChange, statusFilter, onStatusFilterChange,
  onView, onEdit, onSendMessage, onManageGroups, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Member Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.replace("Mrs. ", "").split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <button type="button" onClick={() => onView?.(row)} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.name}
            </button>
            <p className="text-xs text-ink-subtle">Age {row.age}</p>
          </div>
        </div>
      ),
    },
    { key: "group", header: "Group", render: (row) => <span className="text-ink-muted">{row.group}</span> },
    { key: "phone", header: "Phone Number", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "email", header: "Email", render: (row) => <span className="text-ink-muted">{row.email}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MEM_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "joinedOn", header: "Joined On", render: (row) => <span className="text-ink-muted">{formatDate(row.joinedOn)}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <MemberRowActionsMenu member={row} onView={onView} onEdit={onEdit} onSendMessage={onSendMessage} onManageGroups={onManageGroups} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Members List</h3>
        <div className="flex items-center gap-2">
          <select value={groupFilter} onChange={(e) => onGroupFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Fellowship Groups</option>
            {MEM_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {MEM_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search members..."
              className="h-9 w-48 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
