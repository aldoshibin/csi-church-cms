"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useServicesList } from "@/hooks/useServicesList";
import { useServiceDetail } from "@/hooks/useServiceDetail";
import { Button } from "@/components/ui/Button";
import { ServicesTable } from "@/components/choir-worship/services/ServicesTable";
import { ServicesUpcomingCard } from "@/components/choir-worship/services/ServicesUpcomingCard";
import { ServiceAttendanceCard } from "@/components/choir-worship/services/ServiceAttendanceCard";
import { ServicesQuickActions } from "@/components/choir-worship/services/ServicesQuickActions";
import { ServiceDetailsDrawer } from "@/components/choir-worship/services/detail/ServiceDetailsDrawer";

export default function ServicesPage() {
  const {
    services, totalCount, isLoading, upcoming, attendance,
    search, setSearch, typeFilter, setTypeFilter, locationFilter, setLocationFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, refetch,
  } = useServicesList();

  const [activeServiceId, setActiveServiceId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { service, isLoading: isServiceLoading } = useServiceDetail(drawerOpen ? activeServiceId : null);

  const openDetails = (row) => {
    setActiveServiceId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Services</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize all church services.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/services/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add Service
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ServicesTable
            services={services}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            locationFilter={locationFilter} onLocationFilterChange={setLocationFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onRefresh={refetch}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <ServicesUpcomingCard items={upcoming} />
          <ServiceAttendanceCard data={attendance} />
          <ServicesQuickActions />
        </div>
      </div>

      <ServiceDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        service={service}
        isLoading={isServiceLoading}
        onEdit={() => console.log("Edit", activeServiceId)}
        onDuplicate={() => console.log("Duplicate", activeServiceId)}
      />
    </div>
  );
}
