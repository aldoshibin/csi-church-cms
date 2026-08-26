"use client";

import * as React from "react";
import { financeService } from "@/services/financeService";
import { FINANCE_DASHBOARD_MOCK } from "@/lib/mock/financeDashboardMockData";

/**
 * Loads the Finance & Accounting dashboard.
 * Falls back to FINANCE_DASHBOARD_MOCK when the API isn't reachable yet,
 * so the screen stays usable during frontend-only development.
 */
export function useFinanceDashboard() {
  const [data, setData] = React.useState(FINANCE_DASHBOARD_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await financeService.getDashboard();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
      setData(FINANCE_DASHBOARD_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, isLoading, error, refetch };
}
