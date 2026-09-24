"use client";

import Link from "next/link";
import { Shield, Users2, HeartHandshake, Wallet, Cross, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMissionOverview } from "@/hooks/useMissionOverview";
import { MissionStatCard } from "@/components/mission-evangelism/MissionStatCard";
import { OutreachOverviewCard } from "@/components/mission-evangelism/OutreachOverviewCard";
import { OutreachActivitiesOverTimeChart } from "@/components/mission-evangelism/OutreachActivitiesOverTimeChart";
import { OutreachActivitiesTable } from "@/components/mission-evangelism/OutreachActivitiesTable";
import { UpcomingActivitiesCard } from "@/components/mission-evangelism/UpcomingActivitiesCard";
import { QuickActionsCard } from "@/components/mission-evangelism/QuickActionsCard";
import { formatCurrency } from "@/lib/utils";
import { OVERVIEW_QUICK_ACTIONS } from "@/lib/mock/vmMissionEvangelismMockData";

export function MissionOverviewView() {
  const {
    stats, byCategory, overTime, recentActivities, totalActivitiesCount,
    upcoming, donationOverview, page, setPage, pageSize, isLoading,
  } = useMissionOverview();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Shield className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Mission &amp; Evangelism</h1>
            <p className="mt-1 text-sm text-ink-subtle">Track and manage mission activities and outreach initiatives.</p>
          </div>
        </div>
        <Link href="/mission-evangelism/outreach-programs/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add New Activity</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MissionStatCard icon={Users2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Outreach Activities" value={stats.totalActivities.value} sub={stats.totalActivities.sub} />
        <MissionStatCard icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="People Reached" value={stats.peopleReached.value} sub={stats.peopleReached.sub} />
        <MissionStatCard icon={HeartHandshake} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Volunteers Involved" value={stats.volunteersInvolved.value} sub={stats.volunteersInvolved.sub} />
        <MissionStatCard icon={Wallet} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Donations" value={stats.totalDonations.value} sub={stats.totalDonations.sub} />
        <MissionStatCard icon={Cross} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Mission Trips" value={stats.missionTrips.value} sub={stats.missionTrips.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <OutreachOverviewCard data={byCategory} title="Outreach Activities by Category" totalLabel="Total Activities" />
        <OutreachActivitiesOverTimeChart data={overTime} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-4 shadow-card">
            <h3 className="mb-3 text-sm font-semibold text-ink">Recent Outreach Activities</h3>
            <OutreachActivitiesTable
              activities={recentActivities} isLoading={isLoading}
              page={page} pageSize={pageSize} totalCount={totalActivitiesCount} onPageChange={setPage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <UpcomingActivitiesCard activities={upcoming} />
          <OutreachOverviewCard
            data={donationOverview} title="Donation Overview" totalLabel="Total Donations"
            formatValue={(v) => formatCurrency(v)}
          />
          <QuickActionsCard actions={OVERVIEW_QUICK_ACTIONS} />
        </div>
      </div>
    </div>
  );
}
