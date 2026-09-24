"use client";

import { Calendar, Download, ChevronDown } from "lucide-react";

import { useChoirWorshipReports } from "@/hooks/useChoirWorshipReports";
import { Button } from "@/components/ui/Button";
import { CwReportsStatsCards } from "@/components/choir-worship/reports/CwReportsStatsCards";
import { CwReportsFiltersBar } from "@/components/choir-worship/reports/CwReportsFiltersBar";
import { CenteredDonutCard } from "@/components/choir-worship/reports/CenteredDonutCard";
import { ServicesOverviewCard } from "@/components/choir-worship/reports/ServicesOverviewCard";
import { RecentSetlistsCard } from "@/components/choir-worship/reports/RecentSetlistsCard";
import { ReportShortcutsCard } from "@/components/choir-worship/reports/ReportShortcutsCard";
import { CW_REPORTS_DATE_RANGE_LABEL, REPORT_SHORTCUTS_MOCK } from "@/lib/mock/choirWorshipReportsMockData";

export default function ChoirWorshipReportsPage() {
  const {
    stats, songsByCategory, setlistsByServiceType, servicesOverview, recentSetlists, isLoading,
    reportType, setReportType, dateRange, setDateRange, ministry, setMinistry, serviceType, setServiceType,
    servicesOverviewRange, setServicesOverviewRange,
    applyFilters, resetFilters,
  } = useChoirWorshipReports();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and analyze choir, worship and setlist reports.</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {CW_REPORTS_DATE_RANGE_LABEL}
          </button>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export Report
          </Button>
        </div>
      </div>

      <CwReportsStatsCards stats={stats} />

      <CwReportsFiltersBar
        reportType={reportType} onReportTypeChange={setReportType}
        dateRange={dateRange} onDateRangeChange={setDateRange}
        ministry={ministry} onMinistryChange={setMinistry}
        serviceType={serviceType} onServiceTypeChange={setServiceType}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <CenteredDonutCard title="Songs by Category" total={songsByCategory.total} totalLabel="Total Songs" breakdown={songsByCategory.breakdown} />
        <CenteredDonutCard title="Setlists by Service Type" total={setlistsByServiceType.total} totalLabel="Total Setlists" breakdown={setlistsByServiceType.breakdown} />
        <ServicesOverviewCard data={servicesOverview} range={servicesOverviewRange} onRangeChange={setServicesOverviewRange} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentSetlistsCard setlists={recentSetlists} />
        </div>
        <div>
          <ReportShortcutsCard shortcuts={REPORT_SHORTCUTS_MOCK} />
        </div>
      </div>
    </div>
  );
}
