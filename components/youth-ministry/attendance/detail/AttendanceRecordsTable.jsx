"use client";

import { Search, SlidersHorizontal, Eye, Pencil, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { ATT_STATUS_VARIANT } from "@/lib/mock/ymAttendanceMockData";

export function AttendanceRecordsTable({ members, isLoading, pagination, search, onSearchChange }) {
  const columns = [
    {
      key: "name", header: "Member Name",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">{row.initials}</span>
          <span className="font-medium text-ink">{row.name}</span>
        </div>
      ),
    },
    { key: "group", header: "Youth Group", render: (row) => <span className="text-ink-muted">{row.group}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={ATT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "checkIn", header: "Check-in Time", render: (row) => <span className="text-ink">{row.checkIn || "—"}</span> },
    { key: "checkOut", header: "Check-out Time", render: (row) => <span className="text-ink">{row.checkOut || "—"}</span> },
    { key: "recordedBy", header: "Recorded By", render: (row) => <span className="text-ink-muted">{row.recordedBy}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: () => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
            <Pencil className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">Attendance Records</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search members..."
              className="h-9 w-52 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={members} isLoading={isLoading} getRowId={(row) => row.id} pagination={pagination} />
    </div>
  );
}
