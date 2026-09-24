"use client";

import { Calendar, RefreshCcw, Search, Download, SlidersHorizontal, FileText, Folder, UploadCloud, Eye, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDocumentReports } from "@/hooks/useDocumentReports";
import { DocumentReportsStatCard } from "@/components/document-management/DocumentReportsStatCard";
import { DocumentsByCategoryChart } from "@/components/document-management/DocumentsByCategoryChart";
import { DocumentActivityChart } from "@/components/document-management/DocumentActivityChart";
import { TopCategoriesCard } from "@/components/document-management/TopCategoriesCard";
import { CategoryWiseReportTable } from "@/components/document-management/CategoryWiseReportTable";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { InfoNoteCard } from "@/components/document-management/InfoNoteCard";
import { REPORTS_DATE_RANGE_OPTIONS, REPORTS_CATEGORY_OPTIONS, REPORTS_TYPE_OPTIONS, REPORTS_QUICK_ACTIONS } from "@/lib/mock/vmDocumentReportsMockData";

export function DocumentReportsView() {
  const {
    stats, byCategory, activityTrend, topCategories, categoryWise, categoryWiseTotalCount, isLoading, generateReport,
    dateRange, setDateRange, categoryFilter, setCategoryFilter, typeFilter, setTypeFilter,
    search, setSearch, page, setPage, pageSize,
  } = useDocumentReports();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-ink">Document Reports</h1>
        <p className="mt-1 text-sm text-ink-subtle">View and analyze document statistics, trends and activity reports.</p>
      </div>

      <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-4 shadow-card sm:flex-row sm:items-end">
        <div className="flex-1">
          <label className="mb-1.5 block text-sm font-medium text-ink">Date Range</label>
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className={`${selectClass} w-full pl-9`}>
              {REPORTS_DATE_RANGE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="flex-1">
          <label className="mb-1.5 block text-sm font-medium text-ink">Category</label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className={`${selectClass} w-full`}>
            <option>All Categories</option>
            {REPORTS_CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex-1">
          <label className="mb-1.5 block text-sm font-medium text-ink">Type</label>
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={`${selectClass} w-full`}>
            <option>All Types</option>
            {REPORTS_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <Button type="button" variant="primary" leftIcon={<RefreshCcw className="h-4 w-4" />} onClick={generateReport} isLoading={isLoading}>
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DocumentReportsStatCard
          icon={FileText} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]"
          value={stats.totalDocuments.value} label="Total Documents"
          trendPct={stats.totalDocuments.trendPct} trendUp={stats.totalDocuments.trendUp} sub={stats.totalDocuments.sub}
        />
        <DocumentReportsStatCard
          icon={Folder} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]"
          value={stats.totalCategories.value} label="Total Categories"
          trendPct={stats.totalCategories.trendPct} trendUp={stats.totalCategories.trendUp} sub={stats.totalCategories.sub}
        />
        <DocumentReportsStatCard
          icon={UploadCloud} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]"
          value={stats.totalUploads.value} label="Total Uploads"
          trendPct={stats.totalUploads.trendPct} trendUp={stats.totalUploads.trendUp} sub={stats.totalUploads.sub}
        />
        <DocumentReportsStatCard
          icon={Eye} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]"
          value={stats.totalDownloads.value} label="Total Downloads"
          trendPct={stats.totalDownloads.trendPct} trendUp={stats.totalDownloads.trendUp} sub={stats.totalDownloads.sub}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <DocumentsByCategoryChart data={byCategory} />
        <DocumentActivityChart data={activityTrend} />
        <TopCategoriesCard categories={topCategories} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-5 shadow-card">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-semibold text-ink">Category-wise Document Report</h3>
              <div className="flex items-center gap-2">
                <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
                <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
              </div>
            </div>
            <div className="relative mt-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="h-10 w-full max-w-sm rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
          </div>

          <CategoryWiseReportTable
            rows={categoryWise} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={categoryWiseTotalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <InfoNoteCard icon={Info} title="Report Summary">
            The document report provides a detailed view of your document management activity including category-wise distribution, uploads, downloads and recent trends.
          </InfoNoteCard>
          <QuickActionsCard actions={REPORTS_QUICK_ACTIONS} />
          <InfoNoteCard icon={Info} title="Note">
            Report data is updated in real-time and may vary slightly based on system load and user activity.
          </InfoNoteCard>
        </div>
      </div>
    </div>
  );
}
