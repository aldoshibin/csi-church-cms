"use client";

import { useState } from "react";
import { Calendar, Download, ChevronDown } from "lucide-react";

import { useYmReports } from "@/hooks/useYmReports";
import { Button } from "@/components/ui/Button";
import { YmReportsStatsCards } from "@/components/youth-ministry/reports/YmReportsStatsCards";
import { YmReportsTabs } from "@/components/youth-ministry/reports/YmReportsTabs";
import { AttendanceOverviewReportCard } from "@/components/youth-ministry/reports/AttendanceOverviewReportCard";
import { MembersByMinistryCard, TopYouthGroupsCard } from "@/components/youth-ministry/reports/MembersByMinistryTopGroupsCards";
import { OfferingsCollectionsCard } from "@/components/youth-ministry/reports/OfferingsCollectionsCard";
import { LessonsConductedTrendCard } from "@/components/youth-ministry/reports/LessonsConductedTrendCard";
import { ReportsUpcomingEventsCard } from "@/components/youth-ministry/reports/ReportsUpcomingEventsCard";
import { ReportTabPlaceholder } from "@/components/youth-ministry/reports/ReportTabPlaceholder";

export default function YmReportsPage() {
  const {
    stats, attendanceTrend, attendanceSummary, membersByMinistry, topYouthGroups,
    offerings, lessonsTrend, lessonsSummary, upcomingEvents, dateRange,
  } = useYmReports();
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">View insights and generate reports across ministries and activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {dateRange} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <Button type="button" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export Reports
          </Button>
        </div>
      </div>

      <YmReportsStatsCards stats={stats} />

      <YmReportsTabs active={activeTab} onChange={setActiveTab} />

      {activeTab === "Overview" ? (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="flex flex-col gap-5 xl:col-span-2">
            <AttendanceOverviewReportCard trend={attendanceTrend} summary={attendanceSummary} />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <OfferingsCollectionsCard offerings={offerings} />
              <LessonsConductedTrendCard trend={lessonsTrend} summary={lessonsSummary} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <MembersByMinistryCard total={membersByMinistry.total} breakdown={membersByMinistry.breakdown} />
            <TopYouthGroupsCard groups={topYouthGroups} />
            <ReportsUpcomingEventsCard events={upcomingEvents} />
          </div>
        </div>
      ) : (
        <ReportTabPlaceholder label={activeTab} />
      )}
    </div>
  );
}
