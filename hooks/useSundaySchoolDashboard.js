"use client";

import * as React from "react";
import { sundaySchoolService } from "@/services/sundaySchoolService";
import {
  SS_STATS_MOCK, SS_ATTENDANCE_OVERVIEW_MOCK, SS_CLASS_WISE_ATTENDANCE_MOCK,
  RECENT_ATTENDANCE_MOCK, SS_UPCOMING_EVENTS_MOCK,
} from "@/lib/mock/sundaySchoolMockData";

const PAGE_SIZE = 5;

export function useSundaySchoolDashboard() {
  const [stats, setStats] = React.useState(SS_STATS_MOCK);
  const [attendanceOverview, setAttendanceOverview] = React.useState(SS_ATTENDANCE_OVERVIEW_MOCK);
  const [classWiseAttendance, setClassWiseAttendance] = React.useState(SS_CLASS_WISE_ATTENDANCE_MOCK);
  const [recentAttendance, setRecentAttendance] = React.useState(RECENT_ATTENDANCE_MOCK);
  const [upcomingEvents, setUpcomingEvents] = React.useState(SS_UPCOMING_EVENTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [classFilter, setClassFilter] = React.useState("All Classes");
  const [dateRange] = React.useState("21 Apr 2025 - 27 Apr 2025");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await sundaySchoolService.getDashboard({ classFilter, dateRange, page });
      setStats(result?.stats ?? SS_STATS_MOCK);
      setAttendanceOverview(result?.attendanceOverview ?? SS_ATTENDANCE_OVERVIEW_MOCK);
      setClassWiseAttendance(result?.classWiseAttendance ?? SS_CLASS_WISE_ATTENDANCE_MOCK);
      setRecentAttendance(result?.recentAttendance ?? RECENT_ATTENDANCE_MOCK);
      setUpcomingEvents(result?.upcomingEvents ?? SS_UPCOMING_EVENTS_MOCK);
    } catch {
      setStats(SS_STATS_MOCK);
      setAttendanceOverview(SS_ATTENDANCE_OVERVIEW_MOCK);
      setClassWiseAttendance(SS_CLASS_WISE_ATTENDANCE_MOCK);
      setRecentAttendance(RECENT_ATTENDANCE_MOCK);
      setUpcomingEvents(SS_UPCOMING_EVENTS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [classFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [classFilter]);

  const filteredAttendance = React.useMemo(() => {
    if (classFilter === "All Classes") return recentAttendance;
    return recentAttendance.filter((a) => a.className === classFilter);
  }, [recentAttendance, classFilter]);

  const pagedAttendance = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredAttendance.slice(start, start + PAGE_SIZE);
  }, [filteredAttendance, page]);

  return {
    stats, attendanceOverview, classWiseAttendance, upcomingEvents, isLoading,
    recentAttendance: pagedAttendance, totalCount: filteredAttendance.length,
    classFilter, setClassFilter, dateRange, page, setPage, pageSize: PAGE_SIZE,
  };
}
