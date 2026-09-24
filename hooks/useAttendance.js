"use client";

import * as React from "react";
import { attendanceService } from "@/services/attendanceService";
import {
  ATTENDANCE_LIST_MOCK, ATTENDANCE_OVERVIEW_STATS_MOCK, ATTENDANCE_SUMMARY_DONUT_MOCK,
  SERVICE_ATTENDANCE_MOCK, ATTENDANCE_RECENT_ACTIVITY_MOCK,
} from "@/lib/mock/vmAttendanceMockData";

const PAGE_SIZE = 8;
const TABS = ["Overview", "By Service", "By Volunteer", "By Ministry / Team", "By Date Range", "Summary"];

export function useAttendance() {
  const [records, setRecords] = React.useState(ATTENDANCE_LIST_MOCK);
  const [stats] = React.useState(ATTENDANCE_OVERVIEW_STATS_MOCK);
  const [donut] = React.useState(ATTENDANCE_SUMMARY_DONUT_MOCK);
  const [serviceAttendance] = React.useState(SERVICE_ATTENDANCE_MOCK);
  const [recentActivity] = React.useState(ATTENDANCE_RECENT_ACTIVITY_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("Overview");
  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [serviceFilter, setServiceFilter] = React.useState("All Services / Events");
  const [dateRange, setDateRange] = React.useState("May 18 - May 24, 2026");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await attendanceService.listAttendance({ activeTab, search, ministryFilter, serviceFilter, dateRange, page });
      setRecords(result?.records ?? ATTENDANCE_LIST_MOCK);
    } catch {
      setRecords(ATTENDANCE_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, ministryFilter, serviceFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, ministryFilter, serviceFilter, dateRange]);

  const filtered = React.useMemo(() => {
    return records.filter((r) => {
      const matchesSearch = !search || r.name.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || r.ministry === ministryFilter;
      const matchesService = serviceFilter === "All Services / Events" || r.service === serviceFilter;
      return matchesSearch && matchesMinistry && matchesService;
    });
  }, [records, search, ministryFilter, serviceFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    records: paged, totalCount: filtered.length, isLoading, stats, donut, serviceAttendance, recentActivity,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, serviceFilter, setServiceFilter, dateRange, setDateRange,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setMinistryFilter("All Ministries"); setServiceFilter("All Services / Events"); },
  };
}
