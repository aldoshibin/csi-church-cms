"use client";

import * as React from "react";
import { reportsAnalyticsService } from "@/services/reportsAnalyticsService";
import {
  REPORTS_ANALYTICS_STATS_MOCK, REPORTS_DONATIONS_OVER_TIME_MOCK, REPORTS_DONATIONS_BY_FUND_MOCK,
  REPORTS_DONATIONS_BY_PAYMENT_METHOD_MOCK, REPORTS_MISSION_TRIPS_OVERVIEW_MOCK,
  REPORTS_OUTREACH_PROGRAMS_SUMMARY_MOCK, REPORTS_CEMETERY_OVERVIEW_MOCK,
  REPORTS_YEARLY_COMPARISON_MOCK, REPORTS_RECENT_REPORTS_MOCK,
} from "@/lib/mock/reportsAnalyticsMockData";

export function useReportsAnalytics() {
  const [overview, setOverview] = React.useState({
    stats: REPORTS_ANALYTICS_STATS_MOCK,
    donationsOverTime: REPORTS_DONATIONS_OVER_TIME_MOCK,
    donationsByFund: REPORTS_DONATIONS_BY_FUND_MOCK,
    donationsByPaymentMethod: REPORTS_DONATIONS_BY_PAYMENT_METHOD_MOCK,
    missionTripsOverview: REPORTS_MISSION_TRIPS_OVERVIEW_MOCK,
    outreachProgramsSummary: REPORTS_OUTREACH_PROGRAMS_SUMMARY_MOCK,
    cemeteryOverview: REPORTS_CEMETERY_OVERVIEW_MOCK,
    yearlyComparison: REPORTS_YEARLY_COMPARISON_MOCK,
    recentReports: REPORTS_RECENT_REPORTS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const data = await reportsAnalyticsService.getOverview();
        if (active && data) setOverview((prev) => ({ ...prev, ...data }));
      } catch {
        // keep mock fallback
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return { ...overview, isLoading };
}
