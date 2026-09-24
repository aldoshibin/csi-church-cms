"use client";

import { Download, Search, Calendar, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCemeteryReports } from "@/hooks/useCemeteryReports";
import { ReportCard } from "@/components/cemetery-management/reports/ReportCard";
import { ReportsOverviewDonutCard } from "@/components/cemetery-management/reports/ReportsOverviewDonutCard";
import { FrequentlyUsedReportsCard } from "@/components/cemetery-management/reports/FrequentlyUsedReportsCard";
import { ReportsHelpCard } from "@/components/cemetery-management/reports/ReportsHelpCard";
import {
  CEMETERY_REPORT_CATEGORY_OPTIONS, CEMETERY_REPORT_TYPE_OPTIONS, CEMETERY_REPORT_STATUS_OPTIONS,
} from "@/lib/mock/vmCemeteryReportsMockData";

export default function CemeteryReportsPage() {
  const {
    reports, totalCount, donut, frequentlyUsed,
    search, setSearch, categoryFilter, setCategoryFilter, typeFilter, setTypeFilter,
    statusFilter, setStatusFilter, dateRange, setDateRange, clearFilters,
  } = useCemeteryReports();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">Generate and view detailed reports related to cemetery management.</p>
        </div>
        <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export All Reports</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reports..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Categories</option>
              {CEMETERY_REPORT_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Report Types</option>
              {CEMETERY_REPORT_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Status</option>
              {CEMETERY_REPORT_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={dateRange} onChange={(e) => setDateRange(e.target.value)}
                placeholder="Select Date Range"
                className="h-9 w-44 rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold text-ink">All Reports</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {reports.map((report) => <ReportCard key={report.key} report={report} />)}
            </div>
            {reports.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-subtle">No reports found.</p>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-ink-subtle">Showing 1 to {totalCount} of {totalCount} reports</span>
            <div className="flex items-center gap-1">
              <button type="button" disabled className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle opacity-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-interactive-500 text-sm font-medium text-white">1</span>
              <button type="button" disabled className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle opacity-50">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <ReportsOverviewDonutCard data={donut} />
          <FrequentlyUsedReportsCard reports={frequentlyUsed} />
          <ReportsHelpCard />
        </div>
      </div>
    </div>
  );
}
