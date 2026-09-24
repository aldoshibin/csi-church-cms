"use client";

import { Search, SlidersHorizontal, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTrashDocuments } from "@/hooks/useTrashDocuments";
import { TrashTable } from "@/components/document-management/TrashTable";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { SimpleStorageOverviewCard } from "@/components/document-management/SimpleStorageOverviewCard";
import { InfoNoteCard } from "@/components/document-management/InfoNoteCard";

const TRASH_QUICK_ACTIONS = [
  { key: "empty", label: "Empty Trash", description: "Permanently delete all items", icon: "Trash2", href: "/document-management/trash" },
];

export function TrashView() {
  const {
    items, totalCount, isLoading, storageOverview, typeOptions, folderOptions, categoryOptions,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    page, setPage, pageSize,
  } = useTrashDocuments();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Trash</h1>
        <p className="mt-1 text-sm text-ink-subtle">Documents you've deleted. They will be permanently deleted after the retention period.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search trashed documents..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={folderFilter} onChange={(e) => setFolderFilter(e.target.value)} className={selectClass}>
              <option>All Folders</option>
              {folderOptions.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectClass}>
              <option>All Types</option>
              {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className={selectClass}>
              <option>All Categories</option>
              {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <Button type="button" variant="ghost" onClick={clearFilters}>Clear</Button>
          </div>

          <TrashTable
            items={items} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <InfoNoteCard icon={Info} title="Trash Information">
            Items in trash will be automatically deleted after 30 days.
          </InfoNoteCard>
          <QuickActionsCard actions={TRASH_QUICK_ACTIONS} />
          <SimpleStorageOverviewCard data={storageOverview} totalLabelText="Total Shared Storage:" />
        </div>
      </div>
    </div>
  );
}
