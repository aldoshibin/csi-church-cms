"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useWomensFellowshipDashboard } from "@/hooks/useWomensFellowshipDashboard";
import { Button } from "@/components/ui/Button";
import { WfStatsCards } from "@/components/womens-fellowship/WfStatsCards";
import { RecentFellowshipGroupsTable } from "@/components/womens-fellowship/RecentFellowshipGroupsTable";
import { MembersByAgeGroupCard } from "@/components/womens-fellowship/MembersByAgeGroupCard";
import { MeetingAttendanceTrendCard } from "@/components/womens-fellowship/MeetingAttendanceTrendCard";
import { WfUpcomingEventsCard, WfQuickActions } from "@/components/womens-fellowship/WfSidebarExtras";

export default function WomensFellowshipDashboardPage() {
  const {
    stats, groups, totalCount, isLoading, upcomingEvents, membersByAgeGroup, attendanceTrend,
    page, setPage, pageSize,
  } = useWomensFellowshipDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Women's Fellowship</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage women's fellowship groups, activities, events and members.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/fellowship-groups/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Group</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <WfStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <RecentFellowshipGroupsTable
            groups={groups} isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <MembersByAgeGroupCard breakdown={membersByAgeGroup.breakdown} />
            <MeetingAttendanceTrendCard data={attendanceTrend} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <WfUpcomingEventsCard events={upcomingEvents} />
          <WfQuickActions />
        </div>
      </div>
    </div>
  );
}
