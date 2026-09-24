"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Eye, Pencil, MoreVertical, Music, Users, BookOpen, Cross } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Table } from "@/components/ui/Table";
import { formatDate } from "@/lib/utils";

const ICON_MAP = { music: Music, users: Users, book: BookOpen, cross: Cross };
const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function RecentAttendanceRecordsTable({ records, isLoading, pagination, search, onSearchChange, onExport, onDelete }) {
  const columns = [
    { key: "date", header: "Date", render: (row) => <span className="text-ink">{formatDate(row.date)}</span> },
    {
      key: "event", header: "Event / Ministry",
      render: (row) => {
        const Icon = ICON_MAP[row.icon] ?? Music;
        return (
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
              <Icon className="h-4 w-4" style={{ color: row.color }} />
            </span>
            <Link href={`/youth-ministry/attendance/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.event}
            </Link>
          </div>
        );
      },
    },
    { key: "category", header: "Category", render: (row) => <span className="text-ink-muted">{row.category}</span> },
    { key: "totalAttendance", header: "Total Attendance", render: (row) => <span className="font-medium text-ink">{row.totalAttendance}</span> },
    { key: "newVisitors", header: "New Visitors", render: (row) => <span className="text-ink">{row.newVisitors}</span> },
    { key: "recordedBy", header: "Recorded By", render: (row) => <span className="text-ink-muted">{row.recordedBy}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/youth-ministry/attendance/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.event}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <Link href={`/youth-ministry/attendance/${row.id}/edit`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.event}`}>
            <Pencil className="h-4 w-4" />
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`More actions for ${row.event}`}>
                <MoreVertical className="h-4 w-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-40 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={itemClass} onSelect={() => onExport?.(row)}>Export</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}>Delete</DropdownMenu.Item>
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
        <h3 className="text-base font-semibold text-ink">Recent Attendance Records</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search events..."
              className="h-9 w-52 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={records} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
