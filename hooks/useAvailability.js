"use client";

import * as React from "react";
import { availabilityService } from "@/services/availabilityService";
import {
  AVAILABILITY_LIST_MOCK, AVAILABILITY_OVERVIEW_STATS_MOCK, MINISTRY_AVAILABILITY_BREAKDOWN_MOCK, UPCOMING_SERVICES_MOCK, CURRENT_WEEK_MOCK,
} from "@/lib/mock/availabilityMockData";

const PAGE_SIZE = 8;
const TABS = ["All Availability", "By Volunteer", "By Ministry / Team", "By Service / Event", "Unavailable"];

export function useAvailability() {
  const [volunteers, setVolunteers] = React.useState(AVAILABILITY_LIST_MOCK);
  const [stats] = React.useState(AVAILABILITY_OVERVIEW_STATS_MOCK);
  const [ministryBreakdown] = React.useState(MINISTRY_AVAILABILITY_BREAKDOWN_MOCK);
  const [upcomingServices] = React.useState(UPCOMING_SERVICES_MOCK);
  const [week] = React.useState(CURRENT_WEEK_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Availability");
  const [search, setSearch] = React.useState("");
  const [ministryFilter, setMinistryFilter] = React.useState("All Ministries");
  const [serviceFilter, setServiceFilter] = React.useState("All Services / Events");
  const [dateFilter, setDateFilter] = React.useState("");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await availabilityService.listAvailability({ activeTab, search, ministryFilter, serviceFilter, dateFilter, page });
      setVolunteers(result?.volunteers ?? AVAILABILITY_LIST_MOCK);
    } catch {
      setVolunteers(AVAILABILITY_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, ministryFilter, serviceFilter, dateFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, ministryFilter, serviceFilter, dateFilter]);

  const filtered = React.useMemo(() => {
    return volunteers.filter((v) => {
      const matchesTab = activeTab === "All Availability" || activeTab !== "Unavailable" || Object.values(v.week).some((d) => d.status === "Unavailable");
      const matchesSearch = !search || v.name.toLowerCase().includes(search.toLowerCase());
      const matchesMinistry = ministryFilter === "All Ministries" || v.ministry === ministryFilter;
      return matchesTab && matchesSearch && matchesMinistry;
    });
  }, [volunteers, activeTab, search, ministryFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    volunteers: paged, totalCount: filtered.length, isLoading, stats, ministryBreakdown, upcomingServices, week,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, serviceFilter, setServiceFilter, dateFilter, setDateFilter,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setMinistryFilter("All Ministries"); setServiceFilter("All Services / Events"); setDateFilter(""); },
  };
}
