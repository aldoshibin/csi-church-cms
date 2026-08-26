"use client";

import * as React from "react";
import { incomeService } from "@/services/incomeService";
import {
  INCOME_STATS_MOCK, INCOME_TREND_MOCK, INCOME_BY_CATEGORY_MOCK, INCOME_BY_CATEGORY_TOTAL,
  RECENT_INCOME_MOCK, RECENT_INCOME_TOTAL_COUNT,
} from "@/lib/mock/incomeMockData";

const PAGE_SIZE = 5;

export function useIncome() {
  const [stats, setStats] = React.useState(INCOME_STATS_MOCK);
  const [trend, setTrend] = React.useState(INCOME_TREND_MOCK);
  const [byCategory, setByCategory] = React.useState(INCOME_BY_CATEGORY_MOCK);
  const [byCategoryTotal, setByCategoryTotal] = React.useState(INCOME_BY_CATEGORY_TOTAL);
  const [income, setIncome] = React.useState(RECENT_INCOME_MOCK);
  const [totalCount, setTotalCount] = React.useState(RECENT_INCOME_TOTAL_COUNT);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await incomeService.listIncome({ search, page });
      setStats(result?.stats ?? INCOME_STATS_MOCK);
      setTrend(result?.trend ?? INCOME_TREND_MOCK);
      setByCategory(result?.byCategory ?? INCOME_BY_CATEGORY_MOCK);
      setByCategoryTotal(result?.byCategoryTotal ?? INCOME_BY_CATEGORY_TOTAL);
      setIncome(result?.income ?? RECENT_INCOME_MOCK);
      setTotalCount(result?.totalCount ?? RECENT_INCOME_TOTAL_COUNT);
    } catch {
      setStats(INCOME_STATS_MOCK);
      setTrend(INCOME_TREND_MOCK);
      setByCategory(INCOME_BY_CATEGORY_MOCK);
      setByCategoryTotal(INCOME_BY_CATEGORY_TOTAL);
      setIncome(RECENT_INCOME_MOCK);
      setTotalCount(RECENT_INCOME_TOTAL_COUNT);
    } finally {
      setIsLoading(false);
    }
  }, [search, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredIncome = React.useMemo(() => {
    if (!search) return income;
    const q = search.toLowerCase();
    return income.filter((i) => i.description.toLowerCase().includes(q) || i.receivedFrom.toLowerCase().includes(q) || i.id.toLowerCase().includes(q));
  }, [income, search]);

  return {
    stats, trend, byCategory, byCategoryTotal,
    income: filteredIncome, totalCount, isLoading,
    search, setSearch, page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
