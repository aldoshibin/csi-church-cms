"use client";

import { Search, CheckCircle2, Clock as ClockIcon, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { ATT_STATUS_OPTIONS, ATT_YOUTH_GROUP_OPTIONS } from "@/lib/mock/ymAttendanceMockData";

const STATUS_SELECT_STYLE = {
  Present: "bg-success-50 text-success-600 border-success-200",
  Late: "bg-warning-50 text-warning-600 border-warning-200",
  Absent: "bg-danger-50 text-danger-600 border-danger-200",
  "Not Marked": "bg-surface-muted text-ink-subtle border-border",
};

export function EditAttendanceTable({
  members, pagination,
  search, onSearchChange, groupFilter, onGroupFilterChange, statusFilter, onStatusFilterChange,
  onMarkAllPresent, onToggleChecked, onUpdateMember, onRemoveMember,
}) {
  const columns = [
    {
      key: "checked", header: "", cellClassName: "w-8",
      render: (row) => (
        <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={row.checked} onChange={() => onToggleChecked(row.id)} />
      ),
    },
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
      render: (row) => (
        <select
          value={row.status}
          onChange={(e) => onUpdateMember(row.id, "status", e.target.value)}
          className={`h-9 rounded-md border px-2 text-xs font-medium ${STATUS_SELECT_STYLE[row.status] ?? STATUS_SELECT_STYLE["Not Marked"]}`}
        >
          {ATT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
      ),
    },
    {
      key: "checkIn", header: "Check-in Time",
      render: (row) => (
        <div className="relative">
          <ClockIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
          <input
            type="text" value={row.checkIn} onChange={(e) => onUpdateMember(row.id, "checkIn", e.target.value)}
            placeholder="—" className="h-9 w-24 rounded-md border border-border pl-7 pr-2 text-sm text-ink"
          />
        </div>
      ),
    },
    {
      key: "checkOut", header: "Check-out Time",
      render: (row) => (
        <div className="relative">
          <ClockIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-subtle" />
          <input
            type="text" value={row.checkOut} onChange={(e) => onUpdateMember(row.id, "checkOut", e.target.value)}
            placeholder="—" className="h-9 w-24 rounded-md border border-border pl-7 pr-2 text-sm text-ink"
          />
        </div>
      ),
    },
    {
      key: "notes", header: "Notes",
      render: (row) => (
        <input
          type="text" value={row.notes} onChange={(e) => onUpdateMember(row.id, "notes", e.target.value)}
          placeholder="—" className="h-9 w-32 rounded-md border border-border px-2 text-sm text-ink"
        />
      ),
    },
    {
      key: "actions", header: "", cellClassName: "text-right",
      render: (row) => (
        <button type="button" onClick={() => onRemoveMember(row.id)} className="rounded-md p-2 text-danger-500 hover:bg-danger-50" aria-label={`Remove ${row.name}`}>
          <Trash2 className="h-4 w-4" />
        </button>
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
            placeholder="Search members by name..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={groupFilter} onChange={(e) => onGroupFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Youth Groups</option>
          {ATT_YOUTH_GROUP_OPTIONS.map((g) => <option key={g}>{g}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Statuses</option>
          {ATT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <Button type="button" variant="secondary" size="sm" leftIcon={<CheckCircle2 className="h-3.5 w-3.5" />} onClick={onMarkAllPresent}>
          Mark All Present
        </Button>
      </div>
      <Table columns={columns} data={members} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
