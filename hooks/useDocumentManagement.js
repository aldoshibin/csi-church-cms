"use client";

import * as React from "react";
import { documentManagementService } from "@/services/documentManagementService";
import {
  DOCUMENTS_LIST_MOCK, DOCUMENT_MANAGEMENT_STATS_MOCK, STORAGE_OVERVIEW_MOCK,
  DOCUMENT_CATEGORIES_MOCK, DOCUMENT_TABS,
} from "@/lib/mock/vmDocumentManagementMockData";

export function useDocumentManagement() {
  const [documents, setDocuments] = React.useState(DOCUMENTS_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState(DOCUMENT_TABS[0]);
  const [search, setSearch] = React.useState("");
  const [folderFilter, setFolderFilter] = React.useState("All Folders");
  const [typeFilter, setTypeFilter] = React.useState("All Types");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  // Advanced filters (Filters sidebar card on the All Documents page).
  const [dateRange, setDateRange] = React.useState("");
  const [uploadedByFilter, setUploadedByFilter] = React.useState("All Users");
  const [accessFilter, setAccessFilter] = React.useState("All");
  const [statusFilter, setStatusFilter] = React.useState("All");

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentManagementService.listDocuments({ search, folderFilter, typeFilter, activeTab, page, pageSize });
      setDocuments(result?.documents ?? DOCUMENTS_LIST_MOCK);
    } catch {
      setDocuments(DOCUMENTS_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, folderFilter, typeFilter, activeTab, page, pageSize]);

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
    setUploadedByFilter("All Users");
    setAccessFilter("All");
    setStatusFilter("All");
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
      const matchesUploadedBy = uploadedByFilter === "All Users" || doc.uploadedByName === uploadedByFilter;
      const matchesAccess = accessFilter === "All" || doc.detail?.access === accessFilter;
      const matchesStatus = statusFilter === "All" || doc.detail?.status === statusFilter;
      return matchesSearch && matchesFolder && matchesType && matchesCategory && matchesTab
        && matchesUploadedBy && matchesAccess && matchesStatus;
    });
  }, [documents, search, folderFilter, typeFilter, categoryFilter, activeTab, uploadedByFilter, accessFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    documents: paged, totalCount: filtered.length, isLoading,
    stats: DOCUMENT_MANAGEMENT_STATS_MOCK, storageOverview: STORAGE_OVERVIEW_MOCK, categories: DOCUMENT_CATEGORIES_MOCK,
    tabs: DOCUMENT_TABS, activeTab, setActiveTab,
    search, setSearch, folderFilter, setFolderFilter, typeFilter, setTypeFilter,
    categoryFilter, setCategoryFilter, clearFilters,
    dateRange, setDateRange, uploadedByFilter, setUploadedByFilter,
    accessFilter, setAccessFilter, statusFilter, setStatusFilter,
    resetAdvancedFilters, applyAdvancedFilters,
    page, setPage, pageSize, setPageSize,
  };
}
