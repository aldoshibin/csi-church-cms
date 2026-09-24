"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import {
  CW_REPORTS_STATS_MOCK, SONGS_BY_CATEGORY_MOCK, SETLISTS_BY_SERVICE_TYPE_MOCK, SERVICES_OVERVIEW_MOCK, RECENT_SETLISTS_MOCK,
} from "@/lib/mock/choirWorshipReportsMockData";

export function useChoirWorshipReports() {
  const [stats, setStats] = React.useState(CW_REPORTS_STATS_MOCK);
  const [songsByCategory, setSongsByCategory] = React.useState(SONGS_BY_CATEGORY_MOCK);
  const [setlistsByServiceType, setSetlistsByServiceType] = React.useState(SETLISTS_BY_SERVICE_TYPE_MOCK);
  const [servicesOverview, setServicesOverview] = React.useState(SERVICES_OVERVIEW_MOCK);
  const [recentSetlists, setRecentSetlists] = React.useState(RECENT_SETLISTS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [reportType, setReportType] = React.useState("All Reports");
  const [dateRange, setDateRange] = React.useState("This Week");
  const [ministry, setMinistry] = React.useState("All Ministries");
  const [serviceType, setServiceType] = React.useState("All Services");
  const [servicesOverviewRange, setServicesOverviewRange] = React.useState("This Week");

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.getChoirWorshipReports({ reportType, dateRange, ministry, serviceType });
      setStats(result?.stats ?? CW_REPORTS_STATS_MOCK);
      setSongsByCategory(result?.songsByCategory ?? SONGS_BY_CATEGORY_MOCK);
      setSetlistsByServiceType(result?.setlistsByServiceType ?? SETLISTS_BY_SERVICE_TYPE_MOCK);
      setServicesOverview(result?.servicesOverview ?? SERVICES_OVERVIEW_MOCK);
      setRecentSetlists(result?.recentSetlists ?? RECENT_SETLISTS_MOCK);
    } catch {
      setStats(CW_REPORTS_STATS_MOCK);
      setSongsByCategory(SONGS_BY_CATEGORY_MOCK);
      setSetlistsByServiceType(SETLISTS_BY_SERVICE_TYPE_MOCK);
      setServicesOverview(SERVICES_OVERVIEW_MOCK);
      setRecentSetlists(RECENT_SETLISTS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [reportType, dateRange, ministry, serviceType]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const resetFilters = () => {
    setReportType("All Reports");
    setDateRange("This Week");
    setMinistry("All Ministries");
    setServiceType("All Services");
  };

  return {
    stats, songsByCategory, setlistsByServiceType, servicesOverview, recentSetlists, isLoading,
    reportType, setReportType, dateRange, setDateRange, ministry, setMinistry, serviceType, setServiceType,
    servicesOverviewRange, setServicesOverviewRange,
    applyFilters: refetch, resetFilters,
  };
}
