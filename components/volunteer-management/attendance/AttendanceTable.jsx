"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, MoreHorizontal, Eye, Pencil, MessageSquare, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import { ATTENDANCE_STATUS_VARIANT, ATTENDANCE_MINISTRY_OPTIONS, ATTENDANCE_SERVICE_OPTIONS } from "@/lib/mock/vmAttendanceMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onEdit, onAddNote, onDelete }) {
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
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Attendance</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onAddNote?.(row)}><MessageSquare className="h-4 w-4" /> Add Note</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function AttendanceTable({
  records, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, ministryFilter, onMinistryFilterChange, serviceFilter, onServiceFilterChange,
  dateRange, onDateRangeChange,
  onReset, onViewDetails, onEdit, onAddNote, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Volunteer",
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
            {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-interactive-600">{row.name}</p>
            <p className="truncate text-xs text-ink-subtle">{row.volunteerId}</p>
          </div>
        </div>
      ),
    },
    {
      key: "ministry", header: "Ministry / Team",
      render: (row) => <span className="inline-flex rounded-sm bg-interactive-50 px-2.5 py-1 text-xs font-medium text-interactive-600">{row.ministry}</span>,
    },
    { key: "service", header: "Service / Event", render: (row) => <span className="text-ink">{row.service}</span> },
    { key: "date", header: "Date", render: (row) => <span className="text-ink">{formatDate(row.date)}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={ATTENDANCE_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    { key: "checkInTime", header: "Check-in Time", render: (row) => <span className="text-ink-muted">{row.checkInTime ?? "–"}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onViewDetails} onEdit={onEdit} onAddNote={onAddNote} onDelete={onDelete} />
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
          {ATTENDANCE_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </select>
        <select value={serviceFilter} onChange={(e) => onServiceFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Services / Events</option>
          {ATTENDANCE_SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input
          type="text" value={dateRange} onChange={(e) => onDateRangeChange(e.target.value)}
          className="h-9 w-44 rounded-md border border-border bg-white px-3 text-sm text-ink-muted"
        />
        <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          Reset
        </button>
      </div>

      <div className="px-4 pt-3 pb-1">
        <h3 className="text-sm font-semibold text-ink">Attendance List</h3>
      </div>

      <Table
        columns={columns} data={records} isLoading={isLoading} getRowId={(row) => row.id}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No attendance records found." emptyDescription="Once attendance is marked, records will show up here."
      />
    </div>
  );
}
