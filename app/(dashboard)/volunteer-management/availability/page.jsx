"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useAvailability } from "@/hooks/useAvailability";
import { Button } from "@/components/ui/Button";
import { AvailabilityGridTable } from "@/components/volunteer-management/availability/AvailabilityGridTable";
import { AvailabilityOverviewCard } from "@/components/volunteer-management/availability/AvailabilityOverviewCard";
import { MinistryBreakdownCard } from "@/components/volunteer-management/availability/MinistryBreakdownCard";
import { UpcomingServicesCard } from "@/components/volunteer-management/availability/UpcomingServicesCard";
import { AvailabilityQuickActions } from "@/components/volunteer-management/availability/AvailabilityQuickActions";

export default function AvailabilityPage() {
  const router = useRouter();
  const {
    volunteers, totalCount, isLoading, stats, ministryBreakdown, upcomingServices,
    tabs, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, dateFilter, setDateFilter,
    page, setPage, pageSize, resetFilters,
  } = useAvailability();

  const openDetails = (row) => router.push(`/volunteer-management/availability/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Availability</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage volunteer availability for services, events, and ministry assignments.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/availability/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Availability</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AvailabilityGridTable
            volunteers={volunteers}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
            dateFilter={dateFilter} onDateFilterChange={setDateFilter}
            onReset={resetFilters}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAddTimeOff={(row) => console.log("Add time off", row.id)}
            onRemove={(row) => console.log("Remove", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AvailabilityOverviewCard stats={stats} />
          <MinistryBreakdownCard data={ministryBreakdown} />
          <UpcomingServicesCard services={upcomingServices} />
          <AvailabilityQuickActions />
        </div>
      </div>
    </div>
  );
}
