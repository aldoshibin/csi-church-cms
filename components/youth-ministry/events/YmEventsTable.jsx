"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Eye, Pencil, PartyPopper } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { YmEventRowActionsMenu } from "./YmEventRowActionsMenu";
import { YME_STATUS_VARIANT, YME_CATEGORY_OPTIONS, YME_STATUS_OPTIONS } from "@/lib/mock/ymEventsMockData";
import { formatDate } from "@/lib/utils";

export function YmEventsTable({
  events, isLoading, pagination,
  search, onSearchChange, categoryFilter, onCategoryFilterChange, statusFilter, onStatusFilterChange,
  onEdit, onViewRegistrations, onDuplicate, onCancel, onDelete,
}) {
  const columns = [
    {
      key: "title", header: "Event Title",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
            <PartyPopper className="h-4 w-4" style={{ color: row.color }} />
          </span>
          <Link href={`/youth-ministry/events/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
            {row.title}
          </Link>
        </div>
      ),
    },
    { key: "category", header: "Category", render: (row) => <span className="text-ink-muted">{row.category}</span> },
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
    { key: "registrations", header: "Registrations", render: (row) => <span className="text-ink">{row.registered} / {row.capacity}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={YME_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/youth-ministry/events/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <YmEventRowActionsMenu event={row} onEdit={onEdit} onViewRegistrations={onViewRegistrations} onDuplicate={onDuplicate} onCancel={onCancel} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Events List</h3>
        <div className="flex items-center gap-2">
          <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Events</option>
            {YME_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {YME_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search events..."
              className="h-9 w-44 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={events} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
