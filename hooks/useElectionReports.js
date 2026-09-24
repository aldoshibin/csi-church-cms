"use client";

import * as React from "react";
import { electionManagementService } from "@/services/electionManagementService";
import {
  ELECTION_REPORTS_STATS_MOCK, RECENT_REPORTS_FULL_MOCK, REPORTS_OVER_TIME_MOCK,
  REPORTS_BY_FORMAT_MOCK, REPORT_CATEGORIES_MOCK,
} from "@/lib/mock/vmElectionReportsMockData";

export function useElectionReports() {
  const [reports, setReports] = React.useState(RECENT_REPORTS_FULL_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [electionFilter, setElectionFilter] = React.useState("All Elections");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await electionManagementService.listElectionReports({
        search, electionFilter, typeFilter, page, pageSize,
      });
      setReports(result?.reports ?? RECENT_REPORTS_FULL_MOCK);
    } catch {
      setReports(RECENT_REPORTS_FULL_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, electionFilter, typeFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, electionFilter, typeFilter, pageSize]);

  const filtered = React.useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch = !search || r.name.toLowerCase().includes(search.toLowerCase());
      const matchesElection = electionFilter === "All Elections" || r.election === electionFilter;
      const matchesType = typeFilter === "All Types" || r.type === typeFilter;
      return matchesSearch && matchesElection && matchesType;
    });
  }, [reports, search, electionFilter, typeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    reports: paged, totalCount: filtered.length, isLoading,
    stats: ELECTION_REPORTS_STATS_MOCK,
    overTime: REPORTS_OVER_TIME_MOCK, byFormat: REPORTS_BY_FORMAT_MOCK, categories: REPORT_CATEGORIES_MOCK,
    search, setSearch, electionFilter, setElectionFilter, typeFilter, setTypeFilter, page, setPage, pageSize,
  };
}
