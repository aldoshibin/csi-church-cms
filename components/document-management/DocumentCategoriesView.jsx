"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, SlidersHorizontal, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useDocumentCategories } from "@/hooks/useDocumentCategories";
import { CategoriesTable } from "@/components/document-management/CategoriesTable";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { SimpleStorageOverviewCard } from "@/components/document-management/SimpleStorageOverviewCard";
import { InfoNoteCard } from "@/components/document-management/InfoNoteCard";
import { DOCUMENT_CATEGORIES_QUICK_ACTIONS, CATEGORY_STATUS_FILTER_OPTIONS } from "@/lib/mock/vmDocumentCategoriesMockData";

export function DocumentCategoriesView() {
  const router = useRouter();
  const {
    categories, totalCount, isLoading, storageOverview,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useDocumentCategories();

  const handleView = (cat) => {
    router.push(`/document-management/document-categories/${cat.id}`);
  };

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Document Categories</h1>
          <p className="mt-1 text-sm text-ink-subtle">Organize and manage categories to classify your church documents.</p>
        </div>
        <Link href="/document-management/document-categories/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>New Category</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {CATEGORY_STATUS_FILTER_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
          </div>

          <CategoriesTable
            categories={categories} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <InfoNoteCard icon={Info} title="Category Information">
            Document categories help you organize your documents effectively. Create relevant categories and assign documents to the appropriate categories.
          </InfoNoteCard>
          <QuickActionsCard actions={DOCUMENT_CATEGORIES_QUICK_ACTIONS} />
          <SimpleStorageOverviewCard data={storageOverview} totalLabelText="Total Shared Storage:" />
        </div>
      </div>
    </div>
  );
}
