"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, Calendar, Eye, BarChart2, MoreVertical, UsersRound } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MTG_STATUS_VARIANT, MTG_TYPE_OPTIONS, MTG_STATUS_OPTIONS } from "@/lib/mock/meetingAttendanceMockData";
import { formatDate } from "@/lib/utils";

const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function MeetingsTable({
  meetings, isLoading, pagination,
  search, onSearchChange, typeFilter, onTypeFilterChange, statusFilter, onStatusFilterChange,
  onView, onViewReport,
}) {
  const columns = [
    {
      key: "title", header: "Meeting Title",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
            <UsersRound className="h-4 w-4" style={{ color: row.color }} />
          </span>
          <div>
            <button type="button" onClick={() => onView?.(row)} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.title}
            </button>
            <p className="text-xs text-ink-subtle">{row.description}</p>
          </div>
        </div>
      ),
    },
    { key: "meetingType", header: "Meeting Type", render: (row) => <span className="text-ink-muted">{row.meetingType}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    { key: "venue", header: "Venue", render: (row) => <span className="text-ink-muted">{row.venue}</span> },
    { key: "expected", header: "Expected", render: (row) => <span className="text-ink">{row.expected}</span> },
    { key: "attended", header: "Attended", render: (row) => <span className="text-ink">{row.attended}</span> },
    {
      key: "rate", header: "Rate",
      render: (row) => {
        const rate = row.expected ? ((row.attended / row.expected) * 100).toFixed(1) : "0.0";
        return <span className={`font-medium ${rate >= 75 ? "text-success-600" : "text-warning-600"}`}>{rate}%</span>;
      },
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MTG_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onViewReport?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Report for ${row.title}`}>
            <BarChart2 className="h-4 w-4" />
          </button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`More actions for ${row.title}`}>
                <MoreVertical className="h-4 w-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={itemClass}>Edit Meeting</DropdownMenu.Item>
                <DropdownMenu.Item className={itemClass}>Export Attendance</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`}>Delete Meeting</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Meetings List</h3>
        <div className="flex items-center gap-2">
          <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Meeting Types</option>
            {MTG_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {MTG_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> Select Date Range
          </button>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search meetings..."
              className="h-9 w-40 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={meetings} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
