"use client";

import * as React from "react";
import { documentManagementService } from "@/services/documentManagementService";
import { MY_DOCUMENTS_LIST_MOCK, MY_DOCUMENTS_STORAGE_MOCK, MY_DOCUMENTS_TABS } from "@/lib/mock/vmDocumentManagementMockData";

export function useMyDocuments() {
  const [documents, setDocuments] = React.useState(MY_DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState(MY_DOCUMENTS_TABS[0]);
  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [dateRange, setDateRange] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentManagementService.listDocuments({
        search, folderFilter, typeFilter, categoryFilter, activeTab, page, pageSize, mine: true,
      });
      setDocuments(result?.documents ?? MY_DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(MY_DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, categoryFilter, activeTab, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, folderFilter, typeFilter, categoryFilter, activeTab, pageSize]);

  const clearFilters = () => {
    setSearch("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
  };

  const resetAdvancedFilters = () => {
    setDateRange("");
    setFolderFilter("All Folders");
    setTypeFilter("All Types");
    setCategoryFilter("All Categories");
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
      const matchesCategory = categoryFilter === "All Categories" || doc.category === categoryFilter;
      const matchesTab = activeTab === "Starred" ? doc.starred : true;
      return matchesSearch && matchesFolder && matchesType && matchesCategory && matchesTab;
    });
  }, [documents, search, folderFilter, typeFilter, categoryFilter, activeTab]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    storageOverview: MY_DOCUMENTS_STORAGE_MOCK, tabs: MY_DOCUMENTS_TABS, activeTab, setActiveTab,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize, setPageSize,
  };
}
