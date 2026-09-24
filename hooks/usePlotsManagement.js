"use client";

import * as React from "react";
import { cemeteryService } from "@/services/cemeteryService";
import { PLOTS_LIST_MOCK, PLOTS_OCCUPANCY_DONUT_MOCK, PLOTS_BY_SECTION_MOCK, PLOT_STATUS_TABS } from "@/lib/mock/vmCemeteryMockData";

export function usePlotsManagement() {
  const [plots, setPlots] = React.useState(PLOTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Plots");
  const [search, setSearch] = React.useState("");
  const [sectionFilter, setSectionFilter] = React.useState("All Sections");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await cemeteryService.listPlots({ activeTab, search, sectionFilter, statusFilter, typeFilter, page, pageSize });
      setPlots(result?.plots ?? PLOTS_LIST_MOCK);
    } catch {
      setPlots(PLOTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, sectionFilter, statusFilter, typeFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, sectionFilter, statusFilter, typeFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setSectionFilter("All Sections");
    setStatusFilter("All Status");
    setTypeFilter("All Types");
  };

  const filtered = React.useMemo(() => {
    return plots.filter((p) => {
      const matchesTab = activeTab === "All Plots" || p.status === activeTab;
      const matchesSearch = !search
        || p.plotNumber.toLowerCase().includes(search.toLowerCase())
        || p.section.toLowerCase().includes(search.toLowerCase())
        || (p.row ?? "").toLowerCase().includes(search.toLowerCase());
      const matchesSection = sectionFilter === "All Sections" || p.section === sectionFilter;
      const matchesStatus = statusFilter === "All Status" || p.status === statusFilter;
      const matchesType = typeFilter === "All Types" || p.plotType === typeFilter;
      return matchesTab && matchesSearch && matchesSection && matchesStatus && matchesType;
    });
  }, [plots, activeTab, search, sectionFilter, statusFilter, typeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    plots: paged, totalCount: filtered.length, isLoading,
    donut: PLOTS_OCCUPANCY_DONUT_MOCK, plotsBySection: PLOTS_BY_SECTION_MOCK,
    tabs: PLOT_STATUS_TABS, activeTab, setActiveTab,
    search, setSearch, sectionFilter, setSectionFilter, statusFilter, setStatusFilter,
    typeFilter, setTypeFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
