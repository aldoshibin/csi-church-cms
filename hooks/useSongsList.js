"use client";

import * as React from "react";
import { choirWorshipService } from "@/services/choirWorshipService";
import { SONGS_LIST_MOCK } from "@/lib/mock/songsMockData";

const PAGE_SIZE = 8;

export function useSongsList() {
  const [songs, setSongs] = React.useState(SONGS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("Songs");
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [languageFilter, setLanguageFilter] = React.useState("All Languages");
  const [statusFilter, setStatusFilter] = React.useState("Active Songs");
  const [page, setPage] = React.useState(1);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await choirWorshipService.listSongs({ search, categoryFilter, languageFilter, statusFilter, page });
      setSongs(result?.songs ?? SONGS_LIST_MOCK);
    } catch {
      setSongs(SONGS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, categoryFilter, languageFilter, statusFilter, page]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, languageFilter, statusFilter]);

  const filtered = React.useMemo(() => {
    return songs.filter((s) => {
      const matchesSearch = !search || s.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || s.category === categoryFilter;
      const matchesLanguage = languageFilter === "All Languages" || s.language === languageFilter;
      const matchesStatus = statusFilter === "Active Songs" ? s.status === "Active" : statusFilter === "Inactive Songs" ? s.status === "Inactive" : true;
      return matchesSearch && matchesCategory && matchesLanguage && matchesStatus;
    });
  }, [songs, search, categoryFilter, languageFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return {
    songs: paged, totalCount: filtered.length, isLoading,
    activeTab, setActiveTab,
    search, setSearch, categoryFilter, setCategoryFilter, languageFilter, setLanguageFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize: PAGE_SIZE,
    refetch,
  };
}
