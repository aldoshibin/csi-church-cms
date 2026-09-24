"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { Pencil, MoreVertical, Search, SlidersHorizontal, ChevronDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCategoryDetail } from "@/hooks/useCategoryDetail";
import { CategoryDocumentsTable } from "@/components/document-management/CategoryDocumentsTable";
import { CategoryInfoCard } from "@/components/document-management/CategoryInfoCard";
import { QuickActionsCard } from "@/components/document-management/QuickActionsCard";
import { InfoNoteCard } from "@/components/document-management/InfoNoteCard";
import { CATEGORY_VIEW_QUICK_ACTIONS } from "@/lib/mock/vmDocumentCategoriesMockData";
import { formatDate } from "@/lib/utils";

const TABS = ["Documents", "Subcategories", "Activity Log"];

export function CategoryDetailView({ id }) {
  const { category, isLoading } = useCategoryDetail(id);
  const [tab, setTab] = React.useState("Documents");
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const pageSize = 5;

  if (isLoading || !category) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  const Icon = Icons[category.icon] ?? Icons.Folder;
  const documents = category.documents.filter((d) => !search || d.documentName.toLowerCase().includes(search.toLowerCase()));
  const pagedDocuments = documents.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ${category.iconBg} ${category.iconColor}`}>
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{category.name}</h1>
              <Badge variant={category.status === "Active" ? "success" : "danger"}>{category.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{category.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Category</Button>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-white p-6 shadow-card">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium text-ink-subtle">Category Name</p>
            <p className="mt-1 text-sm font-medium text-ink">{category.name}</p>
            <p className="mt-4 text-xs font-medium text-ink-subtle">Description</p>
            <p className="mt-1 text-sm font-medium text-ink">{category.description}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Category Color</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink">
              <span className="h-4 w-4 rounded-full border border-border" style={{ backgroundColor: category.colorHex }} />
              {category.colorHex}
            </p>
            <p className="mt-4 text-xs font-medium text-ink-subtle">Created By</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-[10px] font-semibold text-interactive-600">
                {category.createdByName.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              {category.createdByName}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Total Documents</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink">
              <FileText className="h-4 w-4 text-ink-subtle" /> {category.documentsCount} documents
            </p>
            <p className="mt-4 text-xs font-medium text-ink-subtle">Created On</p>
            <p className="mt-1 text-sm font-medium text-ink">{formatDate(category.createdOn, { hour: "numeric", minute: "2-digit" })}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {TABS.map((t) => (
                <button
                  key={t} type="button" onClick={() => setTab(t)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    tab === t ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"
                  }`}
                >
                  {t === "Documents" ? `Documents (${category.documentsCount})` : t === "Subcategories" ? `Subcategories (${category.subcategories.length})` : t}
                </button>
              ))}
            </div>
          </div>

          {tab === "Documents" && (
            <>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
                  <input
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search documents in this category..."
                    className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                  />
                </div>
                <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
                <Button type="button" variant="secondary" rightIcon={<ChevronDown className="h-4 w-4" />}>Sort by: Newest</Button>
              </div>
              <CategoryDocumentsTable
                documents={pagedDocuments} isLoading={false}
                page={page} pageSize={pageSize} totalCount={documents.length} onPageChange={setPage}
              />
            </>
          )}

          {tab === "Subcategories" && (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              {category.subcategories.length === 0 ? (
                <p className="text-center text-sm text-ink-subtle">This category has no subcategories yet.</p>
              ) : (
                <div className="flex flex-col divide-y divide-border">
                  {category.subcategories.map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between py-3">
                      <span className="flex items-center gap-2 text-sm font-medium text-ink">
                        <Icons.Folder className="h-4 w-4 text-ink-subtle" /> {sub.name}
                      </span>
                      <span className="text-sm text-ink-subtle">{sub.documentsCount} documents</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "Activity Log" && (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <div className="flex flex-col gap-4">
                {category.activityLog.map((log) => (
                  <div key={log.id} className="flex gap-3">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                    <div>
                      <p className="text-sm text-ink">{log.action} by {log.byName}.</p>
                      <p className="text-xs text-ink-subtle">{formatDate(log.on, { hour: "numeric", minute: "2-digit" })}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <CategoryInfoCard category={category} />
          <QuickActionsCard actions={CATEGORY_VIEW_QUICK_ACTIONS} />
          <InfoNoteCard icon={Icons.FileText} title="Note">
            Deleting a category will not delete the documents. Documents will remain safe and can be re-categorized.
          </InfoNoteCard>
        </div>
      </div>
    </div>
  );
}
