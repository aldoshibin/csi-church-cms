"use client";

import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Eye, Pencil, CalendarDays } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { MeetingRowActionsMenu } from "./MeetingRowActionsMenu";
import {
  MEETING_STATUS_VARIANT, MEETING_TYPE_ICON_BG, MEETING_TYPE_OPTIONS,
  MEETING_STATUS_OPTIONS, MEETING_LOCATION_OPTIONS,
} from "@/lib/mock/meetingsMockData";
import { formatDate } from "@/lib/utils";

export function MeetingsTable({
  meetings, isLoading, pagination,
  search, onSearchChange, statusFilter, onStatusFilterChange, typeFilter, onTypeFilterChange, locationFilter, onLocationFilterChange,
  onEdit, onSendReminder, onManageAttendance, onCancel, onDelete,
}) {
  const router = useRouter();
  const goToMeeting = (row) => router.push(`/mens-fellowship/meetings/${row.id}`);

  const columns = [
    {
      key: "title", header: "Meeting Title",
      render: (row) => {
        const style = MEETING_TYPE_ICON_BG[row.type] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return (
          <div className="flex items-center gap-2.5">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.color}`}>
              <CalendarDays className="h-4 w-4" />
            </span>
            <span className="truncate font-medium text-ink hover:text-interactive-600">{row.title}</span>
          </div>
        );
      },
    },
    { key: "type", header: "Meeting Type", render: (row) => <span className="text-ink-muted">{row.type}</span> },
    { key: "speaker", header: "Speaker", render: (row) => <span className="text-ink">{row.speaker}</span> },
    {
      key: "date", header: "Date",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.day}</p>
        </div>
      ),
    },
    { key: "timeRange", header: "Time", render: (row) => <span className="text-ink-muted">{row.timeRange}</span> },
    { key: "location", header: "Location", render: (row) => <span className="text-ink-muted">{row.location}</span> },
    {
      key: "attendance", header: "Attendance",
      render: (row) => <span className="text-ink">{row.attended != null ? `${row.attended} / ${row.invited}` : "—"}</span>,
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={MEETING_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => goToMeeting(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <MeetingRowActionsMenu
            meeting={row}
            onViewDetails={goToMeeting} onEdit={onEdit} onSendReminder={onSendReminder}
            onManageAttendance={onManageAttendance} onCancel={onCancel} onDelete={onDelete}
          />
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
            placeholder="Search meetings by title, location, or speaker..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {MEETING_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Meeting Types</option>
          {MEETING_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={locationFilter} onChange={(e) => onLocationFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Locations</option>
          {MEETING_LOCATION_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>
      <Table columns={columns} data={meetings} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={goToMeeting} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
