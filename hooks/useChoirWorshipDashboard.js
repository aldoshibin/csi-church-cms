"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import {
  CW_DASHBOARD_STATS_MOCK, CW_MEMBERS_MOCK, CW_TEAM_DISTRIBUTION_MOCK, CW_ACTIVITY_OVERVIEW_MOCK,
  CW_UPCOMING_REHEARSALS_MOCK, CW_UPCOMING_SERVICES_MOCK,
} from "@/lib/mock/choirWorshipMockData";

const PAGE_SIZE = 5;

export function useChoirWorshipDashboard() {
  const [stats, setStats] = React.useState(CW_DASHBOARD_STATS_MOCK);
  const [members, setMembers] = React.useState(CW_MEMBERS_MOCK);
  const [teamDistribution, setTeamDistribution] = React.useState(CW_TEAM_DISTRIBUTION_MOCK);
  const [activityOverview, setActivityOverview] = React.useState(CW_ACTIVITY_OVERVIEW_MOCK);
  const [upcomingRehearsals, setUpcomingRehearsals] = React.useState(CW_UPCOMING_REHEARSALS_MOCK);
  const [upcomingServices, setUpcomingServices] = React.useState(CW_UPCOMING_SERVICES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [memberTab, setMemberTab] = React.useState("All Members");
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All Roles");
  const [teamFilter, setTeamFilter] = React.useState("All Teams");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.getDashboard({ memberTab, search, roleFilter, teamFilter, statusFilter, page });
      setStats(result?.stats ?? CW_DASHBOARD_STATS_MOCK);
      setMembers(result?.members ?? CW_MEMBERS_MOCK);
      setTeamDistribution(result?.teamDistribution ?? CW_TEAM_DISTRIBUTION_MOCK);
      setActivityOverview(result?.activityOverview ?? CW_ACTIVITY_OVERVIEW_MOCK);
      setUpcomingRehearsals(result?.upcomingRehearsals ?? CW_UPCOMING_REHEARSALS_MOCK);
      setUpcomingServices(result?.upcomingServices ?? CW_UPCOMING_SERVICES_MOCK);
    } catch {
      setStats(CW_DASHBOARD_STATS_MOCK);
      setMembers(CW_MEMBERS_MOCK);
      setTeamDistribution(CW_TEAM_DISTRIBUTION_MOCK);
      setActivityOverview(CW_ACTIVITY_OVERVIEW_MOCK);
      setUpcomingRehearsals(CW_UPCOMING_REHEARSALS_MOCK);
      setUpcomingServices(CW_UPCOMING_SERVICES_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [memberTab, search, roleFilter, teamFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [memberTab, search, roleFilter, teamFilter, statusFilter]);

  const filteredMembers = React.useMemo(() => {
    return members.filter((m) => {
      const matchesTab = memberTab === "All Members" || (memberTab === "Choir Members" ? m.team === "Choir" : m.team === "Worship Team");
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "All Roles" || m.role === roleFilter;
      const matchesTeam = teamFilter === "All Teams" || m.team === teamFilter;
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      return matchesTab && matchesSearch && matchesRole && matchesTeam && matchesStatus;
    });
  }, [members, memberTab, search, roleFilter, teamFilter, statusFilter]);

  const pagedMembers = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredMembers.slice(start, start + PAGE_SIZE);
  }, [filteredMembers, page]);

  return {
    stats, teamDistribution, activityOverview, upcomingRehearsals, upcomingServices, isLoading,
    members: pagedMembers, totalCount: filteredMembers.length,
    memberTab, setMemberTab, search, setSearch, roleFilter, setRoleFilter, teamFilter, setTeamFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize: PAGE_SIZE,
  };
}
