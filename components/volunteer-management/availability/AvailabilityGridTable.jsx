"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RotateCcw, MoreVertical, Eye, Pencil, CalendarOff, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { TablePagination } from "@/components/ui/Table";
import { cn, formatDate } from "@/lib/utils";
import { AvailabilityStatusTag } from "./AvailabilityStatusTag";
import { AVAILABILITY_MINISTRY_OPTIONS, WEEK_DATES_MOCK, DAY_SHORT } from "@/lib/mock/availabilityMockData";

function shortDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(date);
}

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onEdit, onAddTimeOff, onRemove }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onView?.(row)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Availability</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onAddTimeOff?.(row)}><CalendarOff className="h-4 w-4" /> Add Time Off</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onRemove?.(row)}><Trash2 className="h-4 w-4" /> Remove</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function AvailabilityGridTable({
  volunteers, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, ministryFilter, onMinistryFilterChange, serviceFilter, onDateFilterChange, dateFilter,
  onReset, onViewDetails, onEdit, onAddTimeOff, onRemove,
}) {
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
        <div className="relative flex-1 min-w-[180px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search volunteers..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={ministryFilter} onChange={(e) => onMinistryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Ministries</option>
          {AVAILABILITY_MINISTRY_OPTIONS.map((m) => <option key={m}>{m}</option>)}
        </select>
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted" defaultValue="All Services / Events">
          <option>All Services / Events</option>
        </select>
        <input
          type="date" value={dateFilter} onChange={(e) => onDateFilterChange(e.target.value)}
          className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted"
        />
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Previous week">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="text-xs font-medium text-ink-subtle">Week of {formatDate(WEEK_DATES_MOCK[0].date)} – {formatDate(WEEK_DATES_MOCK[6].date)}</p>
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Next week">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="scroll-thin min-w-0 overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 font-medium">Volunteer</th>
              {WEEK_DATES_MOCK.map((d) => (
                <th key={d.date} className="whitespace-nowrap px-4 py-3 font-medium">
                  <span className="block">{DAY_SHORT[d.day]}</span>
                  <span className="block text-[11px] font-normal normal-case text-ink-subtle">{shortDate(d.date)}</span>
                </th>
              ))}
              <th className="w-10 px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {volunteers.map((row) => (
              <tr key={row.id} onClick={() => onViewDetails?.(row)} className="cursor-pointer transition-colors hover:bg-surface-canvas">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
                      {row.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-ink">{row.name}</p>
                      <p className="truncate text-xs text-ink-subtle">{row.ministry}</p>
                    </div>
                  </div>
                </td>
                {WEEK_DATES_MOCK.map((d) => {
                  const entry = row.week[d.day] ?? { status: "Not Set" };
                  return (
                    <td key={d.date} className="px-4 py-3">
                      <AvailabilityStatusTag status={entry.status} label={entry.status} />
                      {entry.note && <p className="mt-0.5 text-xs text-ink-subtle">{entry.note}</p>}
                    </td>
                  );
                })}
                <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                  <RowActionsMenu row={row} onView={onViewDetails} onEdit={onEdit} onAddTimeOff={onAddTimeOff} onRemove={onRemove} />
                </td>
              </tr>
            ))}
            {!isLoading && volunteers.length === 0 && (
              <tr><td colSpan={9} className="px-4 py-16 text-center text-sm text-ink-subtle">No volunteers found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && volunteers.length > 0 && <TablePagination {...pagination} />}
    </div>
  );
}
