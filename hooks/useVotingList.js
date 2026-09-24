"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { VOTING_LIST_MOCK, VOTING_OVERVIEW_MOCK } from "@/lib/mock/vmVotingMockData";

export function useVotingList() {
  const [voters, setVoters] = React.useState(VOTING_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [electionFilter, setElectionFilter] = React.useState("All Elections");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [membershipFilter, setMembershipFilter] = React.useState("All Membership Types");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(8);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await electionManagementService.listVotingRecords({
        search, electionFilter, statusFilter, membershipFilter, page, pageSize,
      });
      setVoters(result?.voters ?? VOTING_LIST_MOCK);
    } catch {
      setVoters(VOTING_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, electionFilter, statusFilter, membershipFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, electionFilter, statusFilter, membershipFilter, pageSize]);

  const clearFilters = () => {
    setSearch(""); setElectionFilter("All Elections"); setStatusFilter("All Status"); setMembershipFilter("All Membership Types");
  };

  const filtered = React.useMemo(() => {
    return voters.filter((v) => {
      const matchesSearch = !search
        || v.name.toLowerCase().includes(search.toLowerCase())
        || v.membershipNumber.toLowerCase().includes(search.toLowerCase());
      const matchesElection = electionFilter === "All Elections" || v.election === electionFilter;
      const matchesStatus = statusFilter === "All Status" || v.votingStatus === statusFilter;
      const matchesMembership = membershipFilter === "All Membership Types" || v.membershipType === membershipFilter;
      return matchesSearch && matchesElection && matchesStatus && matchesMembership;
    });
  }, [voters, search, electionFilter, statusFilter, membershipFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    voters: paged, totalCount: filtered.length, isLoading,
    overview: VOTING_OVERVIEW_MOCK,
    search, setSearch, electionFilter, setElectionFilter, statusFilter, setStatusFilter,
    membershipFilter, setMembershipFilter, page, setPage, pageSize, clearFilters,
  };
}
