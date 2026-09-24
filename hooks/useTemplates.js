"use client";

import * as React from "react";
import { templatesService } from "@/services/templatesService";
import { TEMPLATES_LIST_MOCK, TEMPLATE_CATEGORIES_SIDEBAR_MOCK } from "@/lib/mock/vmTemplatesMockData";

const TABS = ["All Templates", "Email Templates", "SMS Templates"];

export function useTemplates() {
  const [templates, setTemplates] = React.useState(TEMPLATES_LIST_MOCK);
  const [categories] = React.useState(TEMPLATE_CATEGORIES_SIDEBAR_MOCK);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("All Templates");
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("All Categories");
  const [statusFilter, setStatusFilter] = React.useState("All Status");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(12);

  const refetch = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await templatesService.listTemplates({ activeTab, search, categoryFilter, statusFilter, page, pageSize });
      setTemplates(result?.templates ?? TEMPLATES_LIST_MOCK);
    } catch {
      setTemplates(TEMPLATES_LIST_MOCK);
    } finally {
      setIsLoading(false);
    }
  }, [activeTab, search, categoryFilter, statusFilter, page, pageSize]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  React.useEffect(() => {
    setPage(1);
  }, [activeTab, search, categoryFilter, statusFilter, pageSize]);

  const filtered = React.useMemo(() => {
    return templates.filter((t) => {
      const matchesTab =
        activeTab === "All Templates" ? true :
        activeTab === "Email Templates" ? t.type === "Email" :
        activeTab === "SMS Templates" ? t.type === "SMS" : true;
      const matchesSearch = !search || t.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All Categories" || t.category === categoryFilter;
      const matchesStatus = statusFilter === "All Status" || t.status === statusFilter;
      return matchesTab && matchesSearch && matchesCategory && matchesStatus;
    });
  }, [templates, activeTab, search, categoryFilter, statusFilter]);

  const paged = React.useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  return {
    templates: paged, totalCount: filtered.length, isLoading, categories,
    tabs: TABS, activeTab, setActiveTab,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, setPageSize,
  };
}
