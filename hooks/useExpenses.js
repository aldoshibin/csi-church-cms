"use client";

import * as React from "react";
import { expensesService } from "@/services/expensesService";
import {
  EXPENSES_STATS_MOCK, EXPENSE_TREND_MOCK, EXPENSE_BY_CATEGORY_MOCK, EXPENSE_BY_CATEGORY_TOTAL,
  RECENT_EXPENSES_MOCK, RECENT_EXPENSES_TOTAL_COUNT,
} from "@/lib/mock/expensesMockData";

const PAGE_SIZE = 5;

export function useExpenses() {
  const [stats, setStats] = React.useState(EXPENSES_STATS_MOCK);
  const [trend, setTrend] = React.useState(EXPENSE_TREND_MOCK);
  const [byCategory, setByCategory] = React.useState(EXPENSE_BY_CATEGORY_MOCK);
  const [byCategoryTotal, setByCategoryTotal] = React.useState(EXPENSE_BY_CATEGORY_TOTAL);
  const [expenses, setExpenses] = React.useState(RECENT_EXPENSES_MOCK);
  const [totalCount, setTotalCount] = React.useState(RECENT_EXPENSES_TOTAL_COUNT);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await expensesService.listExpenses({ search, page });
      setStats(result?.stats ?? EXPENSES_STATS_MOCK);
      setTrend(result?.trend ?? EXPENSE_TREND_MOCK);
      setByCategory(result?.byCategory ?? EXPENSE_BY_CATEGORY_MOCK);
      setByCategoryTotal(result?.byCategoryTotal ?? EXPENSE_BY_CATEGORY_TOTAL);
      setExpenses(result?.expenses ?? RECENT_EXPENSES_MOCK);
      setTotalCount(result?.totalCount ?? RECENT_EXPENSES_TOTAL_COUNT);
    } catch {
      setStats(EXPENSES_STATS_MOCK);
      setTrend(EXPENSE_TREND_MOCK);
      setByCategory(EXPENSE_BY_CATEGORY_MOCK);
      setByCategoryTotal(EXPENSE_BY_CATEGORY_TOTAL);
      setExpenses(RECENT_EXPENSES_MOCK);
      setTotalCount(RECENT_EXPENSES_TOTAL_COUNT);
    } finally {
      setIsLoading(false);
    }
  }, [search, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredExpenses = React.useMemo(() => {
    if (!search) return expenses;
    const q = search.toLowerCase();
    return expenses.filter((e) => e.description.toLowerCase().includes(q) || e.paidTo.toLowerCase().includes(q) || e.id.toLowerCase().includes(q));
  }, [expenses, search]);

  return {
    stats, trend, byCategory, byCategoryTotal,
    expenses: filteredExpenses, totalCount, isLoading,
    search, setSearch, page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
