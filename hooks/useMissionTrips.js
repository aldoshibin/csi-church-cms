"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { MISSION_TRIPS_LIST_MOCK } from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionTrips() {
  const [trips, setTrips] = React.useState(MISSION_TRIPS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await missionEvangelismService.listMissionTrips({ search, statusFilter, page, pageSize });
      setTrips(result?.trips ?? MISSION_TRIPS_LIST_MOCK);
    } catch {
      setTrips(MISSION_TRIPS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, pageSize]);

  const clearFilters = () => {
    setSearch(""); setStatusFilter("All Status");
  };

  const filtered = React.useMemo(() => {
    return trips.filter((t) => {
      const matchesSearch = !search
        || t.name.toLowerCase().includes(search.toLowerCase())
        || t.destination.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [trips, search, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    trips: paged, totalCount: filtered.length, isLoading,
    search, setSearch, statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  };
}
