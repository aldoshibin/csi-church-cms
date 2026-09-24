"use client";

import * as React from "react";
import { ymReportsService } from "@/services/ymReportsService";
import {
  REP_STATS_MOCK, REP_ATTENDANCE_TREND_MOCK, REP_ATTENDANCE_SUMMARY_MOCK, REP_MEMBERS_BY_MINISTRY_MOCK,
  REP_TOP_YOUTH_GROUPS_MOCK, REP_OFFERINGS_MOCK, REP_LESSONS_TREND_MOCK, REP_LESSONS_SUMMARY_MOCK, REP_UPCOMING_EVENTS_MOCK,
} from "@/lib/mock/ymReportsMockData";

export function useYmReports() {
  const [data, setData] = React.useState({
    stats: REP_STATS_MOCK,
    attendanceTrend: REP_ATTENDANCE_TREND_MOCK,
    attendanceSummary: REP_ATTENDANCE_SUMMARY_MOCK,
    membersByMinistry: REP_MEMBERS_BY_MINISTRY_MOCK,
    topYouthGroups: REP_TOP_YOUTH_GROUPS_MOCK,
    offerings: REP_OFFERINGS_MOCK,
    lessonsTrend: REP_LESSONS_TREND_MOCK,
    lessonsSummary: REP_LESSONS_SUMMARY_MOCK,
    upcomingEvents: REP_UPCOMING_EVENTS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [dateRange] = React.useState("May 1 - May 31, 2026");

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ymReportsService.getOverview({ dateRange });
      setData((prev) => ({ ...prev, ...result }));
    } catch {
      // Backend not wired up in this environment yet — mock data already in state.
    } finally {
      setIsLoading(false);
    }
  }, [dateRange]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return { ...data, isLoading, dateRange, refetch };
}
