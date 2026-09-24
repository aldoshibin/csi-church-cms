"use client";

import { Download, ChevronDown } from "lucide-react";

import { useVmReports } from "@/hooks/useVmReports";
import { Button } from "@/components/ui/Button";
import { ReportsOverviewRow } from "@/components/volunteer-management/reports/ReportsOverviewRow";
import { ReportsFiltersBar } from "@/components/volunteer-management/reports/ReportsFiltersBar";
import { FrequentlyUsedReportsGrid } from "@/components/volunteer-management/reports/FrequentlyUsedReportsGrid";
import { ReportSummaryTable } from "@/components/volunteer-management/reports/ReportSummaryTable";
import { AttendanceTrendCard } from "@/components/volunteer-management/reports/AttendanceTrendCard";
import { ReportsQuickActions } from "@/components/volunteer-management/reports/ReportsQuickActions";
import { RecentReportsCard } from "@/components/volunteer-management/reports/RecentReportsCard";

export default function VolunteerManagementReportsPage() {
  const {
    reports, totalCount, isLoading, stats, frequentlyUsed, trend, recent,
    dateRange, setDateRange, ministryFilter, setMinistryFilter, serviceFilter, setServiceFilter,
    page, setPage, pageSize, ministryOptions, serviceOptions,
  } = useVmReports();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and generate reports to analyze and track church data and activities.</p>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
          Export All Reports
        </Button>
      </div>

      <ReportsFiltersBar
        dateRange={dateRange} onDateRangeChange={setDateRange}
        ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
        serviceFilter={serviceFilter} onServiceFilterChange={setServiceFilter}
        ministryOptions={ministryOptions} serviceOptions={serviceOptions}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <ReportsOverviewRow stats={stats} />
          <FrequentlyUsedReportsGrid reports={frequentlyUsed} onView={(r) => console.log("Open report", r.key)} />
          <ReportSummaryTable
            reports={reports} isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onDownload={(row) => console.log("Download", row.id)}
            onView={(row) => console.log("View", row.id)}
            onShare={(row) => console.log("Share", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AttendanceTrendCard trend={trend} />
          <ReportsQuickActions
            onSchedule={() => console.log("Schedule report")}
            onExport={() => console.log("Export data")}
            onSettings={() => console.log("Report settings")}
          />
          <RecentReportsCard reports={recent} />
        </div>
      </div>
    </div>
  );
}
