"use client";

import * as React from "react";
import { recentDocumentsService } from "@/services/recentDocumentsService";
import { RECENT_DOCUMENTS_LIST_MOCK, RECENT_DOCUMENTS_STATS_MOCK, RECENT_DOCUMENTS_STORAGE_MOCK } from "@/lib/mock/vmRecentDocumentsMockData";

export function useRecentDocuments() {
  const [documents, setDocuments] = React.useState(RECENT_DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState("");
  const [viewedByFilter, setViewedByFilter] = React.useState("All Users");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await recentDocumentsService.listRecentDocuments({
        search, folderFilter, typeFilter, categoryFilter, viewedByFilter, page, pageSize,
      });
      setDocuments(result?.documents ?? RECENT_DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(RECENT_DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, categoryFilter, viewedByFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, folderFilter, typeFilter, categoryFilter, viewedByFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
  };

  const resetAdvancedFilters = () => {
    setDateRange("");
    setViewedByFilter("All Users");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setPage(1);
  };

  const applyAdvancedFilters = () => setPage(1);

  const filtered = React.useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = !search || doc.documentName.toLowerCase().includes(search.toLowerCase());
      const matchesFolder = folderFilter === "All Folders" || doc.folder === folderFilter;
      const matchesType = typeFilter === "All Types" || doc.fileType === typeFilter;
      const matchesCategory = categoryFilter === "All Categories" || doc.detail?.category === categoryFilter;
      const matchesViewedBy = viewedByFilter === "All Users" || doc.activityByName === viewedByFilter;
      return matchesSearch && matchesFolder && matchesType && matchesCategory && matchesViewedBy;
    });
  }, [documents, search, folderFilter, typeFilter, categoryFilter, viewedByFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    stats: RECENT_DOCUMENTS_STATS_MOCK, storageOverview: RECENT_DOCUMENTS_STORAGE_MOCK,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, viewedByFilter, setViewedByFilter,
    resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize, setPageSize,
  };
}
