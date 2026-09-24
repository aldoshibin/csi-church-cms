"use client";

import { useMensFellowshipDashboard } from "@/hooks/useMensFellowshipDashboard";
import { MfStatsCards } from "@/components/mens-fellowship/MfStatsCards";
import { UpcomingMeetingsTable } from "@/components/mens-fellowship/UpcomingMeetingsTable";
import { GroupSummaryTable } from "@/components/mens-fellowship/GroupSummaryTable";
import { MfAttendanceOverviewCard } from "@/components/mens-fellowship/MfAttendanceOverviewCard";
import { NextActivityCard } from "@/components/mens-fellowship/NextActivityCard";
import { GroupOverviewCard } from "@/components/mens-fellowship/GroupOverviewCard";
import { MfQuickActions, TopParticipatingMembersCard } from "@/components/mens-fellowship/MfSidebarExtras";

export default function MensFellowshipDashboardPage() {
  const {
    stats, upcomingMeetings, groupSummary, attendanceTrend, attendanceStats,
    nextActivity, groupOverview, topMembers, isLoading,
  } = useMensFellowshipDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Men's Fellowship</h1>
        <p className="mt-1 text-sm text-ink-subtle">Manage men's fellowship groups, meetings, activities and participation.</p>
      </div>

      <MfStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <UpcomingMeetingsTable meetings={upcomingMeetings} isLoading={isLoading} />
          <GroupSummaryTable groups={groupSummary} />
          <MfAttendanceOverviewCard data={attendanceTrend} stats={attendanceStats} />
        </div>

        <div className="flex flex-col gap-5">
          <NextActivityCard activity={nextActivity} />
          <GroupOverviewCard breakdown={groupOverview.breakdown} />
          <MfQuickActions />
          <TopParticipatingMembersCard members={topMembers} />
        </div>
      </div>
    </div>
  );
}
