"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import { POSITIONS_LIST_MOCK } from "@/lib/mock/vmPositionsMockData";

export function usePositions() {
  const [positions, setPositions] = React.useState(POSITIONS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await electionManagementService.listPositions({ search, statusFilter, page, pageSize });
      setPositions(result?.positions ?? POSITIONS_LIST_MOCK);
    } catch {
      setPositions(POSITIONS_LIST_MOCK);
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

  const filtered = React.useMemo(() => {
    return positions.filter((pos) => {
      const matchesSearch = !search
        || pos.name.toLowerCase().includes(search.toLowerCase())
        || pos.description.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || pos.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [positions, search, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    positions: paged, totalCount: filtered.length, isLoading,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize, setPageSize,
    selectedRows, setSelectedRows,
  };
}
