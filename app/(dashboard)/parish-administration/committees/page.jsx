"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Users2, Shield, Clipboard, CheckCircle2, UsersRound, CalendarCheck2, Upload, Calendar as CalendarIcon } from "lucide-react";

import { COMMITTEES_MOCK } from "@/lib/mock/committeesMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { CommitteePerformanceChart } from "@/components/committees/CommitteePerformanceChart";
import { StatusDonutPanel } from "@/components/committees/StatusDonutPanel";
import { CommitteeQuickActions } from "@/components/committees/CommitteeQuickActions";
import { CommitteeSummaryPanel } from "@/components/committees/CommitteeSummaryPanel";
import { RecentActivitiesPanel } from "@/components/committees/RecentActivitiesPanel";
import { UpcomingCommitteeMeetings } from "@/components/committees/UpcomingCommitteeMeetings";
import { CommitteeWiseActivityTable } from "@/components/committees/CommitteeWiseActivityTable";
import { CommitteesTable } from "@/components/committees/CommitteesTable";
import { ActivitiesTab } from "@/components/committees/tabs/ActivitiesTab";
import { MeetingsTab } from "@/components/committees/tabs/MeetingsTab";
import { TasksTab } from "@/components/committees/tabs/TasksTab";
import { ReportsTab } from "@/components/committees/tabs/ReportsTab";
import { cn } from "@/lib/utils";


export default function CommitteeActivityOverviewPage() {
  const data = COMMITTEES_MOCK;
  const [activeTab, setActiveTab] = React.useState("Overview");

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Committee Activity Overview</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Committee Activity Overview</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1.5 text-sm text-ink-subtle">
            Data as of: <span className="font-medium text-ink">{data.dataAsOf}</span>
            <CalendarIcon className="h-3.5 w-3.5" />
          </p>
          <button className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-ink shadow-card hover:bg-surface-muted">
            <Upload className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* 6 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <ParishStatCard label="Total Committees" value={data.cards.totalCommittees.value} sublabel={data.cards.totalCommittees.sublabel} icon={Users2} />
        <ParishStatCard label="Active Committees" value={data.cards.activeCommittees.value} sublabel={data.cards.activeCommittees.sublabel} icon={Shield} />
        <ParishStatCard label="Pending Activities" value={data.cards.pendingActivities.value} sublabel={data.cards.pendingActivities.sublabel} icon={Clipboard} />
        <ParishStatCard label="Completed Activities" value={data.cards.completedActivities.value} sublabel={data.cards.completedActivities.sublabel} icon={CheckCircle2} />
        <ParishStatCard label="Committee Members" value={data.cards.committeeMembers.value} sublabel={data.cards.committeeMembers.sublabel} icon={UsersRound} />
        <ParishStatCard label="Upcoming Meetings" value={data.cards.upcomingMeetings.value} sublabel={data.cards.upcomingMeetings.sublabel} icon={CalendarCheck2} />
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-border">
        {data.tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative pb-3 text-sm font-medium transition-colors",
                isActive ? "text-interactive-500" : "text-ink-muted hover:text-ink"
              )}
            >
              {tab}
              {isActive && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-interactive-500" />}
            </button>
          );
        })}
      </div>

      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <CommitteePerformanceChart data={data.performanceOverview} />
          <StatusDonutPanel title="Activity Status (This Month)" breakdown={data.activityStatus} />
          <StatusDonutPanel title="Member Participation (This Month)" breakdown={data.memberParticipation} />

     
          <div className="space-y-4 lg:row-span-2">
            <CommitteeQuickActions actions={data.quickActions} />
            <CommitteeSummaryPanel summary={data.committeeSummary} />
            <RecentActivitiesPanel activities={data.recentActivities} />
          </div>

          <div className="lg:col-span-1">
            <UpcomingCommitteeMeetings meetings={data.upcomingCommitteeMeetings} />
          </div>
          <div className="lg:col-span-2">
            <CommitteeWiseActivityTable rows={data.committeeWiseActivitySummary} />
          </div>
        </div>
      )}

      {activeTab === "Committees" && <CommitteesTable committees={data.committees} />}
      {activeTab === "Activities" && <ActivitiesTab />}
      {activeTab === "Meetings" && <MeetingsTab />}
      {activeTab === "Tasks" && <TasksTab />}
      {activeTab === "Reports" && <ReportsTab />}
    </div>
  );
}
