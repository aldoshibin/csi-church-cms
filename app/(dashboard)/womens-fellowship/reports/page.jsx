"use client";

import { Calendar, Download, ChevronDown } from "lucide-react";

import { useFellowshipReports } from "@/hooks/useFellowshipReports";
import { Button } from "@/components/ui/Button";
import { ReportCategoryCards } from "@/components/womens-fellowship/reports/ReportCategoryCards";
import { WfReportsStatsCards } from "@/components/womens-fellowship/reports/WfReportsStatsCards";
import { AttendanceOverviewReportsCard } from "@/components/womens-fellowship/reports/AttendanceOverviewReportsCard";
import { OfferingSummaryCard } from "@/components/womens-fellowship/reports/OfferingSummaryCard";
import { RecentReportsTable } from "@/components/womens-fellowship/reports/RecentReportsTable";
import { ReportsOverviewPanel, ReportsQuickActionsPanel, ReportTipsPanel } from "@/components/womens-fellowship/reports/ReportsSidePanels";

export default function WomensFellowshipReportsPage() {
  const {
    stats, attendanceOverview, attendanceSummary, offeringSummary, recentReports, reportsOverview, dateRange,
  } = useFellowshipReports();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and analyze church activities, attendance and membership reports.</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {dateRange} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <Button type="button" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <ReportCategoryCards />

      <WfReportsStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AttendanceOverviewReportsCard data={attendanceOverview} summary={attendanceSummary} />
        </div>
        <OfferingSummaryCard total={offeringSummary.total} delta={offeringSummary.delta} breakdown={offeringSummary.breakdown} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentReportsTable reports={recentReports} />
        </div>

        <div className="flex flex-col gap-5">
          <ReportsOverviewPanel overview={reportsOverview} />
          <ReportsQuickActionsPanel />
          <ReportTipsPanel />
        </div>
      </div>
    </div>
  );
}
