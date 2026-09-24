"use client";

import * as React from "react";
import { documentTrashService } from "@/services/documentTrashService";
import { TRASH_LIST_MOCK, TRASH_STORAGE_MOCK } from "@/lib/mock/vmDocumentTrashMockData";
import { FOLDER_OPTIONS, TABLE_CATEGORY_OPTIONS } from "@/lib/mock/vmDocumentManagementMockData";
import { TRASH_TYPE_FILTER_OPTIONS } from "@/lib/mock/vmDocumentTrashMockData";

export function useTrashDocuments() {
  const [items, setItems] = React.useState(TRASH_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentTrashService.listTrash({ search, folderFilter, typeFilter, categoryFilter, page, pageSize });
      setItems(result?.items ?? TRASH_LIST_MOCK);
    } catch {
      setItems(TRASH_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, categoryFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, folderFilter, typeFilter, categoryFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
  };

  const filtered = React.useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = !search || item.documentName.toLowerCase().includes(search.toLowerCase());
      const matchesFolder = folderFilter === "All Folders" || item.originalFolder === folderFilter;
      const matchesType = typeFilter === "All Types" || item.fileType === typeFilter;
      return matchesSearch && matchesFolder && matchesType;
    });
  }, [items, search, folderFilter, typeFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    items: paged, totalCount: filtered.length, isLoading,
    storageOverview: TRASH_STORAGE_MOCK,
    typeOptions: TRASH_TYPE_FILTER_OPTIONS, folderOptions: FOLDER_OPTIONS, categoryOptions: TABLE_CATEGORY_OPTIONS,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    page, setPage, pageSize, setPageSize,
  };
}
