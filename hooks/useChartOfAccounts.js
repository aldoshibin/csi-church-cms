"use client";

import * as React from "react";
import { chartOfAccountsService } from "@/services/chartOfAccountsService";
import { CHART_OF_ACCOUNTS_MOCK, CHART_OF_ACCOUNTS_STATS_MOCK } from "@/lib/mock/chartOfAccountsMockData";

const PAGE_SIZE = 10;

export function useChartOfAccounts() {
  const [accounts, setAccounts] = React.useState(CHART_OF_ACCOUNTS_MOCK);
  const [stats, setStats] = React.useState(CHART_OF_ACCOUNTS_STATS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [view, setView] = React.useState("list"); // "list" | "grid"

  const [collapsedCodes, setCollapsedCodes] = React.useState([]);
  const toggleCollapse = (code) =>
    setCollapsedCodes((prev) => (prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]));

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await chartOfAccountsService.listAccounts({ search, type: typeFilter, category: categoryFilter, status: statusFilter, page });
      setAccounts(result?.accounts ?? CHART_OF_ACCOUNTS_MOCK);
      setStats(result?.stats ?? CHART_OF_ACCOUNTS_STATS_MOCK);
    } catch {
      setAccounts(CHART_OF_ACCOUNTS_MOCK);
      setStats(CHART_OF_ACCOUNTS_STATS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, typeFilter, categoryFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredAccounts = React.useMemo(() => {
    return accounts.filter((a) => {
      const matchesSearch = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.code.includes(search);
      const matchesType = typeFilter === "All Types" || a.type === typeFilter;
      const matchesCategory = categoryFilter === "All Categories" || a.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
      const parentCollapsed = collapsedCodes.some((code) => a.code !== code && a.code.startsWith(code) && a.level > 0);
      return matchesSearch && matchesType && matchesCategory && matchesStatus && !parentCollapsed;
    });
  }, [accounts, search, typeFilter, categoryFilter, statusFilter, collapsedCodes]);

  return {
    stats, isLoading,
    accounts: filteredAccounts, totalCount: accounts.length,
    search, setSearch, typeFilter, setTypeFilter, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE, view, setView,
    collapsedCodes, toggleCollapse,
    refetch,
  };
}
