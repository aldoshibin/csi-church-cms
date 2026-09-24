"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

import { usePrayerRequestsList } from "@/hooks/usePrayerRequestsList";
import { usePrayerRequestDetail } from "@/hooks/usePrayerRequestDetail";
import { Button } from "@/components/ui/Button";
import { PrayerStatsCards } from "@/components/prayer-ministry/requests/PrayerStatsCards";
import { PrayerRequestsFiltersBar } from "@/components/prayer-ministry/requests/PrayerRequestsFiltersBar";
import { PrayerRequestsTable } from "@/components/prayer-ministry/requests/PrayerRequestsTable";
import { PrayerRequestDetailsDrawer } from "@/components/prayer-ministry/requests/detail/PrayerRequestDetailsDrawer";

export default function PrayerRequestsPage() {
  const {
    requests, totalCount, isLoading, stats,
    statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, groupFilter, setGroupFilter,
    page, setPage, pageSize,
  } = usePrayerRequestsList();

  const [activeRequestId, setActiveRequestId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { request, isLoading: isRequestLoading, addUpdate, markAnswered } = usePrayerRequestDetail(drawerOpen ? activeRequestId : null);

  const openDetails = (row) => {
    setActiveRequestId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Prayer Ministry</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage prayer requests, pray for others and share praise reports.</p>
        </div>
        <Link href="/prayer-ministry/prayer-requests/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Prayer Request</Button>
        </Link>
      </div>

      <PrayerStatsCards stats={stats} />

      <PrayerRequestsFiltersBar
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
        groupFilter={groupFilter} onGroupFilterChange={setGroupFilter}
      />

      <PrayerRequestsTable
        requests={requests}
        isLoading={isLoading}
        pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
        onViewDetails={openDetails}
      />

      <PrayerRequestDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        request={request}
        isLoading={isRequestLoading}
        onAddUpdate={addUpdate}
        onEdit={() => console.log("Edit", activeRequestId)}
        onMarkAnswered={markAnswered}
      />
    </div>
  );
}
