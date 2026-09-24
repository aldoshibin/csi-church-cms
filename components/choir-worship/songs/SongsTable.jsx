"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, SlidersHorizontal, RefreshCw, Eye, MoreVertical, Pencil, Ban, Trash2 } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { SongTabPlaceholder } from "./detail/SongTabPlaceholder";
import {
  SONG_STATUS_VARIANT, SONG_CATEGORY_BADGE, SONG_CATEGORY_OPTIONS, SONG_LANGUAGE_OPTIONS, SONG_STATUS_FILTER_OPTIONS,
} from "@/lib/mock/songsMockData";
import { formatDate } from "@/lib/utils";

const TABS = ["Songs", "Song Categories", "Setlists"];
const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

function SongRowActionsMenu({ row, onEdit, onDeactivate, onDelete }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" onClick={(e) => e.stopPropagation()} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onEdit?.(row)}><Pencil className="h-4 w-4" /> Edit Song</DropdownMenu.Item>
          <DropdownMenu.Item className={menuItemClass} onSelect={() => onDeactivate?.(row)}><Ban className="h-4 w-4" /> Deactivate</DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onDelete?.(row)}><Trash2 className="h-4 w-4" /> Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function SongsTable({
  songs, isLoading, pagination,
  activeTab, onTabChange,
  search, onSearchChange, categoryFilter, onCategoryFilterChange, languageFilter, onLanguageFilterChange, statusFilter, onStatusFilterChange,
  onRefresh, onViewDetails, onEdit, onDeactivate, onDelete,
}) {
  const columns = [
    { key: "index", header: "#", render: (row) => <span className="text-ink-subtle">{songs.indexOf(row) + 1}</span> },
    {
      key: "title", header: "Song Title",
      render: (row) => <span className="font-medium text-ink">{row.title}</span>,
    },
    {
      key: "category", header: "Category",
      render: (row) => {
        const style = SONG_CATEGORY_BADGE[row.category] ?? { bg: "bg-surface-muted", color: "text-ink-subtle" };
        return <span className={`inline-flex rounded-sm px-2.5 py-1 text-xs font-medium ${style.bg} ${style.color}`}>{row.category}</span>;
      },
    },
    { key: "language", header: "Language", render: (row) => <span className="text-ink-muted">{row.language}</span> },
    { key: "key", header: "Key", render: (row) => <span className="text-ink-muted">{row.key}</span> },
    { key: "tempo", header: "Tempo", render: (row) => <span className="text-ink-muted">{row.tempo} BPM</span> },
    {
      key: "addedBy", header: "Added By",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
            {row.addedBy.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
          <span className="truncate text-sm font-medium text-ink">{row.addedBy}</span>
        </div>
      ),
    },
    { key: "addedOn", header: "Added On", render: (row) => <span className="text-ink-muted">{formatDate(row.addedOn)}</span> },
    { key: "status", header: "Status", render: (row) => <Badge variant={SONG_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <button type="button" onClick={() => onViewDetails?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </button>
          <SongRowActionsMenu row={row} onEdit={onEdit} onDeactivate={onDeactivate} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search songs..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
          {SONG_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={languageFilter} onChange={(e) => onLanguageFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Languages</option>
          {SONG_LANGUAGE_OPTIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          {SONG_STATUS_FILTER_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input type="text" placeholder="Select date range" disabled className="h-9 w-40 rounded-md border border-border bg-white px-3 text-sm text-ink-subtle" />
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <button type="button" onClick={onRefresh} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="Refresh">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      <div className="border-b border-border px-4">
        <div className="flex flex-wrap gap-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
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

      {activeTab === "Songs" ? (
        <Table columns={columns} data={songs} isLoading={isLoading} getRowId={(row) => row.id} onRowClick={onViewDetails} className="rounded-none border-0 shadow-none" pagination={pagination} />
      ) : (
        <SongTabPlaceholder label={activeTab} />
      )}
    </div>
  );
}