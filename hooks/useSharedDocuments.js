"use client";

import * as React from "react";
import { sharedDocumentsService } from "@/services/sharedDocumentsService";
import { SHARED_DOCUMENTS_LIST_MOCK, SHARED_STORAGE_MOCK } from "@/lib/mock/vmSharedDocumentsMockData";

export function useSharedDocuments() {
  const [documents, setDocuments] = React.useState(SHARED_DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState("");
  const [sharedByFilter, setSharedByFilter] = React.useState("All Users");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await sharedDocumentsService.listSharedDocuments({
        search, folderFilter, typeFilter, categoryFilter, sharedByFilter, statusFilter, page, pageSize,
      });
      setDocuments(result?.documents ?? SHARED_DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(SHARED_DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, categoryFilter, sharedByFilter, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, folderFilter, typeFilter, categoryFilter, sharedByFilter, statusFilter, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
  };

  const resetAdvancedFilters = () => {
    setDateRange("");
    setSharedByFilter("All Users");
    setFolderFilter("All Folders");
    setStatusFilter("All Status");
    setPage(1);
  };

  const applyAdvancedFilters = () => setPage(1);

  const filtered = React.useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = !search
        || doc.documentName.toLowerCase().includes(search.toLowerCase())
        || doc.folder.toLowerCase().includes(search.toLowerCase());
      const matchesFolder = folderFilter === "All Folders" || doc.folder === folderFilter;
      const matchesType = typeFilter === "All Types" || doc.fileType === typeFilter;
      const matchesCategory = categoryFilter === "All Categories" || doc.detail?.category === categoryFilter;
      const matchesSharedBy = sharedByFilter === "All Users" || doc.sharedByName === sharedByFilter;
      const matchesStatus = statusFilter === "All Status" || doc.detail?.status === statusFilter;
      return matchesSearch && matchesFolder && matchesType && matchesCategory && matchesSharedBy && matchesStatus;
    });
  }, [documents, search, folderFilter, typeFilter, categoryFilter, sharedByFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    storageOverview: SHARED_STORAGE_MOCK,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, sharedByFilter, setSharedByFilter, statusFilter, setStatusFilter,
    resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize, setPageSize,
  };
}
