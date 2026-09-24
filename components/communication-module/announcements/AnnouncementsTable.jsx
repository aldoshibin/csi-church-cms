"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RotateCcw, MoreHorizontal, Eye, Pencil, Copy, CalendarClock, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn, formatDate } from "@/lib/utils";
import { AnnouncementIcon } from "./AnnouncementIcon";
import {
  ANNOUNCEMENT_STATUS_VARIANT, ANNOUNCEMENT_CATEGORY_VARIANT, ANNOUNCEMENT_STATUS_OPTIONS,
  ANNOUNCEMENT_CATEGORY_OPTIONS, ANNOUNCEMENT_AUDIENCE_OPTIONS, ANNOUNCEMENT_CATEGORIES_SIDEBAR_MOCK,
} from "@/lib/mock/vmAnnouncementsMockData";

const CATEGORY_ICON = ANNOUNCEMENT_CATEGORIES_SIDEBAR_MOCK.reduce((acc, c) => {
  acc[c.label] = { icon: c.icon, bg: c.bg, color: c.color };
  return acc;
}, {});

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function RowActionsMenu({ row, onView, onEdit, onDuplicate, onSchedule, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onView?.(row)}><Eye className="h-4 w-4" /> View Details</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Announcement</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDuplicate?.(row)}><Copy className="h-4 w-4" /> Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onSchedule?.(row)}><CalendarClock className="h-4 w-4" /> Schedule Again</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function AnnouncementsTable({
  announcements, isLoading, pagination,
  tabs, activeTab, onTabChange,
  search, onSearchChange, statusFilter, onStatusFilterChange, categoryFilter, onCategoryFilterChange, audienceFilter, onAudienceFilterChange,
  onReset, onViewDetails, onEdit, onDuplicate, onSchedule, onDelete,
}) {
  const columns = [
    {
      key: "title", header: "Announcement",
      render: (row) => {
        const style = CATEGORY_ICON[row.category] ?? CATEGORY_ICON.Others;
        return (
          <div className="flex items-center gap-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.bg} ${style.color}`}>
              <AnnouncementIcon name={style.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-interactive-600">{row.title}</p>
              <p className="truncate text-xs text-ink-subtle">{row.description}</p>
            </div>
          </div>
        );
      },
    },
    { key: "category", header: "Category", render: (row) => <Badge variant={ANNOUNCEMENT_CATEGORY_VARIANT[row.category] ?? "default"}>{row.category}</Badge> },
    {
      key: "audience", header: "Audience",
      render: (row) => (
        <div className="flex items-center gap-1.5 text-ink-muted">
          <AnnouncementIcon name="Users2" className="h-3.5 w-3.5 text-ink-subtle" />
          {row.audience}
        </div>
      ),
    },
    { key: "status", header: "Status", render: (row) => <Badge variant={ANNOUNCEMENT_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "publishedOn", header: "Published / Scheduled On",
      render: (row) => row.publishedOn ? (
        <span className="text-ink-muted">
          {formatDate(row.publishedOn)} {new Date(row.publishedOn).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
        </span>
      ) : <span className="text-ink-subtle">&ndash;</span>,
    },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end">
          <RowActionsMenu row={row} onView={onViewDetails} onEdit={onEdit} onDuplicate={onDuplicate} onSchedule={onSchedule} onDelete={onDelete} />
        </div>
      ),
    },
  ];

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
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search announcements..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {ANNOUNCEMENT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
          {ANNOUNCEMENT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={audienceFilter} onChange={(e) => onAudienceFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Audience</option>
          {ANNOUNCEMENT_AUDIENCE_OPTIONS.map((a) => <option key={a}>{a}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onReset} className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      <Table
        columns={columns} data={announcements} isLoading={isLoading} getRowId={(row) => row.id}
        onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination}
        emptyMessage="No announcements found." emptyDescription="Once announcements are created, they'll show up here."
      />
    </div>
  );
}
