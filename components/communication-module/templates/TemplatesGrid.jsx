"use client";

import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { TemplateCard } from "./TemplateCard";
import {
  TEMPLATE_CATEGORY_OPTIONS, TEMPLATE_STATUS_OPTIONS, TEMPLATE_TYPE_OPTIONS,
} from "@/lib/mock/vmTemplatesMockData";

export function TemplatesGrid({
  templates, isLoading,
  tabs, activeTab, onTabChange,
  search, onSearchChange, categoryFilter, onCategoryFilterChange, statusFilter, onStatusFilterChange,
  page, pageSize, totalCount, onPageChange, onPageSizeChange,
  onEdit, onDuplicate, onPreview, onDelete,
}) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const startItem = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab} type="button" onClick={() => onTabChange(tab)}
            className={cn(
              "border-b-2 pb-3 text-sm font-medium transition-colors",
              activeTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search templates..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Types</option>
          {TEMPLATE_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select value={categoryFilter} onChange={(e) => onCategoryFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Categories</option>
          {TEMPLATE_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {TEMPLATE_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
      </div>

      <p className="text-sm text-ink-subtle">
        Showing <span className="font-medium text-ink">{startItem}</span> to <span className="font-medium text-ink">{endItem}</span> of{" "}
        <span className="font-medium text-ink">{totalCount}</span> templates
      </p>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-56 animate-pulse rounded-lg border border-border bg-surface-muted" />
          ))}
        </div>
      ) : templates.length === 0 ? (
        <div className="rounded-lg border border-border bg-white p-16 text-center text-sm text-ink-subtle">No templates found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {templates.map((t) => (
            <TemplateCard key={t.id} template={t} onEdit={onEdit} onDuplicate={onDuplicate} onPreview={onPreview} onDelete={onDelete} />
          ))}
        </div>
      )}

      <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-ink-muted">
          Show
          <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))} className="h-8 rounded-md border border-border bg-white px-2 text-sm">
            {[12, 24, 48].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          per page
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => onPageChange(page - 1)} disabled={page <= 1} leftIcon={<ChevronLeft className="h-4 w-4" />}>Previous</Button>
          {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1).map((p) => (
            <button
              key={p} type="button" onClick={() => onPageChange(p)}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium",
                page === p ? "bg-success-600 text-white" : "border border-border text-ink-muted hover:bg-surface-canvas"
              )}
            >
              {p}
            </button>
          ))}
          <Button variant="secondary" size="sm" onClick={() => onPageChange(page + 1)} disabled={page >= totalPages} rightIcon={<ChevronRight className="h-4 w-4" />}>Next</Button>
        </div>
      </div>
    </div>
  );
}
