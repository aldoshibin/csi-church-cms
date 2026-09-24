"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useBurialRecords } from "@/hooks/useBurialRecords";
import { BurialRecordsTable } from "@/components/cemetery-management/burial-records/BurialRecordsTable";
import { BURIAL_STATUS_OPTIONS, SECTION_OPTIONS } from "@/lib/mock/vmCemeteryMockData";

export default function BurialRecordsPage() {
  const {
    records, totalCount, isLoading,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useBurialRecords();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Burial Records</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage all burial records for the cemetery.</p>
        </div>
        <Link href="/cemetery-management/burial-records/add">
          <Button leftIcon={<Plus className="h-4 w-4" />}>Add Burial Record</Button>
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
          <input
            value={search} onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or record number..."
            className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Sections</option>
          {SECTION_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
          <option>All Status</option>
          {BURIAL_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <BurialRecordsTable
        records={records} isLoading={isLoading}
        page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
      />
    </div>
  );
}
