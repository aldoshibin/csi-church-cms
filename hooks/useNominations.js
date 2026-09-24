"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { NOMINATIONS_LIST_MOCK, NOMINATIONS_OVERVIEW_MOCK } from "@/lib/mock/vmNominationsMockData";

export function useNominations() {
  const [nominations, setNominations] = React.useState(NOMINATIONS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [electionFilter, setElectionFilter] = React.useState("All Elections");
  const [positionFilter, setPositionFilter] = React.useState("All Positions");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(8);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await electionManagementService.listNominations({
        search, electionFilter, positionFilter, statusFilter, page, pageSize,
      });
      setNominations(result?.nominations ?? NOMINATIONS_LIST_MOCK);
    } catch {
      setNominations(NOMINATIONS_LIST_MOCK);
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
    return nominations.filter((n) => {
      const matchesSearch = !search
        || n.nomineeName.toLowerCase().includes(search.toLowerCase())
        || n.nomineeMembershipNo.toLowerCase().includes(search.toLowerCase());
      const matchesElection = electionFilter === "All Elections" || n.election === electionFilter;
      const matchesPosition = positionFilter === "All Positions" || n.position === positionFilter;
      const matchesStatus = statusFilter === "All Status" || n.status === statusFilter;
      return matchesSearch && matchesElection && matchesPosition && matchesStatus;
    });
  }, [nominations, search, electionFilter, positionFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    nominations: paged, totalCount: filtered.length, isLoading,
    overview: NOMINATIONS_OVERVIEW_MOCK,
    search, setSearch, electionFilter, setElectionFilter, positionFilter, setPositionFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  };
}
