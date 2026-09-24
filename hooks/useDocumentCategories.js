"use client";

import * as React from "react";
import { documentCategoriesService } from "@/services/documentCategoriesService";
import { CATEGORIES_LIST_MOCK, DOCUMENT_CATEGORIES_STORAGE_MOCK } from "@/lib/mock/vmDocumentCategoriesMockData";

export function useDocumentCategories() {
  const [categories, setCategories] = React.useState(CATEGORIES_LIST_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await documentCategoriesService.listCategories({ search, statusFilter, page, pageSize });
      setCategories(result?.categories ?? CATEGORIES_LIST_MOCK);
    } catch {
      setCategories(CATEGORIES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [search, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [search, statusFilter, pageSize]);

  const filtered = React.useMemo(() => {
    return categories.filter((cat) => {
      const matchesSearch = !search
        || cat.name.toLowerCase().includes(search.toLowerCase())
        || cat.description.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || cat.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [categories, search, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    categories: paged, totalCount: filtered.length, isLoading,
    storageOverview: DOCUMENT_CATEGORIES_STORAGE_MOCK,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize, setPageSize,
  };
}
