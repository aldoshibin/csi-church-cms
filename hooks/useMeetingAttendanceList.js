"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  ATTENDANCE_LIST_MOCK, ATTENDANCE_STATS_MOCK, ATTENDANCE_OVERVIEW_MOCK, ATTENDANCE_TREND_MOCK, TOP_ATTENDED_MEETINGS_MOCK,
} from "@/lib/mock/meetingAttendanceMockData";

const PAGE_SIZE = 10;

export function useMeetingAttendanceList() {
  const [meetings, setMeetings] = React.useState(ATTENDANCE_LIST_MOCK);
  const [stats, setStats] = React.useState(ATTENDANCE_STATS_MOCK);
  const [overview, setOverview] = React.useState(ATTENDANCE_OVERVIEW_MOCK);
  const [trend, setTrend] = React.useState(ATTENDANCE_TREND_MOCK);
  const [topAttended, setTopAttended] = React.useState(TOP_ATTENDED_MEETINGS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Meeting Types");
  const [monthFilter, setMonthFilter] = React.useState("All Months");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listAttendance({ search, statusFilter, typeFilter, monthFilter, page });
      setMeetings(result?.meetings ?? ATTENDANCE_LIST_MOCK);
      setStats(result?.stats ?? ATTENDANCE_STATS_MOCK);
      setOverview(result?.overview ?? ATTENDANCE_OVERVIEW_MOCK);
      setTrend(result?.trend ?? ATTENDANCE_TREND_MOCK);
      setTopAttended(result?.topAttended ?? TOP_ATTENDED_MEETINGS_MOCK);
    } catch {
      setMeetings(ATTENDANCE_LIST_MOCK);
      setStats(ATTENDANCE_STATS_MOCK);
      setOverview(ATTENDANCE_OVERVIEW_MOCK);
      setTrend(ATTENDANCE_TREND_MOCK);
      setTopAttended(TOP_ATTENDED_MEETINGS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, typeFilter, monthFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, typeFilter, monthFilter]);

  const filteredMeetings = React.useMemo(() => {
    return meetings.filter((m) => {
      const matchesSearch = !search || m.title.toLowerCase().includes(search.toLowerCase()) || m.subtitle.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      const matchesType = typeFilter === "All Meeting Types" || m.type === typeFilter;
      const matchesMonth = monthFilter === "All Months" || new Date(m.date).toLocaleString("en-US", { month: "long" }) === monthFilter;
      return matchesSearch && matchesStatus && matchesType && matchesMonth;
    });
  }, [meetings, search, statusFilter, typeFilter, monthFilter]);

  const pagedMeetings = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMeetings.slice(start, start + PAGE_SIZE);
  }, [filteredMeetings, page]);

  return {
    meetings: pagedMeetings, totalCount: filteredMeetings.length, isLoading,
    stats, overview, trend, topAttended,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, monthFilter, setMonthFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
