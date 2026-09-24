"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { DONATIONS_LIST_MOCK } from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionDonations() {
  const [donations, setDonations] = React.useState(DONATIONS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [fundFilter, setFundFilter] = React.useState("All Funds");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await missionEvangelismService.listDonations({ search, fundFilter, page, pageSize });
      setDonations(result?.donations ?? DONATIONS_LIST_MOCK);
    } catch {
      setDonations(DONATIONS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, fundFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, fundFilter, pageSize]);

  const clearFilters = () => {
    setSearch(""); setFundFilter("All Funds");
  };

  const filtered = React.useMemo(() => {
    return donations.filter((d) => {
      const matchesSearch = !search
        || d.donorName.toLowerCase().includes(search.toLowerCase())
        || d.id.toLowerCase().includes(search.toLowerCase());
      const matchesFund = fundFilter === "All Funds" || d.fund === fundFilter;
      return matchesSearch && matchesFund;
    });
  }, [donations, search, fundFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    donations: paged, totalCount: filtered.length, isLoading,
    search, setSearch, fundFilter, setFundFilter, page, setPage, pageSize, clearFilters,
  };
}
