"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  MF_STATS_MOCK, MF_UPCOMING_MEETINGS_MOCK, MF_GROUP_SUMMARY_MOCK, MF_ATTENDANCE_TREND_MOCK,
  MF_ATTENDANCE_STATS_MOCK, MF_NEXT_ACTIVITY_MOCK, MF_GROUP_OVERVIEW_MOCK, MF_TOP_MEMBERS_MOCK,
} from "@/lib/mock/mensFellowshipMockData";

export function useMensFellowshipDashboard() {
  const [data, setData] = React.useState({
    stats: MF_STATS_MOCK,
    upcomingMeetings: MF_UPCOMING_MEETINGS_MOCK,
    groupSummary: MF_GROUP_SUMMARY_MOCK,
    attendanceTrend: MF_ATTENDANCE_TREND_MOCK,
    attendanceStats: MF_ATTENDANCE_STATS_MOCK,
    nextActivity: MF_NEXT_ACTIVITY_MOCK,
    groupOverview: MF_GROUP_OVERVIEW_MOCK,
    topMembers: MF_TOP_MEMBERS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.getDashboard();
      setData((prev) => ({ ...prev, ...result }));
    } catch {
      // Backend not wired up in this environment yet — mock data already in state.
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return { ...data, isLoading, refetch };
}
