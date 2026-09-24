"use client";

import * as React from "react";
import { youthMinistryService } from "@/services/youthMinistryService";
import {
  YM_STATS_MOCK, YM_UPCOMING_EVENTS_MOCK, YM_RECENT_ACTIVITIES_MOCK, YM_MINISTRY_FOCUS_MOCK, YM_YOUTH_GROUPS_OVERVIEW_MOCK,
} from "@/lib/mock/youthMinistryMockData";

export function useYouthMinistryDashboard() {
  const [data, setData] = React.useState({
    stats: YM_STATS_MOCK,
    upcomingEvents: YM_UPCOMING_EVENTS_MOCK,
    recentActivities: YM_RECENT_ACTIVITIES_MOCK,
    ministryFocus: YM_MINISTRY_FOCUS_MOCK,
    youthGroupsOverview: YM_YOUTH_GROUPS_OVERVIEW_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await youthMinistryService.getDashboard();
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
