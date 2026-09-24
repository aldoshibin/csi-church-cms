"use client";

import * as React from "react";
import { auditLogsService } from "@/services/auditLogsService";
import { AUDIT_LOGS_MOCK, AUDIT_LOGS_SUMMARY_MOCK, TOP_ACTIVE_USERS_MOCK, AUDIT_LOGS_TOP_STATS_MOCK } from "@/lib/mock/auditLogsMockData";

const PAGE_SIZE = 10;

export function useAuditLogs() {
  const [logs, setLogs] = React.useState(AUDIT_LOGS_MOCK);
  const [summary, setSummary] = React.useState(AUDIT_LOGS_SUMMARY_MOCK);
  const [topStats, setTopStats] = React.useState(AUDIT_LOGS_TOP_STATS_MOCK);
  const [topActiveUsers, setTopActiveUsers] = React.useState(TOP_ACTIVE_USERS_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [moduleFilter, setModuleFilter] = React.useState("All Modules");
  const [actionFilter, setActionFilter] = React.useState("All Actions");
  const [userFilter, setUserFilter] = React.useState("All Users");
  const [dateRange, setDateRange] = React.useState("01 May 2025 - 18 May 2025");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await auditLogsService.listLogs({ search, module: moduleFilter, action: actionFilter, user: userFilter, dateRange, page });
      setLogs(result?.logs ?? AUDIT_LOGS_MOCK);
      setSummary(result?.summary ?? AUDIT_LOGS_SUMMARY_MOCK);
      setTopStats(result?.topStats ?? AUDIT_LOGS_TOP_STATS_MOCK);
      setTopActiveUsers(result?.topActiveUsers ?? TOP_ACTIVE_USERS_MOCK);
    } catch {
      setLogs(AUDIT_LOGS_MOCK);
      setSummary(AUDIT_LOGS_SUMMARY_MOCK);
      setTopStats(AUDIT_LOGS_TOP_STATS_MOCK);
      setTopActiveUsers(TOP_ACTIVE_USERS_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, moduleFilter, actionFilter, userFilter, dateRange, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, moduleFilter, actionFilter, userFilter]);

  const filteredLogs = React.useMemo(() => {
    return logs.filter((log) => {
      const matchesSearch = !search
        || log.user.toLowerCase().includes(search.toLowerCase())
        || log.details.toLowerCase().includes(search.toLowerCase())
        || log.recordId.toLowerCase().includes(search.toLowerCase());
      const matchesModule = moduleFilter === "All Modules" || log.module === moduleFilter;
      const matchesAction = actionFilter === "All Actions" || log.action === actionFilter;
      const matchesUser = userFilter === "All Users" || log.user === userFilter;
      return matchesSearch && matchesModule && matchesAction && matchesUser;
    });
  }, [logs, search, moduleFilter, actionFilter, userFilter]);

  const pagedLogs = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredLogs.slice(start, start + PAGE_SIZE).map((log, i) => ({ ...log, serial: start + i + 1 }));
  }, [filteredLogs, page]);

  return {
    logs: pagedLogs, totalCount: filteredLogs.length, summary, topStats, topActiveUsers, isLoading,
    search, setSearch,
    moduleFilter, setModuleFilter, actionFilter, setActionFilter, userFilter, setUserFilter,
    dateRange, setDateRange,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
