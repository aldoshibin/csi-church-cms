"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePraiseReportsList } from "@/hooks/usePraiseReportsList";
import { usePraiseReportDetail } from "@/hooks/usePraiseReportDetail";
import { Button } from "@/components/ui/Button";
import { PraiseReportsFiltersBar } from "@/components/prayer-ministry/praise-reports/PraiseReportsFiltersBar";
import { PraiseReportsTable } from "@/components/prayer-ministry/praise-reports/PraiseReportsTable";
import { PraiseByCategoryCard } from "@/components/prayer-ministry/praise-reports/PraiseByCategoryCard";
import { TopPraiseContributorsCard, PraiseRemindersCard } from "@/components/prayer-ministry/praise-reports/TopContributorsRemindersCards";
import { PraiseReportDetailsDrawer } from "@/components/prayer-ministry/praise-reports/detail/PraiseReportDetailsDrawer";

export default function PraiseReportsPage() {
  const {
    reports, totalCount, isLoading, byCategory, topContributors,
    categoryFilter, setCategoryFilter, sharedByFilter, setSharedByFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, applyFilters, resetFilters,
  } = usePraiseReportsList();

  const [activeReportId, setActiveReportId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { report, isLoading: isReportLoading, unpublish } = usePraiseReportDetail(drawerOpen ? activeReportId : null);

  const openDetails = (row) => {
    setActiveReportId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Praise Reports</h1>
          <p className="mt-1 text-sm text-ink-subtle">Share and celebrate what God has done in our lives.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/praise-reports/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Praise Report</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <PraiseReportsFiltersBar
        categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
        sharedByFilter={sharedByFilter} onSharedByFilterChange={setSharedByFilter}
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PraiseReportsTable
            reports={reports}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewDetails={openDetails}
          />
        </div>

        <div className="flex flex-col gap-5">
          <PraiseByCategoryCard data={byCategory} />
          <TopPraiseContributorsCard contributors={topContributors} />
          <PraiseRemindersCard />
        </div>
      </div>

      <PraiseReportDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        report={report}
        isLoading={isReportLoading}
        onEdit={() => console.log("Edit", activeReportId)}
        onUnpublish={unpublish}
      />
    </div>
  );
}
