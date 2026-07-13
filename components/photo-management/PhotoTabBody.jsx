"use client";

import { Grid3x3, List, Eye, Pencil, Upload, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoAvatar } from "./PhotoAvatar";

function PageNumbers({ page, totalPages, onPageChange }) {
  const pages = [];
  const windowSize = 5;
  let start = Math.max(1, page - Math.floor(windowSize / 2));
  let end = Math.min(totalPages, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex items-center gap-1.5">
      <button onClick={() => onPageChange(Math.max(1, page - 1))} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted">
        <ChevronLeft className="h-4 w-4" />
      </button>
      {start > 1 && <span className="px-1 text-sm text-ink-subtle">...</span>}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${p === page ? "bg-interactive-500 text-white" : "border border-border text-ink hover:bg-surface-muted"}`}
        >
          {p}
        </button>
      ))}
      {end < totalPages && <span className="px-1 text-sm text-ink-subtle">...</span>}
      {end < totalPages && (
        <button onClick={() => onPageChange(totalPages)} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-sm font-medium text-ink hover:bg-surface-muted">
          {totalPages}
        </button>
      )}
      <button onClick={() => onPageChange(Math.min(totalPages, page + 1))} className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function PhotoTabBody({
  title, members, totalCount, page, pageSize, onPageChange,
  viewMode, setViewMode, sortOrder, setSortOrder,
  onView, onEdit, onUpload, onRemove,
}) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const shownStart = members.length ? (page - 1) * pageSize + 1 : 0;
  const shownEnd = (page - 1) * pageSize + members.length;

  return (
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <div className="flex items-center gap-2">
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="h-9 rounded-md border border-border px-3 text-sm text-ink">
            <option value="name_asc">Name (A to Z)</option>
            <option value="name_desc">Name (Z to A)</option>
          </select>
          <button onClick={() => setViewMode("grid")} className={`flex h-9 w-9 items-center justify-center rounded-md border ${viewMode === "grid" ? "border-interactive-500 bg-interactive-50 text-interactive-500" : "border-border text-ink-muted"}`}>
            <Grid3x3 className="h-4 w-4" />
          </button>
          <button onClick={() => setViewMode("list")} className={`flex h-9 w-9 items-center justify-center rounded-md border ${viewMode === "list" ? "border-interactive-500 bg-interactive-50 text-interactive-500" : "border-border text-ink-muted"}`}>
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {members.length === 0 ? (
        <p className="py-10 text-center text-sm text-ink-subtle">No members found.</p>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {members.map((m) => (
            <div key={m.id} className="rounded-lg border border-border p-4">
              <div className="mb-3 flex items-center gap-3">
                <PhotoAvatar member={m} />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-interactive-600">{m.full_name}</p>
                  <p className="truncate text-xs text-ink-subtle">{m.membership_number}</p>
                  <p className="text-xs text-ink-subtle">{m.ministry_group}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => onView(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="View photo"><Eye className="h-4 w-4" /></button>
                <button onClick={() => onEdit(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="Edit member"><Pencil className="h-4 w-4" /></button>
                <button onClick={() => onUpload(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="Upload / replace photo"><Upload className="h-4 w-4" /></button>
                <button onClick={() => onRemove(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted" aria-label="Remove photo"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="divide-y divide-border rounded-lg border border-border">
          {members.map((m) => (
            <div key={m.id} className="flex items-center justify-between gap-4 p-3">
              <div className="flex min-w-0 items-center gap-3">
                <PhotoAvatar member={m} />
                <p className="font-semibold text-interactive-600">{m.full_name}</p>
              </div>
              <p className="hidden flex-1 text-sm text-ink sm:block">{m.membership_number}</p>
              <p className="hidden flex-1 text-sm text-ink-subtle md:block">{m.ministry_group}</p>
              <div className="flex shrink-0 items-center gap-1.5">
                <button onClick={() => onView(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="View photo"><Eye className="h-4 w-4" /></button>
                <button onClick={() => onEdit(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="Edit member"><Pencil className="h-4 w-4" /></button>
                <button onClick={() => onUpload(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-success-600 hover:bg-surface-muted" aria-label="Upload / replace photo"><Upload className="h-4 w-4" /></button>
                <button onClick={() => onRemove(m)} className="flex h-8 w-8 items-center justify-center rounded-md text-danger-500 hover:bg-surface-muted" aria-label="Remove photo"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-subtle">Showing {shownStart} to {shownEnd} of {totalCount.toLocaleString()} entries</p>
        <PageNumbers page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
    </div>
  );
}
