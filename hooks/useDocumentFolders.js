"use client";

import * as React from "react";
import { documentFoldersService } from "@/services/documentFoldersService";
import { FOLDERS_LIST_MOCK, FOLDER_STATS_MOCK, FOLDERS_STORAGE_MOCK } from "@/lib/mock/vmDocumentFoldersMockData";

export function useDocumentFolders() {
  const [folders, setFolders] = React.useState(FOLDERS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [view, setView] = React.useState("list");
  const [createdByFilter, setCreatedByFilter] = React.useState("All Users");
  const [folderTypeFilter, setFolderTypeFilter] = React.useState("All Types");
  const [createdOnRange, setCreatedOnRange] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentFoldersService.listFolders({ search, createdByFilter, folderTypeFilter, page, pageSize });
      setFolders(result?.folders ?? FOLDERS_LIST_MOCK);
    } catch {
      setFolders(FOLDERS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, createdByFilter, folderTypeFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, createdByFilter, folderTypeFilter, pageSize]);

  const resetFilters = () => {
    setCreatedByFilter("All Users");
    setFolderTypeFilter("All Types");
    setCreatedOnRange("");
    setPage(1);
  };

  const applyFilters = () => setPage(1);

  const filtered = React.useMemo(() => {
    return folders.filter((folder) => {
      const matchesSearch = !search
        || folder.folderName.toLowerCase().includes(search.toLowerCase())
        || folder.description.toLowerCase().includes(search.toLowerCase());
      const matchesCreatedBy = createdByFilter === "All Users" || folder.createdByName === createdByFilter;
      const matchesType = folderTypeFilter === "All Types" || folder.detail?.folderType === folderTypeFilter;
      return matchesSearch && matchesCreatedBy && matchesType;
    });
  }, [folders, search, createdByFilter, folderTypeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    folders: paged, totalCount: filtered.length, isLoading,
    stats: FOLDER_STATS_MOCK, storageOverview: FOLDERS_STORAGE_MOCK,
    search, setSearch, view, setView,
    createdByFilter, setCreatedByFilter, folderTypeFilter, setFolderTypeFilter,
    createdOnRange, setCreatedOnRange, resetFilters, applyFilters,
    page, setPage, pageSize, setPageSize,
  };
}
