"use client";

import Link from "next/link";
import { Plus, ChevronDown } from "lucide-react";

import { useYouthMinistryDashboard } from "@/hooks/useYouthMinistryDashboard";
import { Button } from "@/components/ui/Button";
import { YouthMinistryStatsCards } from "@/components/youth-ministry/YouthMinistryStatsCards";
import { YmUpcomingEventsCard } from "@/components/youth-ministry/YmUpcomingEventsCard";
import { RecentActivitiesCard } from "@/components/youth-ministry/RecentActivitiesCard";
import { MinistryFocusRow } from "@/components/youth-ministry/MinistryFocusRow";
import { YouthGroupsOverviewCard } from "@/components/youth-ministry/YouthGroupsOverviewCard";
import { MinistryCalendarCard } from "@/components/youth-ministry/MinistryCalendarCard";
import { YouthMinistryQuickActions } from "@/components/youth-ministry/YouthMinistryQuickActions";

export default function YouthMinistryDashboardPage() {
  const { stats, upcomingEvents, recentActivities, ministryFocus, youthGroupsOverview } = useYouthMinistryDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Youth Ministry</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage youth groups, events, attendance, and discipleship programs.</p>
        </div>
        <Link href="/youth-ministry/activities/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Add New Youth Activity
          </Button>
        </Link>
      </div>

      <YouthMinistryStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <YmUpcomingEventsCard events={upcomingEvents} />
          <RecentActivitiesCard activities={recentActivities} />
          <MinistryFocusRow items={ministryFocus} />
        </div>

        <div className="flex flex-col gap-5">
          <YouthGroupsOverviewCard totalMembers={youthGroupsOverview.totalMembers} groups={youthGroupsOverview.groups} />
          <MinistryCalendarCard />
          <YouthMinistryQuickActions />
        </div>
      </div>
    </div>
  );
}
