"use client";

import * as React from "react";
import { facilitiesService } from "@/services/facilitiesService";
import { FACILITIES_LIST_MOCK, FACILITY_STATUS_OVERVIEW_DONUT_MOCK } from "@/lib/mock/vmFacilitiesMockData";

export function useFacilities() {
  const [facilities, setFacilities] = React.useState(FACILITIES_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await facilitiesService.listFacilities({ search, statusFilter, page, pageSize });
      setFacilities(result?.facilities ?? FACILITIES_LIST_MOCK);
    } catch {
      setFacilities(FACILITIES_LIST_MOCK);
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
    setSearch("");
    setStatusFilter("All Status");
  };

  const filtered = React.useMemo(() => {
    return facilities.filter((f) => {
      const matchesSearch = !search
        || f.name.toLowerCase().includes(search.toLowerCase())
        || f.location.toLowerCase().includes(search.toLowerCase())
        || f.id.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || f.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [facilities, search, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    facilities: paged, totalCount: filtered.length, isLoading,
    donut: FACILITY_STATUS_OVERVIEW_DONUT_MOCK,
    search, setSearch, statusFilter, setStatusFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
