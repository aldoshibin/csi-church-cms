"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTemplates } from "@/hooks/useTemplates";
import { TemplatesGrid } from "@/components/communication-module/templates/TemplatesGrid";
import { TemplateCategoriesCard } from "@/components/communication-module/templates/TemplateCategoriesCard";
import { TemplateQuickActions } from "@/components/communication-module/templates/TemplateQuickActions";
import { TemplateTipsCard } from "@/components/communication-module/templates/TemplateTipsCard";

export default function TemplatesPage() {
  const {
    templates, totalCount, isLoading, categories,
    tabs, activeTab, setActiveTab,
    search, setSearch, categoryFilter, setCategoryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, setPageSize,
  } = useTemplates();

  const templatesState = {
    templates, totalCount, isLoading,
    tabs, activeTab, onTabChange: setActiveTab,
    search, onSearchChange: setSearch,
    categoryFilter, onCategoryFilterChange: setCategoryFilter,
    statusFilter, onStatusFilterChange: setStatusFilter,
    page, pageSize, onPageChange: setPage, onPageSizeChange: setPageSize,
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Templates</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create and manage reusable email and SMS templates.</p>
        </div>
        <Link href="/communication-module/templates/add">
          <Button leftIcon={<Plus className="h-4 w-4" />}>Create New Template</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <TemplatesGrid {...templatesState} />

        <div className="flex flex-col gap-6">
          <TemplateCategoriesCard categories={categories} />
          <TemplateQuickActions />
          <TemplateTipsCard />
        </div>
      </div>
    </div>
  );
}
