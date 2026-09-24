"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  BarChart3, Home, Calendar, Download, ChevronDown, HandCoins, User, Briefcase, HeartHandshake, Wallet, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useReportsAnalytics } from "@/hooks/useReportsAnalytics";
import { AnalyticsStatCard } from "@/components/reports-analytics/AnalyticsStatCard";
import { DonationsOverTimeChart } from "@/components/reports-analytics/DonationsOverTimeChart";
import { AnalyticsDonutCard } from "@/components/reports-analytics/AnalyticsDonutCard";
import { MissionTripsOverviewCard } from "@/components/reports-analytics/MissionTripsOverviewCard";
import { OutreachProgramsSummaryCard } from "@/components/reports-analytics/OutreachProgramsSummaryCard";
import { CemeteryOverviewCard } from "@/components/reports-analytics/CemeteryOverviewCard";
import { YearlyComparisonCard } from "@/components/reports-analytics/YearlyComparisonCard";
import { RecentReportsCard } from "@/components/reports-analytics/RecentReportsCard";
import { formatCurrency } from "@/lib/utils";
import { REPORTS_ANALYTICS_DATE_RANGE_LABEL } from "@/lib/mock/reportsAnalyticsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ReportsAnalyticsView() {
  const {
    stats, donationsOverTime, donationsByFund, donationsByPaymentMethod,
    missionTripsOverview, outreachProgramsSummary, cemeteryOverview,
    yearlyComparison, recentReports,
  } = useReportsAnalytics();

  return (
    <div className="flex flex-col gap-6">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Reports &amp; Analytics</span>
      </nav>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Reports &amp; Analytics</h1>
            <p className="mt-1 text-sm text-ink-subtle">Comprehensive insights and analytics on mission, outreach and donations.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Calendar className="h-4 w-4" />}>{REPORTS_ANALYTICS_DATE_RANGE_LABEL}</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="primary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4" />}>Export Report</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Export as PDF</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export as Excel</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <AnalyticsStatCard icon={HandCoins} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Donations" value={stats.totalDonations.value} trend={stats.totalDonations.trend} />
        <AnalyticsStatCard icon={User} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Donors" value={stats.totalDonors.value} trend={stats.totalDonors.trend} />
        <AnalyticsStatCard icon={Briefcase} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Mission Trips" value={stats.missionTrips.value} trend={stats.missionTrips.trend} />
        <AnalyticsStatCard icon={Heart} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Participants" value={stats.participants.value} trend={stats.participants.trend} />
        <AnalyticsStatCard icon={HeartHandshake} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Outreach Programs" value={stats.outreachPrograms.value} trend={stats.outreachPrograms.trend} />
        <AnalyticsStatCard icon={Wallet} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Expenses" value={stats.totalExpenses.value} trend={stats.totalExpenses.trend} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DonationsOverTimeChart data={donationsOverTime} />
            <AnalyticsDonutCard data={donationsByFund} title="Donations by Fund" totalLabel="Total" formatValue={(v) => formatCurrency(v)} />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <MissionTripsOverviewCard data={missionTripsOverview} />
            <OutreachProgramsSummaryCard data={outreachProgramsSummary} />
          </div>

          <CemeteryOverviewCard data={cemeteryOverview} />
        </div>

        <div className="flex flex-col gap-6">
          <AnalyticsDonutCard data={donationsByPaymentMethod} title="Donations by Payment Method" totalLabel="Total" formatValue={(v) => formatCurrency(v)} />
          <YearlyComparisonCard rows={yearlyComparison} />
          <RecentReportsCard reports={recentReports} />
        </div>
      </div>
    </div>
  );
}
