"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import {
  OUTREACH_ACTIVITIES_LIST_MOCK, OUTREACH_BY_CATEGORY_MOCK,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function useOutreachActivities() {
  const [activities, setActivities] = React.useState(OUTREACH_ACTIVITIES_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await missionEvangelismService.listOutreachActivities({
        search, categoryFilter, statusFilter, page, pageSize,
      });
      setActivities(result?.activities ?? OUTREACH_ACTIVITIES_LIST_MOCK);
    } catch {
      setActivities(OUTREACH_ACTIVITIES_LIST_MOCK);
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
    return activities.filter((a) => {
      const matchesSearch = !search || a.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || a.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [activities, search, categoryFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    activities: paged, totalCount: filtered.length, isLoading,
    overview: OUTREACH_BY_CATEGORY_MOCK,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, clearFilters,
  };
}
