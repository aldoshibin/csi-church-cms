"use client";

import * as React from "react";
import { ymAttendanceService } from "@/services/ymAttendanceService";
import {
  ATTENDANCE_MAIN_STATS_MOCK, ATTENDANCE_OVERVIEW_TREND_MOCK, ATTENDANCE_BY_MINISTRY_MOCK,
  ATT_UPCOMING_EVENTS_MOCK, RECENT_ATTENDANCE_RECORDS_MOCK,
} from "@/lib/mock/ymAttendanceMockData";

const PAGE_SIZE = 5;

export function useYmAttendance() {
  const [stats, setStats] = React.useState(ATTENDANCE_MAIN_STATS_MOCK);
  const [trend, setTrend] = React.useState(ATTENDANCE_OVERVIEW_TREND_MOCK);
  const [byMinistry, setByMinistry] = React.useState(ATTENDANCE_BY_MINISTRY_MOCK);
  const [upcomingEvents, setUpcomingEvents] = React.useState(ATT_UPCOMING_EVENTS_MOCK);
  const [records, setRecords] = React.useState(RECENT_ATTENDANCE_RECORDS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ymAttendanceService.getOverview({ search, ministryFilter, page });
      setStats(result?.stats ?? ATTENDANCE_MAIN_STATS_MOCK);
      setTrend(result?.trend ?? ATTENDANCE_OVERVIEW_TREND_MOCK);
      setByMinistry(result?.byMinistry ?? ATTENDANCE_BY_MINISTRY_MOCK);
      setUpcomingEvents(result?.upcomingEvents ?? ATT_UPCOMING_EVENTS_MOCK);
      setRecords(result?.records ?? RECENT_ATTENDANCE_RECORDS_MOCK);
    } catch {
      setStats(ATTENDANCE_MAIN_STATS_MOCK);
      setTrend(ATTENDANCE_OVERVIEW_TREND_MOCK);
      setByMinistry(ATTENDANCE_BY_MINISTRY_MOCK);
      setUpcomingEvents(ATT_UPCOMING_EVENTS_MOCK);
      setRecords(RECENT_ATTENDANCE_RECORDS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, ministryFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredRecords = React.useMemo(() => {
    return records.filter((r) => {
      const matchesSearch = !search || r.event.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || r.category === ministryFilter;
      return matchesSearch && matchesMinistry;
    });
  }, [records, search, ministryFilter]);

  const pagedRecords = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredRecords.slice(start, start + PAGE_SIZE);
  }, [filteredRecords, page]);

  return {
    stats, trend, byMinistry, upcomingEvents, isLoading,
    records: pagedRecords, totalCount: filteredRecords.length,
    search, setSearch, ministryFilter, setMinistryFilter,
    page, setPage, pageSize: PAGE_SIZE,
  };
}
