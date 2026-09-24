"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { CANDIDATES_LIST_MOCK, CANDIDATES_STATS_MOCK, CANDIDATES_OVERVIEW_MOCK } from "@/lib/mock/vmCandidatesMockData";

export function useCandidates() {
  const [candidates, setCandidates] = React.useState(CANDIDATES_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [electionFilter, setElectionFilter] = React.useState("All Elections");
  const [positionFilter, setPositionFilter] = React.useState("All Positions");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(6);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await electionManagementService.listCandidates({
        search, electionFilter, positionFilter, statusFilter, page, pageSize,
      });
      setCandidates(result?.candidates ?? CANDIDATES_LIST_MOCK);
    } catch {
      setCandidates(CANDIDATES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, electionFilter, positionFilter, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, electionFilter, positionFilter, statusFilter, pageSize]);

  const clearFilters = () => {
    setSearch(""); setElectionFilter("All Elections"); setPositionFilter("All Positions"); setStatusFilter("All Status");
  };

  const filtered = React.useMemo(() => {
    return candidates.filter((c) => {
      const matchesSearch = !search
        || c.name.toLowerCase().includes(search.toLowerCase())
        || c.email.toLowerCase().includes(search.toLowerCase());
      const matchesElection = electionFilter === "All Elections" || c.election === electionFilter;
      const matchesPosition = positionFilter === "All Positions" || c.position === positionFilter;
      const matchesStatus = statusFilter === "All Status" || c.status === statusFilter;
      return matchesSearch && matchesElection && matchesPosition && matchesStatus;
    });
  }, [candidates, search, electionFilter, positionFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    candidates: paged, totalCount: filtered.length, isLoading,
    stats: CANDIDATES_STATS_MOCK, overview: CANDIDATES_OVERVIEW_MOCK,
    search, setSearch, electionFilter, setElectionFilter, positionFilter, setPositionFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  };
}
