"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useIntercessorsList } from "@/hooks/useIntercessorsList";
import { useIntercessorDetail } from "@/hooks/useIntercessorDetail";
import { Button } from "@/components/ui/Button";
import { IntercessorsFiltersBar } from "@/components/prayer-ministry/intercessors/IntercessorsFiltersBar";
import { IntercessorsTable } from "@/components/prayer-ministry/intercessors/IntercessorsTable";
import { PrayerCoverageCard } from "@/components/prayer-ministry/intercessors/PrayerCoverageCard";
import { UpcomingPrayerSchedulesCard } from "@/components/prayer-ministry/intercessors/UpcomingPrayerSchedulesCard";
import { IntercessorsQuickActions } from "@/components/prayer-ministry/intercessors/IntercessorsQuickActions";
import { IntercessorDetailsDrawer } from "@/components/prayer-ministry/intercessors/detail/IntercessorDetailsDrawer";

export default function IntercessorsPage() {
  const {
    intercessors, totalCount, isLoading, coverage, upcomingSchedules,
    search, setSearch, statusFilter, setStatusFilter, ministryFilter, setMinistryFilter,
    availabilityFilter, setAvailabilityFilter, sortBy, setSortBy,
    page, setPage, pageSize, applyFilters, resetFilters,
  } = useIntercessorsList();

  const [activeId, setActiveId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { intercessor, isLoading: isDetailLoading, deactivate } = useIntercessorDetail(drawerOpen ? activeId : null);

  const openDetails = (row) => {
    setActiveId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Intercessors</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage intercessors who faithfully pray for our church and its needs.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/intercessors/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Intercessor</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <IntercessorsFiltersBar
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
        availabilityFilter={availabilityFilter} onAvailabilityFilterChange={setAvailabilityFilter}
        sortBy={sortBy} onSortByChange={setSortBy}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <IntercessorsTable
            intercessors={intercessors}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewDetails={openDetails}
          />
        </div>

        <div className="flex flex-col gap-5">
          <PrayerCoverageCard data={coverage} />
          <UpcomingPrayerSchedulesCard schedules={upcomingSchedules} />
          <IntercessorsQuickActions />
        </div>
      </div>

      <IntercessorDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        intercessor={intercessor}
        isLoading={isDetailLoading}
        onEdit={() => console.log("Edit", activeId)}
        onDeactivate={deactivate}
      />
    </div>
  );
}
