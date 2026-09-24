"use client";

import { BarChart3, HandCoins, Users2, Plane, HeartHandshake, UserCheck, Wallet, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMissionReports } from "@/hooks/useMissionReports";
import { MissionStatCard } from "@/components/mission-evangelism/MissionStatCard";
import { OutreachOverviewCard } from "@/components/mission-evangelism/OutreachOverviewCard";
import { DonationsByMonthChart } from "@/components/mission-evangelism/DonationsByMonthChart";
import { ReportCategoriesCard } from "@/components/mission-evangelism/ReportCategoriesCard";
import { PopularReportsTable } from "@/components/mission-evangelism/PopularReportsTable";
import { RecentlyGeneratedReportsCard } from "@/components/mission-evangelism/RecentlyGeneratedReportsCard";
import { formatCurrency } from "@/lib/utils";

export function ReportsView() {
  const { stats, byFund, overTime, categories, popularReports, recentlyGenerated, isLoading } = useMissionReports();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Reports</h1>
            <p className="mt-1 text-sm text-ink-subtle">View and analyze mission, outreach and donation data with detailed reports.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export All Reports</Button>
          <select className="h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <MissionStatCard icon={HandCoins} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Donations" value={stats.totalDonations.value} sub={stats.totalDonations.sub} />
        <MissionStatCard icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Donors" value={stats.totalDonors.value} sub={stats.totalDonors.sub} />
        <MissionStatCard icon={Plane} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Mission Trips" value={stats.missionTrips.value} sub={stats.missionTrips.sub} />
        <MissionStatCard icon={HeartHandshake} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Outreach Programs" value={stats.outreachPrograms.value} sub={stats.outreachPrograms.sub} />
        <MissionStatCard icon={UserCheck} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="No. of Participants" value={stats.participants.value} sub={stats.participants.sub} />
        <MissionStatCard icon={Wallet} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Expenses" value={stats.totalExpenses.value} sub={stats.totalExpenses.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DonationsByMonthChart data={overTime} title="Donations Over Time" />
          <OutreachOverviewCard data={byFund} title="Donations by Fund" totalLabel="Total" formatValue={(v) => formatCurrency(v)} />
        </div>
        <ReportCategoriesCard categories={categories} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-border bg-white p-4 shadow-card">
          <h3 className="mb-3 text-sm font-semibold text-ink">Popular Reports</h3>
          <PopularReportsTable reports={popularReports} isLoading={isLoading} pageSize={10} />
        </div>

        <RecentlyGeneratedReportsCard reports={recentlyGenerated} />
      </div>
    </div>
  );
}
