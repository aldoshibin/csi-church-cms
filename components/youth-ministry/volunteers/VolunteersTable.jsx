"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Eye, Pencil, Phone } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { VolunteerRowActionsMenu } from "./VolunteerRowActionsMenu";
import { VOL_STATUS_VARIANT, VOL_MINISTRY_OPTIONS, VOL_STATUS_OPTIONS } from "@/lib/mock/ymVolunteersMockData";
import { formatDate } from "@/lib/utils";

export function VolunteersTable({
  volunteers, isLoading, pagination,
  search, onSearchChange, ministryFilter, onMinistryFilterChange, statusFilter, onStatusFilterChange,
  onEdit, onSendMessage, onViewAssignments, onDeactivate, onDelete,
}) {
  const columns = [
    {
      key: "name", header: "Volunteer",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">{row.initials}</span>
          <div className="min-w-0">
            <Link href={`/youth-ministry/volunteers/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.name}
            </Link>
            <p className="truncate text-xs text-ink-subtle">{row.email}</p>
          </div>
        </div>
      ),
    },
    { key: "ministry", header: "Ministry / Department", render: (row) => <span className="text-ink-muted">{row.ministry}</span> },
    { key: "role", header: "Role", render: (row) => <span className="text-ink">{row.role}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={VOL_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "contact", header: "Contact",
      render: (row) => (
        <span className="flex items-center gap-1.5 text-interactive-500">
          <Phone className="h-3.5 w-3.5" /> {row.phone}
        </span>
      ),
    },
    { key: "joinedOn", header: "Joined On", render: (row) => <span className="text-ink-muted">{formatDate(row.joinedOn)}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/youth-ministry/volunteers/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.name}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.name}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <VolunteerRowActionsMenu
            volunteer={row}
            onView={() => {}} onEdit={onEdit} onSendMessage={onSendMessage} onViewAssignments={onViewAssignments}
            onDeactivate={onDeactivate} onDelete={onDelete}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Volunteers List</h3>
        <div className="flex items-center gap-2">
          <select value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Ministries</option>
            {VOL_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {VOL_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search volunteers..."
              className="h-9 w-48 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={volunteers} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
