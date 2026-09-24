"use client";

import * as React from "react";
import { mensFellowshipGroupsService } from "@/services/mensFellowshipGroupsService";
import {
  FELLOWSHIP_GROUPS_MOCK, MFG_STATUS_OVERVIEW_MOCK, MFG_TOP_GROUPS_MOCK, MFG_RECENT_ACTIVITIES_MOCK, MFG_ABOUT_MOCK,
} from "@/lib/mock/mensFellowshipGroupsMockData";

const PAGE_SIZE = 8;

export function useMensFellowshipGroups() {
  const [groups, setGroups] = React.useState(FELLOWSHIP_GROUPS_MOCK);
  const [statusOverview, setStatusOverview] = React.useState(MFG_STATUS_OVERVIEW_MOCK);
  const [topGroups, setTopGroups] = React.useState(MFG_TOP_GROUPS_MOCK);
  const [recentActivities, setRecentActivities] = React.useState(MFG_RECENT_ACTIVITIES_MOCK);
  const [about] = React.useState(MFG_ABOUT_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [leaderFilter, setLeaderFilter] = React.useState("All Leaders");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipGroupsService.listGroups({ search, statusFilter, leaderFilter, page });
      setGroups(result?.groups ?? FELLOWSHIP_GROUPS_MOCK);
      setStatusOverview(result?.statusOverview ?? MFG_STATUS_OVERVIEW_MOCK);
      setTopGroups(result?.topGroups ?? MFG_TOP_GROUPS_MOCK);
      setRecentActivities(result?.recentActivities ?? MFG_RECENT_ACTIVITIES_MOCK);
    } catch {
      setGroups(FELLOWSHIP_GROUPS_MOCK);
      setStatusOverview(MFG_STATUS_OVERVIEW_MOCK);
      setTopGroups(MFG_TOP_GROUPS_MOCK);
      setRecentActivities(MFG_RECENT_ACTIVITIES_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, leaderFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, leaderFilter]);

  const filteredGroups = React.useMemo(() => {
    return groups.filter((g) => {
      const matchesSearch = !search || g.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || g.status === statusFilter;
      const matchesLeader = leaderFilter === "All Leaders" || g.leader === leaderFilter;
      return matchesSearch && matchesStatus && matchesLeader;
    });
  }, [groups, search, statusFilter, leaderFilter]);

  const pagedGroups = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredGroups.slice(start, start + PAGE_SIZE);
  }, [filteredGroups, page]);

  return {
    groups: pagedGroups, totalCount: filteredGroups.length, isLoading,
    statusOverview, topGroups, recentActivities, about,
    search, setSearch, statusFilter, setStatusFilter, leaderFilter, setLeaderFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
