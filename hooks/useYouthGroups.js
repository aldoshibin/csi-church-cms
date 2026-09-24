"use client";

import * as React from "react";
import { youthGroupsService } from "@/services/youthGroupsService";
import {
  YOUTH_GROUPS_MOCK, GROUP_DISTRIBUTION_BY_AGE_MOCK, UPCOMING_MEETINGS_MOCK, GROUP_ACTIVITIES_OVERVIEW_MOCK,
} from "@/lib/mock/youthGroupsMockData";

const PAGE_SIZE = 10;

export function useYouthGroups() {
  const [groups, setGroups] = React.useState(YOUTH_GROUPS_MOCK);
  const [distribution, setDistribution] = React.useState(GROUP_DISTRIBUTION_BY_AGE_MOCK);
  const [upcomingMeetings, setUpcomingMeetings] = React.useState(UPCOMING_MEETINGS_MOCK);
  const [activitiesOverview, setActivitiesOverview] = React.useState(GROUP_ACTIVITIES_OVERVIEW_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await youthGroupsService.listGroups({ search, statusFilter, page });
      setGroups(result?.groups ?? YOUTH_GROUPS_MOCK);
      setDistribution(result?.distribution ?? GROUP_DISTRIBUTION_BY_AGE_MOCK);
      setUpcomingMeetings(result?.upcomingMeetings ?? UPCOMING_MEETINGS_MOCK);
      setActivitiesOverview(result?.activitiesOverview ?? GROUP_ACTIVITIES_OVERVIEW_MOCK);
    } catch {
      setGroups(YOUTH_GROUPS_MOCK);
      setDistribution(GROUP_DISTRIBUTION_BY_AGE_MOCK);
      setUpcomingMeetings(UPCOMING_MEETINGS_MOCK);
      setActivitiesOverview(GROUP_ACTIVITIES_OVERVIEW_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter]);

  const filteredGroups = React.useMemo(() => {
    return groups.filter((g) => {
      const matchesSearch = !search || g.name.toLowerCase().includes(search.toLowerCase()) || g.leader.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || g.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [groups, search, statusFilter]);

  const pagedGroups = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredGroups.slice(start, start + PAGE_SIZE);
  }, [filteredGroups, page]);

  return {
    groups: pagedGroups, totalCount: filteredGroups.length, isLoading,
    distribution, upcomingMeetings, activitiesOverview,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
