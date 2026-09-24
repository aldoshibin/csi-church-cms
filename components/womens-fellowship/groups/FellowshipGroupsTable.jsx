"use client";

import { Search, SlidersHorizontal, Eye, Pencil, Sprout, Crown, Heart, Circle, Cross, Wheat, Star } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { FellowshipGroupRowActionsMenu } from "./FellowshipGroupRowActionsMenu";
import { FG_STATUS_VARIANT, FG_STATUS_OPTIONS } from "@/lib/mock/fellowshipGroupsMockData";

const ICON_MAP = { sprout: Sprout, crown: Crown, heart: Heart, circle: Circle, cross: Cross, wheat: Wheat, star: Star };

export function FellowshipGroupsTable({
  groups, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange,
  onView, onEdit, onManageMembers, onDuplicate, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Group Name",
      render: (row) => {
        const Icon = ICON_MAP[row.icon] ?? Heart;
        return (
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
              <Icon className="h-4 w-4" style={{ color: row.color }} />
            </span>
            <div>
              <button type="button" onClick={() => onView?.(row)} className="font-medium text-ink hover:text-interactive-600 hover:underline">
                {row.name}
              </button>
              <p className="text-xs text-ink-subtle">Est. {row.establishedYear}</p>
            </div>
          </div>
        );
      },
    },
    { key: "leader", header: "Leader", render: (row) => <span className="text-ink">{row.leader}</span> },
    { key: "members", header: "Members", render: (row) => <span className="font-medium text-ink">{row.members}</span> },
    { key: "meeting", header: "Meeting Day & Time", render: (row) => <span className="text-ink-muted">{row.meetingDay}<br />{row.meetingTime}</span> },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={FG_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
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
          <FellowshipGroupRowActionsMenu group={row} onView={onView} onEdit={onEdit} onManageMembers={onManageMembers} onDuplicate={onDuplicate} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Fellowship Groups List</h3>
        <div className="flex items-center gap-2">
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {FG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search groups..."
              className="h-9 w-48 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={groups} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
