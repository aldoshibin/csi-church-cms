"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import { PROGRAMS_LIST_MOCK } from "@/lib/mock/vmMissionEvangelismMockData";

export function useOutreachPrograms() {
  const [programs, setPrograms] = React.useState(PROGRAMS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(8);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await missionEvangelismService.listOutreachPrograms({
        search, categoryFilter, statusFilter, page, pageSize,
      });
      setPrograms(result?.programs ?? PROGRAMS_LIST_MOCK);
    } catch {
      setPrograms(PROGRAMS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, categoryFilter, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, statusFilter, pageSize]);

  const clearFilters = () => {
    setSearch(""); setCategoryFilter("All Categories"); setStatusFilter("All Status");
  };

  const filtered = React.useMemo(() => {
    return programs.filter((p) => {
      const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || p.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || p.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [programs, search, categoryFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    programs: paged, totalCount: filtered.length, isLoading,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, clearFilters,
  };
}
