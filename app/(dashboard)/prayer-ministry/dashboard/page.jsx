"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePrayerMinistryDashboard } from "@/hooks/usePrayerMinistryDashboard";
import { usePrayerRequestDetail } from "@/hooks/usePrayerRequestDetail";
import { Button } from "@/components/ui/Button";
import { PrayerDashboardStatsCards } from "@/components/prayer-ministry/dashboard/PrayerDashboardStatsCards";
import { DashboardFiltersBar } from "@/components/prayer-ministry/dashboard/DashboardFiltersBar";
import { DashboardPrayerRequestsTable } from "@/components/prayer-ministry/dashboard/DashboardPrayerRequestsTable";
import { PrayerGroupsCard } from "@/components/prayer-ministry/dashboard/PrayerGroupsCard";
import { UpcomingPrayerMeetingsCard } from "@/components/prayer-ministry/dashboard/UpcomingPrayerMeetingsCard";
import { PrayerRequestDetailsDrawer } from "@/components/prayer-ministry/requests/detail/PrayerRequestDetailsDrawer";

export default function PrayerMinistryDashboardPage() {
  const {
    requests, totalCount, isLoading, stats, groups, upcomingMeetings,
    statusFilter, setStatusFilter, categoryFilter, setCategoryFilter, groupFilter, setGroupFilter,
    page, setPage, pageSize, applyFilters, resetFilters,
  } = usePrayerMinistryDashboard();

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
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/prayer-requests/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Prayer Request</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <PrayerDashboardStatsCards stats={stats} />

      <DashboardFiltersBar
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        categoryFilter={categoryFilter} onCategoryFilterChange={setCategoryFilter}
        groupFilter={groupFilter} onGroupFilterChange={setGroupFilter}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DashboardPrayerRequestsTable
            requests={requests}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewDetails={openDetails}
          />
        </div>

        <div className="flex flex-col gap-5">
          <PrayerGroupsCard groups={groups} />
          <UpcomingPrayerMeetingsCard meetings={upcomingMeetings} />
        </div>
      </div>

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
