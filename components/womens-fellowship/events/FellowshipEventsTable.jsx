"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, Eye, Pencil, MoreVertical, Heart, BookOpen, Users, Cross, HandHeart, Star } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { EVT_STATUS_VARIANT, EVT_TYPE_OPTIONS, EVT_STATUS_OPTIONS } from "@/lib/mock/fellowshipEventsMockData";

const ICON_MAP = { heart: Heart, book: BookOpen, users: Users, cross: Cross, handHeart: HandHeart, star: Star };
const itemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function FellowshipEventsTable({
  events, isLoading, pagination,
  search, onSearchChange, typeFilter, onTypeFilterChange, statusFilter, onStatusFilterChange,
  onView, onEdit,
}) {
  const columns = [
    {
      key: "title", header: "Event Title",
      render: (row) => {
        const typeOption = EVT_TYPE_OPTIONS.find((t) => t.value === row.eventType);
        const Icon = ICON_MAP[typeOption?.icon] ?? Heart;
        return (
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
              <Icon className="h-4 w-4" style={{ color: row.color }} />
            </span>
            <div>
              <button type="button" onClick={() => onView?.(row)} className="font-medium text-ink hover:text-interactive-600 hover:underline">
                {row.title}
              </button>
              <p className="text-xs text-ink-subtle">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    { key: "eventType", header: "Event Type", render: (row) => <span className="text-ink-muted">{row.eventType}</span> },
    {
      key: "date", header: "Date & Time",
      render: (row) => (
        <div>
          <p className="text-ink">{row.date ? new Date(row.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    { key: "venue", header: "Venue", render: (row) => <span className="text-ink-muted">{row.venue}</span> },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={EVT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    {
      key: "registered", header: "Registered",
      render: (row) => <span className="text-ink">{row.registered != null ? `${row.registered} / ${row.capacity}` : "- / -"}</span>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onView?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`More actions for ${row.title}`}>
                <MoreVertical className="h-4 w-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-44 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={itemClass}>Duplicate Event</DropdownMenu.Item>
                <DropdownMenu.Item className={itemClass}>Cancel Event</DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 h-px bg-border" />
                <DropdownMenu.Item className={`${itemClass} text-danger-600 hover:text-danger-600`}>Delete Event</DropdownMenu.Item>
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
        <h3 className="text-base font-semibold text-ink">Events List</h3>
        <div className="flex items-center gap-2">
          <select value={typeFilter} onChange={(e) => onTypeFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Event Types</option>
            {EVT_TYPE_OPTIONS.map((t) => <option key={t.value}>{t.value}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {EVT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
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
