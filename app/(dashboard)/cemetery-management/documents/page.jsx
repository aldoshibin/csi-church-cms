"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Plus, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCemeteryDocuments } from "@/hooks/useCemeteryDocuments";
import { useDocumentDetail } from "@/hooks/useDocumentDetail";
import { DocumentsTable } from "@/components/cemetery-management/documents/DocumentsTable";
import { DocumentDetailsModal } from "@/components/cemetery-management/documents/DocumentDetailsModal";
import { StorageOverviewCard } from "@/components/cemetery-management/documents/StorageOverviewCard";
import { DocumentSummaryCard } from "@/components/cemetery-management/documents/DocumentSummaryCard";
import { DocumentsQuickActionsCard } from "@/components/cemetery-management/documents/DocumentsQuickActionsCard";
import { DocumentsHelpCard } from "@/components/cemetery-management/documents/DocumentsHelpCard";
import { DOCUMENT_TYPE_OPTIONS, RELATED_TO_OPTIONS, UPLOADED_BY_OPTIONS } from "@/lib/mock/vmCemeteryDocumentsMockData";

export default function DocumentsPage() {
  const {
    documents, totalCount, isLoading, storage, summary,
    search, setSearch, typeFilter, setTypeFilter, relatedToFilter, setRelatedToFilter,
    uploadedByFilter, setUploadedByFilter, clearFilters,
    page, setPage, pageSize,
  } = useCemeteryDocuments();

  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { document: doc, isLoading: isDetailLoading } = useDocumentDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Documents</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage all cemetery related documents in one place.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
          <Link href="/cemetery-management/documents/upload">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
              Upload Document
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by document name, type, or description..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Document Types</option>
              {DOCUMENT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={relatedToFilter} onChange={(e) => setRelatedToFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Related To</option>
              {RELATED_TO_OPTIONS.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select value={uploadedByFilter} onChange={(e) => setUploadedByFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Uploaded By</option>
              {UPLOADED_BY_OPTIONS.map((u) => <option key={u}>{u}</option>)}
            </select>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <DocumentsTable
            documents={documents} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <StorageOverviewCard data={storage} />
          <DocumentSummaryCard data={summary} />
          <DocumentsQuickActionsCard />
          <DocumentsHelpCard />
        </div>
      </div>

      <DocumentDetailsModal open={modalOpen} onOpenChange={setModalOpen} document={doc} isLoading={isDetailLoading} />
    </div>
  );
}
