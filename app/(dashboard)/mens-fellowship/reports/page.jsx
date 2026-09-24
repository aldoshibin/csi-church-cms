"use client";

import { Download, ChevronDown } from "lucide-react";

import { useFellowshipReports } from "@/hooks/useFellowshipReports";
import { Button } from "@/components/ui/Button";
import { FellowshipReportsStatsCards } from "@/components/mens-fellowship/reports/FellowshipReportsStatsCards";
import { ReportCategoryTabs } from "@/components/mens-fellowship/reports/ReportCategoryTabs";
import { FellowshipReportsTable } from "@/components/mens-fellowship/reports/FellowshipReportsTable";
import { ReportsOverviewCard } from "@/components/mens-fellowship/reports/ReportsOverviewCard";
import { RecentReportsCard } from "@/components/mens-fellowship/reports/RecentReportsCard";
import { FellowshipReportsQuickActions } from "@/components/mens-fellowship/reports/FellowshipReportsQuickActions";

export default function FellowshipReportsPage() {
  const {
    stats, reports, overview, recentReports, isLoading, activeCategory, setActiveCategory, totalCount,
  } = useFellowshipReports();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and analyze data across men&apos;s fellowship activities and meetings.</p>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
          Export
        </Button>
      </div>

      <FellowshipReportsStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-lg border border-border bg-white shadow-card">
            <div className="border-b border-border px-4 py-3">
              <h3 className="text-base font-semibold text-ink">Reports List</h3>
            </div>
            <ReportCategoryTabs active={activeCategory} onChange={setActiveCategory} />
            <FellowshipReportsTable
              reports={reports}
              isLoading={isLoading}
              pagination={{ page: 1, pageSize: 10, totalCount, onPageChange: () => {} }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <ReportsOverviewCard overview={overview} />
          <RecentReportsCard reports={recentReports} />
          <FellowshipReportsQuickActions />
        </div>
      </div>
    </div>
  );
}
