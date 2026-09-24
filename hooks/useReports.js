"use client";

import * as React from "react";
import { reportsService } from "@/services/reportsService";
import {
  REPORTS_STATS_MOCK, REPORTS_MOCK, REPORT_CATEGORIES_SUMMARY_MOCK, MEMBER_OVERVIEW_MOCK, GIVING_OVERVIEW_MOCK,
} from "@/lib/mock/reportsMockData";

const PAGE_SIZE = 10;

export function useReports() {
  const [stats, setStats] = React.useState(REPORTS_STATS_MOCK);
  const [reports, setReports] = React.useState(REPORTS_MOCK);
  const [categoriesSummary, setCategoriesSummary] = React.useState(REPORT_CATEGORIES_SUMMARY_MOCK);
  const [memberOverview, setMemberOverview] = React.useState(MEMBER_OVERVIEW_MOCK);
  const [givingOverview, setGivingOverview] = React.useState(GIVING_OVERVIEW_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState("This Month");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await reportsService.getOverview({ search, categoryFilter, dateRange, page });
      setStats(result?.stats ?? REPORTS_STATS_MOCK);
      setReports(result?.reports ?? REPORTS_MOCK);
      setCategoriesSummary(result?.categoriesSummary ?? REPORT_CATEGORIES_SUMMARY_MOCK);
      setMemberOverview(result?.memberOverview ?? MEMBER_OVERVIEW_MOCK);
      setGivingOverview(result?.givingOverview ?? GIVING_OVERVIEW_MOCK);
    } catch {
      setStats(REPORTS_STATS_MOCK);
      setReports(REPORTS_MOCK);
      setCategoriesSummary(REPORT_CATEGORIES_SUMMARY_MOCK);
      setMemberOverview(MEMBER_OVERVIEW_MOCK);
      setGivingOverview(GIVING_OVERVIEW_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, categoryFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, dateRange]);

  const filteredReports = React.useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch = !search || r.name.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || r.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [reports, search, categoryFilter]);

  const pagedReports = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredReports.slice(start, start + PAGE_SIZE);
  }, [filteredReports, page]);

  return {
    stats, reports: pagedReports, totalCount: filteredReports.length, isLoading,
    categoriesSummary, memberOverview, givingOverview,
    search, setSearch, categoryFilter, setCategoryFilter, dateRange, setDateRange,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
