"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  FOLDER_CREATED_BY_FILTER_OPTIONS, FOLDER_TYPE_FILTER_OPTIONS,
} from "@/lib/mock/vmDocumentFoldersMockData";

export function FoldersFiltersCard({
  createdByFilter, setCreatedByFilter, folderTypeFilter, setFolderTypeFilter,
  createdOnRange, setCreatedOnRange, onApply, onReset,
}) {
  const selectClass =
    "h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";
  const labelClass = "mb-1.5 block text-sm font-medium text-ink";

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Filters</h3>

      <div className="mt-4">
        <label className={labelClass}>Created By</label>
        <select value={createdByFilter} onChange={(e) => setCreatedByFilter(e.target.value)} className={selectClass}>
          <option>All Users</option>
          {FOLDER_CREATED_BY_FILTER_OPTIONS.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Folder Type</label>
        <select value={folderTypeFilter} onChange={(e) => setFolderTypeFilter(e.target.value)} className={selectClass}>
          <option>All Types</option>
          {FOLDER_TYPE_FILTER_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Created On</label>
        <div className="relative">
          <input
            value={createdOnRange} onChange={(e) => setCreatedOnRange(e.target.value)}
            placeholder="Select date range"
            className="h-10 w-full rounded-md border border-border bg-white px-3 pr-9 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
          <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <Button type="button" variant="primary" className="flex-1" onClick={onApply}>Apply Filters</Button>
        <Button type="button" variant="secondary" className="flex-1" onClick={onReset}>Reset</Button>
      </div>
    </div>
  );
}
