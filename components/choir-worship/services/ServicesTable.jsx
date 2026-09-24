"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RefreshCw, Eye, MoreVertical, Pencil, Copy, Ban, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import {
  SERVICE_STATUS_VARIANT, SERVICE_TYPE_ICON_COLOR, SERVICE_TYPE_OPTIONS, SERVICE_LOCATION_OPTIONS, SERVICE_STATUS_OPTIONS,
} from "@/lib/mock/servicesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onEdit, onDuplicate, onCancel, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Service</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(row)}><Copy className="h-4 w-4" /> Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onCancel?.(row)}><Ban className="h-4 w-4" /> Cancel Service</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function ServicesTable({
  services, isLoading, pagination,
  search, onSearchChange, typeFilter, onTypeFilterChange, locationFilter, onLocationFilterChange, statusFilter, onStatusFilterChange,
  onRefresh, onViewDetails, onEdit, onDuplicate, onCancel, onDelete,
}) {
  const columns = [
    {
      key: "date", header: "Date",
      render: (row) => (
        <div className="flex h-11 w-11 flex-col items-center justify-center rounded-lg bg-surface-muted text-ink">
          <span className="text-[10px] font-semibold uppercase leading-none text-ink-subtle">{new Date(row.date).toLocaleString("en-US", { month: "short" }).toUpperCase()}</span>
          <span className="text-sm font-bold leading-tight">{new Date(row.date).getDate()}</span>
        </div>
      ),
    },
    {
      key: "title", header: "Service Title",
      render: (row) => (
        <div>
          <p className="font-medium text-ink">{row.title}</p>
          <p className="text-xs text-ink-subtle">{row.timeRange}</p>
        </div>
      ),
    },
    {
      key: "type", header: "Type",
      render: (row) => {
        const style = SERVICE_TYPE_ICON_COLOR[row.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.type}</span>;
      },
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
      render: (row) => (
        <div>
          <p className="text-ink">{row.attendance}</p>
          <p className="text-xs text-ink-subtle">({row.attendancePct}%)</p>
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={SERVICE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <RowActionsMenu row={row} onEdit={onEdit} onDuplicate={onDuplicate} onCancel={onCancel} onDelete={onDelete} />
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
            placeholder="Search services..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Service Types</option>
          {SERVICE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={locationFilter} onChange={(e) => onLocationFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Locations</option>
          {SERVICE_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {SERVICE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input type="text" placeholder="Select date range" disabled className="h-9 w-40 rounded-md border border-border bg-white px-3 text-sm text-ink-subtle" />
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onRefresh} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Refresh">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      <Table columns={columns} data={services} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
