"use client";

import { Download, ChevronDown } from "lucide-react";

import { useReports } from "@/hooks/useReports";
import { Button } from "@/components/ui/Button";
import { ReportsStatsCards } from "@/components/sunday-school/reports/ReportsStatsCards";
import { ReportsFilters } from "@/components/sunday-school/reports/ReportsFilters";
import { ReportsTable } from "@/components/sunday-school/reports/ReportsTable";
import { ReportCategoriesRow } from "@/components/sunday-school/reports/ReportCategoriesRow";
import { MemberOverviewCard } from "@/components/sunday-school/reports/MemberOverviewCard";
import { GivingOverviewCard } from "@/components/sunday-school/reports/GivingOverviewCard";
import { ReportsQuickActions } from "@/components/sunday-school/reports/ReportsQuickActions";

export default function ReportsPage() {
  const {
    stats, reports, totalCount, isLoading, categoriesSummary, memberOverview, givingOverview,
    search, setSearch, categoryFilter, setCategoryFilter, dateRange, setDateRange,
    page, setPage, pageSize,
  } = useReports();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and analyze church data through detailed reports.</p>
        </div>
        <Button type="button" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
          Export Report
        </Button>
      </div>

      <ReportsStatsCards stats={stats} />

      <ReportsFilters
        categoryFilter={categoryFilter} onCategoryChange={setCategoryFilter}
        dateRange={dateRange} onDateRangeChange={setDateRange}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ReportsTable
            reports={reports}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            onView={(row) => console.log("View report", row.id)}
            onDownload={(row) => console.log("Download report", row.id)}
          />

          <div className="mt-5">
            <ReportCategoriesRow categories={categoriesSummary} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <MemberOverviewCard total={memberOverview.total} breakdown={memberOverview.breakdown} />
          <GivingOverviewCard totalGiving={givingOverview.totalGiving} averagePerDay={givingOverview.averagePerDay} trend={givingOverview.trend} />
          <ReportsQuickActions />
        </div>
      </div>
    </div>
  );
}
