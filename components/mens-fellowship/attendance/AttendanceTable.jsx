"use client";

import { useRouter } from "next/navigation";
import { Search, Users2, Eye, BarChart3, MoreVertical } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { ATTENDANCE_LIST_STATUS_VARIANT, ATTENDANCE_MEETING_TYPE_OPTIONS, rateColor } from "@/lib/mock/meetingAttendanceMockData";
import { formatDate } from "@/lib/utils";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function AttendanceTable({
  meetings, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange, typeFilter, onTypeFilterChange, monthFilter, onMonthFilterChange,
}) {
  const router = useRouter();
  const goToRecord = (row) => router.push(`/mens-fellowship/attendance/${row.id}`);

  const columns = [
    {
      key: "title", header: "Meeting Title",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-600">
            <Users2 className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-medium text-ink">{row.title}</p>
            <p className="truncate text-xs text-ink-subtle">{row.subtitle}</p>
          </div>
        </div>
      ),
    },
    { key: "type", header: "Meeting Type", render: (row) => <span className="text-ink-muted">{row.type}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.day}, {row.time}</p>
        </div>
      ),
    },
    { key: "venue", header: "Venue", render: (row) => <span className="text-ink-muted">{row.venue}</span> },
    { key: "expected", header: "Expected", render: (row) => <span className="text-ink">{row.expected}</span> },
    { key: "present", header: "Present", render: (row) => <span className="text-ink">{row.present}</span> },
    {
      key: "pct", header: "Attendance %",
      render: (row) => {
        const pct = row.expected ? Math.round((row.present / row.expected) * 1000) / 10 : 0;
        return <span className={`font-medium ${rateColor(pct)}`}>{pct.toFixed(1)}%</span>;
      },
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={ATTENDANCE_LIST_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => goToRecord(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => goToRecord(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Statistics for ${row.title}`}>
            <BarChart3 className="h-4 w-4" />
          </button>
          <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search meetings by title or theme..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          <option>Completed</option>
          <option>Upcoming</option>
          <option>Cancelled</option>
        </select>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Meeting Types</option>
          {ATTENDANCE_MEETING_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={monthFilter} onChange={(e) => onMonthFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Months</option>
          {MONTHS.map((m) => <option key={m}>{m}</option>)}
        </select>
      </div>
      <Table columns={columns} data={meetings} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={goToRecord} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
