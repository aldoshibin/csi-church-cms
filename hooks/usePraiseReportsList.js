"use client";

import * as React from "react";
import { prayerMinistryService } from "@/services/prayerMinistryService";
import { PRAISE_REPORTS_LIST_MOCK, PRAISE_BY_CATEGORY_MOCK, TOP_PRAISE_CONTRIBUTORS_MOCK } from "@/lib/mock/praiseReportsMockData";

const PAGE_SIZE = 7;

export function usePraiseReportsList() {
  const [reports, setReports] = React.useState(PRAISE_REPORTS_LIST_MOCK);
  const [byCategory] = React.useState(PRAISE_BY_CATEGORY_MOCK);
  const [topContributors] = React.useState(TOP_PRAISE_CONTRIBUTORS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [dateRange, setDateRange] = React.useState("May 20, 2026 - May 26, 2026");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [sharedByFilter, setSharedByFilter] = React.useState("All Members");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await prayerMinistryService.listPraiseReports({ dateRange, categoryFilter, sharedByFilter, statusFilter, page });
      setReports(result?.reports ?? PRAISE_REPORTS_LIST_MOCK);
    } catch {
      setReports(PRAISE_REPORTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [dateRange, categoryFilter, sharedByFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filtered = React.useMemo(() => {
    return reports.filter((r) => {
      const matchesCategory = categoryFilter === "All Categories" || r.category === categoryFilter;
      const matchesSharedBy = sharedByFilter === "All Members" || r.sharedBy === sharedByFilter;
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      return matchesCategory && matchesSharedBy && matchesStatus;
    });
  }, [reports, categoryFilter, sharedByFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    reports: paged, totalCount: filtered.length, isLoading, byCategory, topContributors,
    dateRange, setDateRange, categoryFilter, setCategoryFilter, sharedByFilter, setSharedByFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    applyFilters: refetch,
    resetFilters: () => { setCategoryFilter("All Categories"); setSharedByFilter("All Members"); setStatusFilter("All Status"); },
  };
}
