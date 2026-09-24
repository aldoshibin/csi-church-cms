"use client";

import * as React from "react";
import { starredDocumentsService } from "@/services/starredDocumentsService";
import { STARRED_DOCUMENTS_LIST_MOCK, STARRED_DOCUMENTS_STATS_MOCK, STARRED_DOCUMENTS_STORAGE_MOCK } from "@/lib/mock/vmStarredDocumentsMockData";

export function useStarredDocuments() {
  const [documents, setDocuments] = React.useState(STARRED_DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState("");
  const [starredByFilter, setStarredByFilter] = React.useState("All Users");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await starredDocumentsService.listStarredDocuments({
        search, folderFilter, typeFilter, categoryFilter, starredByFilter, page, pageSize,
      });
      setDocuments(result?.documents ?? STARRED_DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(STARRED_DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, categoryFilter, starredByFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, folderFilter, typeFilter, categoryFilter, starredByFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
  };

  const resetAdvancedFilters = () => {
    setDateRange("");
    setStarredByFilter("All Users");
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
      const matchesStarredBy = starredByFilter === "All Users" || doc.activityByName === starredByFilter;
      return matchesSearch && matchesFolder && matchesType && matchesCategory && matchesStarredBy;
    });
  }, [documents, search, folderFilter, typeFilter, categoryFilter, starredByFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    stats: STARRED_DOCUMENTS_STATS_MOCK, storageOverview: STARRED_DOCUMENTS_STORAGE_MOCK,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, starredByFilter, setStarredByFilter,
    resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize, setPageSize,
  };
}
