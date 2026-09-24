"use client";

import * as React from "react";
import { mensFellowshipService } from "@/services/mensFellowshipService";
import {
  FELLOWSHIP_REPORTS_STATS_MOCK, FELLOWSHIP_REPORTS_LIST_MOCK, FELLOWSHIP_REPORTS_OVERVIEW_MOCK, FELLOWSHIP_RECENT_REPORTS_MOCK,
} from "@/lib/mock/fellowshipReportsMockData";

export function useFellowshipReports() {
  const [stats, setStats] = React.useState(FELLOWSHIP_REPORTS_STATS_MOCK);
  const [reports, setReports] = React.useState(FELLOWSHIP_REPORTS_LIST_MOCK);
  const [overview, setOverview] = React.useState(FELLOWSHIP_REPORTS_OVERVIEW_MOCK);
  const [recentReports, setRecentReports] = React.useState(FELLOWSHIP_RECENT_REPORTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState("All Reports");

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await mensFellowshipService.listReports({ category: activeCategory });
      setStats(result?.stats ?? FELLOWSHIP_REPORTS_STATS_MOCK);
      setReports(result?.reports ?? FELLOWSHIP_REPORTS_LIST_MOCK);
      setOverview(result?.overview ?? FELLOWSHIP_REPORTS_OVERVIEW_MOCK);
      setRecentReports(result?.recentReports ?? FELLOWSHIP_RECENT_REPORTS_MOCK);
    } catch {
      setStats(FELLOWSHIP_REPORTS_STATS_MOCK);
      setReports(FELLOWSHIP_REPORTS_LIST_MOCK);
      setOverview(FELLOWSHIP_REPORTS_OVERVIEW_MOCK);
      setRecentReports(FELLOWSHIP_RECENT_REPORTS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeCategory]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredReports = React.useMemo(() => {
    if (activeCategory === "All Reports") return reports;
    return reports.filter((r) => r.category === activeCategory);
  }, [reports, activeCategory]);

  return {
    stats, reports: filteredReports, overview, recentReports, isLoading,
    activeCategory, setActiveCategory,
    totalCount: reports.length,
  };
}
