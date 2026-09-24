"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Download, FolderOpen, HardDrive, CalendarPlus, SlidersHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDocumentManagement } from "@/hooks/useDocumentManagement";
import { useDocumentManagementDetail } from "@/hooks/useDocumentManagementDetail";
import { DocumentStatCard } from "@/components/document-management/DocumentStatCard";
import { StorageOverviewCard } from "@/components/document-management/StorageOverviewCard";
import { DocumentCategoriesCard } from "@/components/document-management/DocumentCategoriesCard";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { DocumentsTable } from "@/components/document-management/DocumentsTable";
import { DocumentDetailsModal } from "@/components/document-management/DocumentDetailsModal";
import { DOCUMENT_MANAGEMENT_QUICK_ACTIONS, FOLDER_OPTIONS, TYPE_FILTER_OPTIONS } from "@/lib/mock/vmDocumentManagementMockData";

export function DocumentManagementView() {
  const router = useRouter();
  const {
    documents, totalCount, isLoading, stats, storageOverview, categories,
    tabs, activeTab, setActiveTab,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter, clearFilters,
    page, setPage, pageSize,
  } = useDocumentManagement();

  const [selectedId, setSelectedId] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const { document: doc, isLoading: isDetailLoading } = useDocumentManagementDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setModalOpen(true);
  };

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Document Management</h1>
          <p className="mt-1 text-sm text-ink-subtle">Store, organize and manage all church documents securely.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
          <Button variant="primary" leftIcon={<CalendarPlus className="h-4 w-4" />} onClick={() => router.push("/document-management/upload")}>
            Upload Document
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DocumentStatCard icon={FolderOpen} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Documents" value={stats.totalDocuments} sub="All Documents" />
        <DocumentStatCard icon={FolderOpen} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Folders" value={stats.folders} sub="Organized Folders" />
        <DocumentStatCard icon={HardDrive} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="File Size Used" value={stats.fileSizeUsedLabel} progressPct={stats.fileSizeUsedPct} />
        <DocumentStatCard icon={CalendarPlus} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Recently Added" value={stats.recentlyAdded} sub="In the last 7 days" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {tabs.map((t) => (
                <button
                  key={t} type="button" onClick={() => setActiveTab(t)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === t ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents by name, type or keyword..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={folderFilter} onChange={(e) => setFolderFilter(e.target.value)} className={selectClass}>
              <option>All Folders</option>
              {FOLDER_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectClass}>
              <option>All Types</option>
              {TYPE_FILTER_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <Button type="button" variant="ghost" onClick={clearFilters}>Clear</Button>
          </div>

          <DocumentsTable
            documents={documents} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <StorageOverviewCard data={storageOverview} />
          <DocumentCategoriesCard categories={categories} />
          <QuickActionsCard actions={DOCUMENT_MANAGEMENT_QUICK_ACTIONS} />
        </div>
      </div>

      <DocumentDetailsModal open={modalOpen} onOpenChange={setModalOpen} document={doc} isLoading={isDetailLoading} />
    </div>
  );
}
