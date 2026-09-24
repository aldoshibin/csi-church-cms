"use client";

import * as React from "react";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useStarredDocuments } from "@/hooks/useStarredDocuments";
import { useStarredDocumentDetail } from "@/hooks/useStarredDocumentDetail";
import { DocumentActivityTable } from "@/components/document-management/DocumentActivityTable";
import { DocumentActivityDetailsModal } from "@/components/document-management/DocumentActivityDetailsModal";
import { DocumentActivityStatCard } from "@/components/document-management/DocumentActivityStatCard";
import { StarredDocumentsFiltersCard } from "@/components/document-management/StarredDocumentsFiltersCard";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { StorageOverviewCard } from "@/components/document-management/StorageOverviewCard";
import { STARRED_TYPE_FILTER_OPTIONS } from "@/lib/mock/vmStarredDocumentsMockData";
import { ALL_DOCUMENTS_QUICK_ACTIONS, FOLDER_OPTIONS, TABLE_CATEGORY_OPTIONS } from "@/lib/mock/vmDocumentManagementMockData";

export function StarredDocumentsView() {
  const {
    documents, totalCount, isLoading, stats, storageOverview,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, starredByFilter, setStarredByFilter,
    resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize,
  } = useStarredDocuments();

  const [selectedId, setSelectedId] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const { document: doc, isLoading: isDetailLoading } = useStarredDocumentDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setModalOpen(true);
  };

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Starred Documents</h1>
        <p className="mt-1 text-sm text-ink-subtle">Documents you have starred for quick access.</p>
      </div>

      <DocumentActivityStatCard
        icon={Star} iconBg="bg-[#FEF3C7]" iconColor="text-[#D97706]"
        value={stats.total} label={stats.label} sub={stats.sub}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search starred documents..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={folderFilter} onChange={(e) => setFolderFilter(e.target.value)} className={selectClass}>
              <option>All Folders</option>
              {FOLDER_OPTIONS?.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectClass}>
              <option>All Types</option>
              {STARRED_TYPE_FILTER_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className={selectClass}>
              <option>All Categories</option>
              {TABLE_CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <Button type="button" variant="ghost" onClick={clearFilters}>Clear</Button>
          </div>

          <DocumentActivityTable
            documents={documents} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView} onLabel="Starred On" byLabel="Starred By"
          />
        </div>

        <div className="flex flex-col gap-6">
          <StarredDocumentsFiltersCard
            dateRange={dateRange} setDateRange={setDateRange}
            starredByFilter={starredByFilter} setStarredByFilter={setStarredByFilter}
            folderFilter={folderFilter} setFolderFilter={setFolderFilter}
            typeFilter={typeFilter} setTypeFilter={setTypeFilter}
            onApply={applyAdvancedFilters} onReset={resetAdvancedFilters}
          />
          <QuickActionsCard actions={ALL_DOCUMENTS_QUICK_ACTIONS} />
          <StorageOverviewCard data={storageOverview} />
        </div>
      </div>

      <DocumentActivityDetailsModal open={modalOpen} onOpenChange={setModalOpen} document={doc} isLoading={isDetailLoading} />
    </div>
  );
}
