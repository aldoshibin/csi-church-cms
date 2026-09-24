"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import {
  OUTREACH_STATS_MOCK, OUTREACH_BY_CATEGORY_MOCK, OUTREACH_ACTIVITIES_OVER_TIME_MOCK,
  OUTREACH_ACTIVITIES_LIST_MOCK, UPCOMING_ACTIVITIES_MOCK, DONATION_OVERVIEW_MOCK,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionOverview() {
  const [overview, setOverview] = React.useState({
    stats: OUTREACH_STATS_MOCK,
    byCategory: OUTREACH_BY_CATEGORY_MOCK,
    overTime: OUTREACH_ACTIVITIES_OVER_TIME_MOCK,
    recentActivities: OUTREACH_ACTIVITIES_LIST_MOCK.slice(0, 5),
    totalActivitiesCount: OUTREACH_ACTIVITIES_LIST_MOCK.length,
    upcoming: UPCOMING_ACTIVITIES_MOCK,
    donationOverview: DONATION_OVERVIEW_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const pageSize = 5;

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const data = await missionEvangelismService.getOverview();
        if (active && data) setOverview((prev) => ({ ...prev, ...data }));
      } catch {
        // keep mock fallback
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const pagedActivities = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return OUTREACH_ACTIVITIES_LIST_MOCK.slice(start, start + pageSize);
  }, [page]);

  return {
    ...overview, isLoading,
    recentActivities: pagedActivities, page, setPage, pageSize,
    totalActivitiesCount: OUTREACH_ACTIVITIES_LIST_MOCK.length,
  };
}
