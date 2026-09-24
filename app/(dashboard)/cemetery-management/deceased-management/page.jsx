"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Plus, ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDeceasedRecords } from "@/hooks/useDeceasedRecords";
import { useDeceasedDetail } from "@/hooks/useDeceasedDetail";
import { DeceasedTable } from "@/components/cemetery-management/deceased-management/DeceasedTable";
import { DeceasedDetailsModal } from "@/components/cemetery-management/deceased-management/DeceasedDetailsModal";
import { GenderDistributionDonutCard } from "@/components/cemetery-management/deceased-management/GenderDistributionDonutCard";
import { RecordsByYearChart } from "@/components/cemetery-management/deceased-management/RecordsByYearChart";
import { DeceasedQuickActions } from "@/components/cemetery-management/deceased-management/DeceasedQuickActions";
import { DeceasedHelpCard } from "@/components/cemetery-management/deceased-management/DeceasedHelpCard";
import { DECEASED_STATUS_OPTIONS, GENDER_OPTIONS } from "@/lib/mock/vmDeceasedMockData";
import { SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export default function DeceasedManagementPage() {
  const {
    records, totalCount, isLoading, donut, recordsByYear,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    genderFilter, setGenderFilter, clearFilters,
    page, setPage, pageSize,
  } = useDeceasedRecords();

  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { record, isLoading: isDetailLoading } = useDeceasedDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Deceased Management</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage deceased records and related information.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Report</Button>
          <Link href="/cemetery-management/deceased-management/add">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>
              Add Deceased
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
                placeholder="Search by name, record ID, burial ID..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Sections</option>
              {SECTION_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Status</option>
              {DECEASED_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Gender</option>
              {GENDER_OPTIONS.map((g) => <option key={g}>{g}</option>)}
            </select>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <DeceasedTable
            records={records} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <GenderDistributionDonutCard data={donut} />
          <RecordsByYearChart data={recordsByYear} />
          <DeceasedQuickActions />
          <DeceasedHelpCard />
        </div>
      </div>

      <DeceasedDetailsModal open={modalOpen} onOpenChange={setModalOpen} record={record} isLoading={isDetailLoading} />
    </div>
  );
}
