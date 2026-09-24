"use client";

import * as React from "react";
import { announcementsService } from "@/services/announcementsService";
import {
  ANNOUNCEMENTS_LIST_MOCK, ANNOUNCEMENT_LIST_STATS_MOCK, ANNOUNCEMENT_CATEGORIES_SIDEBAR_MOCK,
} from "@/lib/mock/vmAnnouncementsMockData";

const PAGE_SIZE = 8;
const TABS = ["All Announcements", "Scheduled", "Published", "Drafts", "Expired"];

export function useAnnouncements() {
  const [announcements, setAnnouncements] = React.useState(ANNOUNCEMENTS_LIST_MOCK);
  const [stats] = React.useState(ANNOUNCEMENT_LIST_STATS_MOCK);
  const [categories] = React.useState(ANNOUNCEMENT_CATEGORIES_SIDEBAR_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Announcements");
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [audienceFilter, setAudienceFilter] = React.useState("All Audience");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await announcementsService.listAnnouncements({ activeTab, search, statusFilter, categoryFilter, audienceFilter, page });
      setAnnouncements(result?.announcements ?? ANNOUNCEMENTS_LIST_MOCK);
    } catch {
      setAnnouncements(ANNOUNCEMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, statusFilter, categoryFilter, audienceFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, statusFilter, categoryFilter, audienceFilter]);

  const filtered = React.useMemo(() => {
    return announcements.filter((a) => {
      const matchesTab =
        activeTab === "All Announcements" ? true :
        activeTab === "Scheduled" ? a.status === "Scheduled" :
        activeTab === "Published" ? a.status === "Published" :
        activeTab === "Drafts" ? a.status === "Draft" :
        activeTab === "Expired" ? a.status === "Expired" : true;
      const matchesSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
      const matchesCategory = categoryFilter === "All Categories" || a.category === categoryFilter;
      const matchesAudience = audienceFilter === "All Audience" || a.audience === audienceFilter;
      return matchesTab && matchesSearch && matchesStatus && matchesCategory && matchesAudience;
    });
  }, [announcements, activeTab, search, statusFilter, categoryFilter, audienceFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    announcements: paged, totalCount: filtered.length, isLoading, stats, categories,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, audienceFilter, setAudienceFilter,
    page, setPage, pageSize: PAGE_SIZE,
    resetFilters: () => { setSearch(""); setStatusFilter("All Status"); setCategoryFilter("All Categories"); setAudienceFilter("All Audience"); },
  };
}
