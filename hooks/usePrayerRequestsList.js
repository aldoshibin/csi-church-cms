"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { PRAYER_REQUESTS_LIST_MOCK, PRAYER_STATS_MOCK } from "@/lib/mock/prayerRequestsMockData";

const PAGE_SIZE = 7;

export function usePrayerRequestsList() {
  const [requests, setRequests] = React.useState(PRAYER_REQUESTS_LIST_MOCK);
  const [stats, setStats] = React.useState(PRAYER_STATS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [groupFilter, setGroupFilter] = React.useState("All Groups");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.listPrayerRequests({ statusFilter, categoryFilter, groupFilter, page });
      setRequests(result?.requests ?? PRAYER_REQUESTS_LIST_MOCK);
      setStats(result?.stats ?? PRAYER_STATS_MOCK);
    } catch {
      setRequests(PRAYER_REQUESTS_LIST_MOCK);
      setStats(PRAYER_STATS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [statusFilter, categoryFilter, groupFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [statusFilter, categoryFilter, groupFilter]);

  const filtered = React.useMemo(() => {
    return requests.filter((r) => {
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      const matchesCategory = categoryFilter === "All Categories" || r.category === categoryFilter;
      return matchesStatus && matchesCategory;
    });
  }, [requests, statusFilter, categoryFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    requests: paged, totalCount: filtered.length, isLoading, stats,
    statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, groupFilter, setGroupFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
