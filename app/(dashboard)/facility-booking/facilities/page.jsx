"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Plus, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useFacilities } from "@/hooks/useFacilities";
import { useFacilityDetail } from "@/hooks/useFacilityDetail";
import { FacilitiesTable } from "@/components/facility-booking/facilities/FacilitiesTable";
import { FacilityDetailsDrawer } from "@/components/facility-booking/facilities/FacilityDetailsDrawer";
import { FacilityStatusOverviewCard } from "@/components/facility-booking/facilities/FacilityStatusOverviewCard";
import { FacilitiesQuickActionsCard } from "@/components/facility-booking/facilities/FacilitiesQuickActionsCard";
import { FacilitiesHelpCard } from "@/components/facility-booking/facilities/FacilitiesHelpCard";
import { FACILITY_STATUS_OPTIONS } from "@/lib/mock/vmFacilitiesMockData";

export default function FacilitiesPage() {
  const {
    facilities, totalCount, isLoading, donut,
    search, setSearch, statusFilter, setStatusFilter, clearFilters,
    page, setPage, pageSize,
  } = useFacilities();

  const [selectedId, setSelectedId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { facility, isLoading: isDetailLoading } = useFacilityDetail(selectedId);

  const handleView = (row) => {
    setSelectedId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-ink">Facilities</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage all church facilities and their details.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export</Button>
          <Link href="/facility-booking/facilities/add">
            <Button variant="success" leftIcon={<Plus className="h-4 w-4" />}>Add Facility</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by facility name, location..."
                className="h-9 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 rounded-md border border-border bg-white px-3 text-sm text-ink-muted">
              <option>All Status</option>
              {FACILITY_STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button type="button" className="flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">
              Clear
            </button>
          </div>

          <FacilitiesTable
            facilities={facilities} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            onView={handleView}
          />
        </div>

        <div className="flex flex-col gap-6">
          <FacilityStatusOverviewCard data={donut} />
          <FacilitiesQuickActionsCard />
          <FacilitiesHelpCard />
        </div>
      </div>

      <FacilityDetailsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} facility={facility} isLoading={isDetailLoading} />
    </div>
  );
}
