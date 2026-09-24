"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  MEMBERS_MOCK, MEMBERS_STATS_MOCK, MEMBER_STATUS_BREAKDOWN_MOCK,
  MEMBERS_AGE_GROUP_MOCK, RECENT_JOINED_MEMBERS_MOCK,
} from "@/lib/mock/mensFellowshipMockData";

const PAGE_SIZE = 10;

export function useMensFellowshipMembers() {
  const [members, setMembers] = React.useState(MEMBERS_MOCK);
  const [stats, setStats] = React.useState(MEMBERS_STATS_MOCK);
  const [statusBreakdown, setStatusBreakdown] = React.useState(MEMBER_STATUS_BREAKDOWN_MOCK);
  const [ageGroups, setAgeGroups] = React.useState(MEMBERS_AGE_GROUP_MOCK);
  const [recentJoined, setRecentJoined] = React.useState(RECENT_JOINED_MEMBERS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [groupFilter, setGroupFilter] = React.useState("All Groups");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listMembers({ search, groupFilter, statusFilter, page });
      setMembers(result?.members ?? MEMBERS_MOCK);
      setStats(result?.stats ?? MEMBERS_STATS_MOCK);
      setStatusBreakdown(result?.statusBreakdown ?? MEMBER_STATUS_BREAKDOWN_MOCK);
      setAgeGroups(result?.ageGroups ?? MEMBERS_AGE_GROUP_MOCK);
      setRecentJoined(result?.recentJoined ?? RECENT_JOINED_MEMBERS_MOCK);
    } catch {
      setMembers(MEMBERS_MOCK);
      setStats(MEMBERS_STATS_MOCK);
      setStatusBreakdown(MEMBER_STATUS_BREAKDOWN_MOCK);
      setAgeGroups(MEMBERS_AGE_GROUP_MOCK);
      setRecentJoined(RECENT_JOINED_MEMBERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, groupFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, groupFilter, statusFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = groupFilter === "All Groups" || m.group === groupFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesSearch && matchesGroup && matchesStatus;
    });
  }, [members, search, groupFilter, statusFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    members: pagedMembers, totalCount: filteredMembers.length, isLoading,
    stats, statusBreakdown, ageGroups, recentJoined,
    search, setSearch, groupFilter, setGroupFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
