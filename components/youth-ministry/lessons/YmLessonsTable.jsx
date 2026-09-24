"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Eye, Pencil, BookOpen } from "lucide-react";
import { Table } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";
import { LessonRowActionsMenu } from "./LessonRowActionsMenu";
import { LSN_STATUS_VARIANT, LSN_CATEGORY_OPTIONS, LSN_STATUS_OPTIONS } from "@/lib/mock/ymLessonsMockData";
import { formatDate } from "@/lib/utils";

export function YmLessonsTable({
  lessons, isLoading, pagination,
  search, onSearchChange, categoryFilter, onCategoryFilterChange, statusFilter, onStatusFilterChange,
  onEdit, onDuplicate, onPublish, onArchive, onDelete,
}) {
  const columns = [
    {
      key: "title", header: "Lesson Title",
      render: (row) => (
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${row.color}1A` }}>
            <BookOpen className="h-4 w-4" style={{ color: row.color }} />
          </span>
          <div>
            <Link href={`/youth-ministry/lessons/${row.id}`} className="font-medium text-ink hover:text-interactive-600 hover:underline">
              {row.title}
            </Link>
            <p className="text-xs text-ink-subtle">{row.bibleRef}</p>
          </div>
        </div>
      ),
    },
    { key: "category", header: "Category", render: (row) => <span className="text-ink-muted">{row.category}</span> },
    { key: "targetGroup", header: "Target Group", render: (row) => <span className="text-ink-muted">{row.targetGroup}</span> },
    {
      key: "date", header: "Date",
      render: (row) => (
        <div>
          <p className="text-ink">{formatDate(row.date)}</p>
          <p className="text-xs text-ink-subtle">{row.time}</p>
        </div>
      ),
    },
    {
      key: "status", header: "Status",
      render: (row) => <Badge variant={LSN_STATUS_VARIANT[row.status] ?? "default"}>{row.status}</Badge>,
    },
    { key: "createdBy", header: "Created By", render: (row) => <span className="text-ink">{row.createdBy}</span> },
    {
      key: "actions", header: "Actions", cellClassName: "text-right", className: "text-right",
      render: (row) => (
        <div className="flex items-center justify-end gap-1.5">
          <Link href={`/youth-ministry/lessons/${row.id}`} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`View ${row.title}`}>
            <Eye className="h-4 w-4" />
          </Link>
          <button type="button" onClick={() => onEdit?.(row)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label={`Edit ${row.title}`}>
            <Pencil className="h-4 w-4" />
          </button>
          <LessonRowActionsMenu lesson={row} onEdit={onEdit} onDuplicate={onDuplicate} onPublish={onPublish} onArchive={onArchive} onDelete={onDelete} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h3 className="text-base font-semibold text-ink">Lessons List</h3>
        <div className="flex items-center gap-2">
          <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Categories</option>
            {LSN_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
            <option>All Status</option>
            {LSN_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
          </select>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              value={search} onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search lessons..."
              className="h-9 w-44 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>
      <Table columns={columns} data={lessons} isLoading={isLoading} getRowId={(row) => row.id} className="rounded-none border-0 shadow-none" pagination={pagination} />
    </div>
  );
}
