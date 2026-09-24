"use client";

import * as React from "react";
import Link from "next/link";
import { Search, List, LayoutGrid, SlidersHorizontal, Folder, FileText, HardDrive, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDocumentFolders } from "@/hooks/useDocumentFolders";
import { useFolderDetail } from "@/hooks/useFolderDetail";
import { FoldersTable } from "@/components/document-management/FoldersTable";
import { FolderDetailsModal } from "@/components/document-management/FolderDetailsModal";
import { FoldersFiltersCard } from "@/components/document-management/FoldersFiltersCard";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { SimpleStorageOverviewCard } from "@/components/document-management/SimpleStorageOverviewCard";
import { DocumentStatCard } from "@/components/document-management/DocumentStatCard";
import { FOLDERS_QUICK_ACTIONS } from "@/lib/mock/vmDocumentFoldersMockData";

export function FoldersView() {
  const {
    folders, totalCount, isLoading, stats, storageOverview,
    search, setSearch, view, setView,
    createdByFilter, setCreatedByFilter, folderTypeFilter, setFolderTypeFilter,
    createdOnRange, setCreatedOnRange, resetFilters, applyFilters,
    page, setPage, pageSize,
  } = useDocumentFolders();

  const [selectedId, setSelectedId] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const { folder, isLoading: isDetailLoading } = useFolderDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Folders</h1>
          <p className="mt-1 text-sm text-ink-subtle">Organize and manage your documents with folders.</p>
        </div>
        <Link href="/document-management/folders/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>New Folder</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DocumentStatCard icon={Folder} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Folders" value={stats.totalFolders} sub="All folders" />
        <DocumentStatCard icon={FileText} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Documents" value={stats.totalDocuments} sub="Documents in folders" />
        <DocumentStatCard icon={HardDrive} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Size" value={stats.totalSizeLabel} sub="Folder storage used" />
        <DocumentStatCard icon={Clock} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Recently Added" value={stats.recentlyAdded} sub="In the last 7 days" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search folders..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <div className="flex items-center gap-1 rounded-md border border-border bg-white p-1">
              <button
                type="button" onClick={() => setView("list")} aria-label="List view"
                className={`flex h-8 w-8 items-center justify-center rounded ${view === "list" ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"}`}
              >
                <List className="h-4 w-4" />
              </button>
              <button
                type="button" onClick={() => setView("grid")} aria-label="Grid view"
                className={`flex h-8 w-8 items-center justify-center rounded ${view === "grid" ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
          </div>

          <FoldersTable
            folders={folders} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FoldersFiltersCard
            createdByFilter={createdByFilter} setCreatedByFilter={setCreatedByFilter}
            folderTypeFilter={folderTypeFilter} setFolderTypeFilter={setFolderTypeFilter}
            createdOnRange={createdOnRange} setCreatedOnRange={setCreatedOnRange}
            onApply={applyFilters} onReset={resetFilters}
          />
          <QuickActionsCard actions={FOLDERS_QUICK_ACTIONS} />
          <SimpleStorageOverviewCard data={storageOverview} />
        </div>
      </div>

      <FolderDetailsModal open={modalOpen} onOpenChange={setModalOpen} folder={folder} isLoading={isDetailLoading} />
    </div>
  );
}
