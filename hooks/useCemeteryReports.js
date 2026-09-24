"use client";

import * as React from "react";
import { cemeteryReportsService } from "@/services/cemeteryReportsService";
import {
  CEMETERY_REPORTS_LIST_MOCK, CEMETERY_REPORTS_OVERVIEW_DONUT_MOCK, FREQUENTLY_USED_CEMETERY_REPORTS_MOCK,
} from "@/lib/mock/vmCemeteryReportsMockData";

export function useCemeteryReports() {
  const [reports, setReports] = React.useState(CEMETERY_REPORTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [typeFilter, setTypeFilter] = React.useState("All Report Types");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [dateRange, setDateRange] = React.useState("");

  React.useEffect(() => {
    let active = true;
    (async () => {
      setIsLoading(true);
      try {
        const result = await cemeteryReportsService.listReports({ search, categoryFilter, typeFilter, statusFilter, dateRange });
        if (active) setReports(result?.reports ?? CEMETERY_REPORTS_LIST_MOCK);
      } catch {
        if (active) setReports(CEMETERY_REPORTS_LIST_MOCK);
      } finally {
        if (active) setIsLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [search, categoryFilter, typeFilter, statusFilter, dateRange]);

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("All Categories");
    setTypeFilter("All Report Types");
    setStatusFilter("All Status");
    setDateRange("");
  };

  const filtered = React.useMemo(() => {
    return reports.filter((r) => {
      const matchesSearch = !search || r.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || r.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || r.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [reports, search, categoryFilter, statusFilter]);

  return {
    reports: filtered, totalCount: filtered.length, isLoading,
    donut: CEMETERY_REPORTS_OVERVIEW_DONUT_MOCK, frequentlyUsed: FREQUENTLY_USED_CEMETERY_REPORTS_MOCK,
    search, setSearch, categoryFilter, setCategoryFilter, typeFilter, setTypeFilter,
    statusFilter, setStatusFilter, dateRange, setDateRange, clearFilters,
  };
}
