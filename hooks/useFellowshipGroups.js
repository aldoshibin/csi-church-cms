"use client";

import * as React from "react";
import { fellowshipGroupsService } from "@/services/fellowshipGroupsService";
import { FG_GROUPS_MOCK, FG_UPCOMING_MEETINGS_MOCK, FG_BY_MINISTRY_FOCUS_MOCK } from "@/lib/mock/fellowshipGroupsMockData";

const PAGE_SIZE = 8;

export function useFellowshipGroups() {
  const [groups, setGroups] = React.useState(FG_GROUPS_MOCK);
  const [upcomingMeetings, setUpcomingMeetings] = React.useState(FG_UPCOMING_MEETINGS_MOCK);
  const [byMinistryFocus, setByMinistryFocus] = React.useState(FG_BY_MINISTRY_FOCUS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const [selectedGroupId, setSelectedGroupId] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fellowshipGroupsService.listGroups({ search, statusFilter, page });
      setGroups(result?.groups ?? FG_GROUPS_MOCK);
      setUpcomingMeetings(result?.upcomingMeetings ?? FG_UPCOMING_MEETINGS_MOCK);
      setByMinistryFocus(result?.byMinistryFocus ?? FG_BY_MINISTRY_FOCUS_MOCK);
    } catch {
      setGroups(FG_GROUPS_MOCK);
      setUpcomingMeetings(FG_UPCOMING_MEETINGS_MOCK);
      setByMinistryFocus(FG_BY_MINISTRY_FOCUS_MOCK);
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

  const selectedGroup = React.useMemo(
    () => groups.find((g) => g.id === selectedGroupId) ?? null,
    [groups, selectedGroupId]
  );

  return {
    groups: pagedGroups, totalCount: filteredGroups.length, isLoading,
    upcomingMeetings, byMinistryFocus,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    selectedGroup, setSelectedGroupId,
    refetch,
  };
}
