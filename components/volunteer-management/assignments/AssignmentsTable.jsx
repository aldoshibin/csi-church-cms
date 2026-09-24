"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RotateCcw, MoreHorizontal, Eye, Pencil, Users2, Ban, Trash2, CalendarDays } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import { AssignmentIcon } from "./AssignmentIcon";
import {
  ASSIGNMENT_STATUS_VARIANT, ASSIGNMENT_ICON_STYLE, ASSIGNMENT_MINISTRY_TEAM_OPTIONS, ASSIGNMENT_TEAM_OPTIONS,
} from "@/lib/mock/serviceAssignmentsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onEdit, onAssignVolunteers, onCancel, onDelete }) {
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
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Assignment</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onAssignVolunteers?.(row)}><Users2 className="h-4 w-4" /> Assign Volunteers</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onCancel?.(row)}><Ban className="h-4 w-4" /> Cancel</DropdownMenu.Item>
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function AssignmentsTable({
  assignments, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, ministryFilter, onMinistryFilterChange, teamFilter, onTeamFilterChange,
  dateFilter, onDateFilterChange,
  onReset, onViewDetails, onEdit, onAssignVolunteers, onCancel, onDelete,
}) {
  const columns = [
    {
      key: "title", header: "Service / Event",
      render: (row) => {
        const style = ASSIGNMENT_ICON_STYLE[row.title] ?? { bg: "bg-interactive-50", color: "text-interactive-600", icon: "Church" };
        return (
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
              <AssignmentIcon name={style.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-interactive-600">{row.title}</p>
              <p className="truncate text-xs text-ink-subtle">{row.location}</p>
            </div>
          </div>
        );
      },
    },
    {
      key: "ministryTeam", header: "Ministry / Team",
      render: (row) => <span className="inline-flex rounded-sm bg-interactive-50 px-2.5 py-1 text-xs font-medium text-interactive-600">{row.ministryTeam}</span>,
    },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.startTime} - {row.endTime}</p>
        </div>
      ),
    },
    {
      key: "assignedTo", header: "Assigned To",
      render: (row) => row.assignedTo?.type === "group" ? (
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            <Users2 className="h-4 w-4" />
          </span>
          <div>
            <p className="font-medium text-ink">{row.assignedTo.count} Volunteers</p>
            <button type="button" onClick={(e) => { e.stopPropagation(); onViewDetails?.(row); }} className="text-xs text-interactive-500 hover:underline">View all</button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.assignedTo?.name?.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.assignedTo?.name}</p>
            <p className="truncate text-xs text-ink-subtle">{row.assignedTo?.volunteerId}</p>
          </div>
        </div>
      ),
    },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={ASSIGNMENT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onViewDetails} onEdit={onEdit} onAssignVolunteers={onAssignVolunteers} onCancel={onCancel} onDelete={onDelete} />
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
            placeholder="Search assignments..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Ministries</option>
          {ASSIGNMENT_MINISTRY_TEAM_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </select>
        <select value={teamFilter} onChange={(e) => onTeamFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Teams</option>
          {ASSIGNMENT_TEAM_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <div className="relative">
          <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            type="date" value={dateFilter} onChange={(e) => onDateFilterChange(e.target.value)}
            className="h-9 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink-muted"
          />
        </div>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <Table
        columns={columns} data={assignments} isLoading={isLoading} getRowId={(row) => row.id}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No assignments found." emptyDescription="Once assignments are created, they'll show up here."
      />
    </div>
  );
}
