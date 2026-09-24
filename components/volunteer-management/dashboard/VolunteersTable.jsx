"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RefreshCw, RotateCcw, Eye, MoreVertical, Pencil, Building2, Ban, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import { VOLUNTEER_STATUS_VARIANT, VOLUNTEER_MINISTRY_BADGE, VOLUNTEER_MINISTRY_OPTIONS, VOLUNTEER_ROLE_OPTIONS, VOLUNTEER_STATUS_OPTIONS } from "@/lib/mock/volunteersMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onEdit, onAssign, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Volunteer</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onAssign?.(row)}><Building2 className="h-4 w-4" /> Assign to Ministry</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDeactivate?.(row)}><Ban className="h-4 w-4" /> Deactivate</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function VolunteersTable({
  volunteers, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, ministryFilter, onMinistryFilterChange,
  roleFilter, onRoleFilterChange, statusFilter, onStatusFilterChange,
  onRefresh, onReset, selectedIds, onSelectionChange,
  onViewDetails, onEdit, onAssign, onDeactivate, onDelete,
}) {
  const showRoleFilter = roleFilter !== undefined && !!onRoleFilterChange;
  const columns = [
    {
      key: "name", header: "Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.name}</p>
            <p className="truncate text-xs text-ink-subtle">{row.id}</p>
          </div>
        </div>
      ),
    },
    {
      key: "ministry", header: "Ministry / Team",
      render: (row) => {
        const style = VOLUNTEER_MINISTRY_BADGE[row.ministry] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.ministry}</span>;
      },
    },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    { key: "phone", header: "Phone", render: (row) => <span className="text-ink-muted">{row.phone}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={VOLUNTEER_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    { key: "lastService", header: "Last Service", render: (row) => <span className="text-ink-muted">{row.lastService ? formatDate(row.lastService) : "—"}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </button>
          <RowActionsMenu row={row} onEdit={onEdit} onAssign={onAssign} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="border-b border-border px-4 py-3">
        <div className="flex flex-wrap gap-6 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab} type="button" onClick={() => onTabChange(tab)}
              className={cn(
                "border-b-2 py-3 text-sm font-medium transition-colors",
                activeTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
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
            placeholder="Search volunteers..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Ministries</option>
          {VOLUNTEER_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </select>
        {showRoleFilter && (
          <select value={roleFilter} onChange={(e) => onRoleFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Roles</option>
            {VOLUNTEER_ROLE_OPTIONS.map((r) => <option key={r}>{r}</option>)}
          </select>
        )}
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {VOLUNTEER_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        {onReset ? (
          <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        ) : (
          <button type="button" onClick={onRefresh} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Refresh">
            <RefreshCw className="h-4 w-4" />
          </button>
        )}
      </div>

      <Table
        columns={columns} data={volunteers} isLoading={isLoading} getRowId={(row) => row.id}
        selectable selectedRows={selectedIds} onSelectionChange={onSelectionChange}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
      />
    </div>
  );
}
