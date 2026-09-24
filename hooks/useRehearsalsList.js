"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { REHEARSALS_LIST_MOCK, REHEARSALS_UPCOMING_MOCK, TEAM_ATTENDANCE_MOCK } from "@/lib/mock/rehearsalsMockData";

const PAGE_SIZE = 7;

export function useRehearsalsList() {
  const [rehearsals, setRehearsals] = React.useState(REHEARSALS_LIST_MOCK);
  const [upcoming] = React.useState(REHEARSALS_UPCOMING_MOCK);
  const [teamAttendance] = React.useState(TEAM_ATTENDANCE_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [teamFilter, setTeamFilter] = React.useState("All Teams");
  const [locationFilter, setLocationFilter] = React.useState("All Locations");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listRehearsals({ search, teamFilter, locationFilter, statusFilter, page });
      setRehearsals(result?.rehearsals ?? REHEARSALS_LIST_MOCK);
    } catch {
      setRehearsals(REHEARSALS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, teamFilter, locationFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, teamFilter, locationFilter, statusFilter]);

  const filtered = React.useMemo(() => {
    return rehearsals.filter((r) => {
      const matchesSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || r.subtitle.toLowerCase().includes(search.toLowerCase());
      const matchesTeam = teamFilter === "All Teams" || r.team === teamFilter;
      const matchesLocation = locationFilter === "All Locations" || r.location === locationFilter;
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      return matchesSearch && matchesTeam && matchesLocation && matchesStatus;
    });
  }, [rehearsals, search, teamFilter, locationFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    rehearsals: paged, totalCount: filtered.length, isLoading,
    upcoming, teamAttendance,
    search, setSearch, teamFilter, setTeamFilter, locationFilter, setLocationFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
