"use client";

import * as React from "react";
import { onlineGivingService } from "@/services/onlineGivingService";
import {
  OG_STATS_MOCK, OG_DONATIONS_OVERVIEW_MOCK, OG_PAYMENT_METHOD_MOCK, OG_FUND_BREAKDOWN_MOCK,
  OG_RECENT_DONATIONS_MOCK, OG_RECENT_DONATIONS_TOTAL_COUNT, OG_QUICK_STATS_MOCK,
  OG_PAYMENT_SUMMARY_MOCK, OG_TOP_DONORS_MOCK,
} from "@/lib/mock/onlineGivingMockData";

export function useOnlineGivingDashboard() {
  const [data, setData] = React.useState({
    stats: OG_STATS_MOCK,
    donationsOverview: OG_DONATIONS_OVERVIEW_MOCK,
    paymentMethod: OG_PAYMENT_METHOD_MOCK,
    fundBreakdown: OG_FUND_BREAKDOWN_MOCK,
    recentDonations: OG_RECENT_DONATIONS_MOCK,
    recentDonationsTotal: OG_RECENT_DONATIONS_TOTAL_COUNT,
    quickStats: OG_QUICK_STATS_MOCK,
    paymentSummary: OG_PAYMENT_SUMMARY_MOCK,
    topDonors: OG_TOP_DONORS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [dateRange] = React.useState("01 May 2025 - 18 May 2025");

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await onlineGivingService.getDashboard({ dateRange });
      setData((prev) => ({ ...prev, ...result }));
    } catch {
      // Backend not wired up in this environment yet — mock data already in state.
    } finally {
      setIsLoading(false);
    }
  }, [dateRange]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return { ...data, isLoading, dateRange, refetch };
}
