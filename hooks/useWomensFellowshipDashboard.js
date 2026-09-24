"use client";

import * as React from "react";
import { womensFellowshipService } from "@/services/womensFellowshipService";
import {
  WF_STATS_MOCK, WF_RECENT_GROUPS_MOCK, WF_UPCOMING_EVENTS_MOCK, WF_MEMBERS_BY_AGE_GROUP_MOCK, WF_ATTENDANCE_TREND_MOCK,
} from "@/lib/mock/womensFellowshipMockData";

const PAGE_SIZE = 5;

export function useWomensFellowshipDashboard() {
  const [stats, setStats] = React.useState(WF_STATS_MOCK);
  const [groups, setGroups] = React.useState(WF_RECENT_GROUPS_MOCK);
  const [upcomingEvents, setUpcomingEvents] = React.useState(WF_UPCOMING_EVENTS_MOCK);
  const [membersByAgeGroup, setMembersByAgeGroup] = React.useState(WF_MEMBERS_BY_AGE_GROUP_MOCK);
  const [attendanceTrend, setAttendanceTrend] = React.useState(WF_ATTENDANCE_TREND_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await womensFellowshipService.getDashboard({ page });
      setStats(result?.stats ?? WF_STATS_MOCK);
      setGroups(result?.groups ?? WF_RECENT_GROUPS_MOCK);
      setUpcomingEvents(result?.upcomingEvents ?? WF_UPCOMING_EVENTS_MOCK);
      setMembersByAgeGroup(result?.membersByAgeGroup ?? WF_MEMBERS_BY_AGE_GROUP_MOCK);
      setAttendanceTrend(result?.attendanceTrend ?? WF_ATTENDANCE_TREND_MOCK);
    } catch {
      setStats(WF_STATS_MOCK);
      setGroups(WF_RECENT_GROUPS_MOCK);
      setUpcomingEvents(WF_UPCOMING_EVENTS_MOCK);
      setMembersByAgeGroup(WF_MEMBERS_BY_AGE_GROUP_MOCK);
      setAttendanceTrend(WF_ATTENDANCE_TREND_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const pagedGroups = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return groups.slice(start, start + PAGE_SIZE);
  }, [groups, page]);

  return {
    stats, upcomingEvents, membersByAgeGroup, attendanceTrend, isLoading,
    groups: pagedGroups, totalCount: groups.length, page, setPage, pageSize: PAGE_SIZE,
  };
}
