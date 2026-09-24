"use client";

import * as React from "react";
import { ministriesTeamsService } from "@/services/ministriesTeamsService";
import {
  MINISTRIES_LIST_MOCK, MINISTRY_OVERVIEW_STATS_MOCK, TOP_MINISTRIES_BY_VOLUNTEERS_MOCK, RECENT_MINISTRY_ACTIVITIES_MOCK,
} from "@/lib/mock/ministriesTeamsMockData";

const PAGE_SIZE = 8;
const TABS = ["All Ministries", "Active", "Inactive", "Archived"];

export function useMinistriesTeams() {
  const [ministries, setMinistries] = React.useState(MINISTRIES_LIST_MOCK);
  const [stats] = React.useState(MINISTRY_OVERVIEW_STATS_MOCK);
  const [topMinistries] = React.useState(TOP_MINISTRIES_BY_VOLUNTEERS_MOCK);
  const [recentActivities] = React.useState(RECENT_MINISTRY_ACTIVITIES_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Ministries");
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await ministriesTeamsService.listMinistries({ activeTab, search, statusFilter, categoryFilter, page });
      setMinistries(result?.ministries ?? MINISTRIES_LIST_MOCK);
    } catch {
      setMinistries(MINISTRIES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, statusFilter, categoryFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, statusFilter, categoryFilter]);

  const filtered = React.useMemo(() => {
    return ministries.filter((m) => {
      const matchesTab = activeTab === "All Ministries" || m.status === activeTab;
      const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || m.status === statusFilter;
      const matchesCategory = categoryFilter === "All Categories" || m.category === categoryFilter;
      return matchesTab && matchesSearch && matchesStatus && matchesCategory;
    });
  }, [ministries, activeTab, search, statusFilter, categoryFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    ministries: paged, totalCount: filtered.length, isLoading, stats, topMinistries, recentActivities,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setStatusFilter("All Status"); setCategoryFilter("All Categories"); },
  };
}
