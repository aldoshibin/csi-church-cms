"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { PRAYER_GROUPS_LIST_MOCK, GROUP_DISTRIBUTION_MOCK, GROUP_UPCOMING_MEETINGS_MOCK } from "@/lib/mock/prayerGroupsMockData";

const PAGE_SIZE = 8;

export function usePrayerGroupsList() {
  const [groups, setGroups] = React.useState(PRAYER_GROUPS_LIST_MOCK);
  const [distribution] = React.useState(GROUP_DISTRIBUTION_MOCK);
  const [upcomingMeetings] = React.useState(GROUP_UPCOMING_MEETINGS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [dayFilter, setDayFilter] = React.useState("All Days");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.listPrayerGroups({ search, statusFilter, dayFilter, typeFilter, page });
      setGroups(result?.groups ?? PRAYER_GROUPS_LIST_MOCK);
    } catch {
      setGroups(PRAYER_GROUPS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, dayFilter, typeFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, dayFilter, typeFilter]);

  const filtered = React.useMemo(() => {
    return groups.filter((g) => {
      const matchesSearch = !search || g.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || g.status === statusFilter;
      const matchesDay = dayFilter === "All Days" || g.meetingDay.includes(dayFilter);
      const matchesType = typeFilter === "All Types" || g.type === typeFilter;
      return matchesSearch && matchesStatus && matchesDay && matchesType;
    });
  }, [groups, search, statusFilter, dayFilter, typeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    groups: paged, totalCount: filtered.length, isLoading, distribution, upcomingMeetings,
    search, setSearch, statusFilter, setStatusFilter, dayFilter, setDayFilter, typeFilter, setTypeFilter,
    page, setPage, pageSize: PAGE_SIZE,
    applyFilters: refetch,
    resetFilters: () => { setStatusFilter("All Status"); setDayFilter("All Days"); setTypeFilter("All Types"); },
  };
}
