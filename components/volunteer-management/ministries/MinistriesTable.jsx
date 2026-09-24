"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RotateCcw, MoreHorizontal, Eye, Pencil, Users2, Ban, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { MinistryIcon } from "./MinistryIcon";
import {
  MINISTRY_STATUS_VARIANT, MINISTRY_CATEGORY_BADGE, MINISTRY_ICON_STYLE, MINISTRY_CATEGORY_OPTIONS, MINISTRY_STATUS_OPTIONS,
} from "@/lib/mock/ministriesTeamsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onEdit, onManageVolunteers, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onView?.(row)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Ministry</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onManageVolunteers?.(row)}><Users2 className="h-4 w-4" /> Manage Volunteers</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDeactivate?.(row)}><Ban className="h-4 w-4" /> Deactivate</DropdownMenu.Item>
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function MinistriesTable({
  ministries, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, statusFilter, onStatusFilterChange, categoryFilter, onCategoryFilterChange,
  onReset, onViewDetails, onEdit, onManageVolunteers, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Ministry Name",
      render: (row) => {
        const style = MINISTRY_ICON_STYLE[row.name] ?? { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Church" };
        return (
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
              <MinistryIcon name={style.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-interactive-600">{row.name}</p>
              <p className="truncate text-xs text-ink-subtle">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    {
      key: "category", header: "Category",
      render: (row) => {
        const style = MINISTRY_CATEGORY_BADGE[row.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.category}</span>;
      },
    },
    { key: "teams", header: "Teams", render: (row) => <span className="font-medium text-ink">{row.teams}</span> },
    { key: "volunteers", header: "Volunteers", render: (row) => <span className="font-medium text-ink">{row.volunteers}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={MINISTRY_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onViewDetails} onEdit={onEdit} onManageVolunteers={onManageVolunteers} onDeactivate={onDeactivate} onDelete={onDelete} />
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
            placeholder="Search ministries..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {MINISTRY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
          {MINISTRY_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <Table
        columns={columns} data={ministries} isLoading={isLoading} getRowId={(row) => row.id}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No ministries found." emptyDescription="Once ministries are added, they'll show up here."
      />
    </div>
  );
}
