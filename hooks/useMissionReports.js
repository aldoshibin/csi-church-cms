"use client";

import * as React from "react";
import { missionEvangelismService } from "@/services/missionEvangelismService";
import {
  REPORTS_STATS_MOCK, DONATIONS_BY_FUND_MOCK, DONATIONS_BY_MONTH_MOCK,
  REPORT_CATEGORIES_MOCK, POPULAR_REPORTS_MOCK, RECENTLY_GENERATED_REPORTS_MOCK,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function useMissionReports() {
  const [overview, setOverview] = React.useState({
    stats: REPORTS_STATS_MOCK,
    byFund: DONATIONS_BY_FUND_MOCK,
    overTime: DONATIONS_BY_MONTH_MOCK,
    categories: REPORT_CATEGORIES_MOCK,
    popularReports: POPULAR_REPORTS_MOCK,
    recentlyGenerated: RECENTLY_GENERATED_REPORTS_MOCK,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const data = await missionEvangelismService.getReportsOverview();
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
