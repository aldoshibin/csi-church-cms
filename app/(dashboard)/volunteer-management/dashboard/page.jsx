"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useVolunteersDashboard } from "@/hooks/useVolunteersDashboard";
import { Button } from "@/components/ui/Button";
import { VolunteersTable } from "@/components/volunteer-management/dashboard/VolunteersTable";
import { VolunteerOverviewCard } from "@/components/volunteer-management/dashboard/VolunteerOverviewCard";
import { TopMinistriesCard } from "@/components/volunteer-management/dashboard/TopMinistriesCard";
import { UpcomingAssignmentsCard } from "@/components/volunteer-management/dashboard/UpcomingAssignmentsCard";
import { VolunteerQuickActions } from "@/components/volunteer-management/dashboard/VolunteerQuickActions";
import { useRouter } from "next/navigation";

export default function VolunteerManagementDashboardPage() {
  const router = useRouter();
  const {
    volunteers, totalCount, isLoading, stats, topMinistries, upcomingAssignments,
    tabs, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, selectedIds, setSelectedIds, resetFilters,
  } = useVolunteersDashboard();

  const openDetails = (row) => router.push(`/volunteer-management/volunteers/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Volunteer Management</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage church volunteers, their ministries, assignments and service activities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/volunteers/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Volunteer</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <VolunteersTable
            volunteers={volunteers}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onRefresh={resetFilters}
            selectedIds={selectedIds} onSelectionChange={setSelectedIds}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAssign={(row) => console.log("Assign", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <VolunteerOverviewCard stats={stats} />
          <TopMinistriesCard data={topMinistries} />
          <UpcomingAssignmentsCard assignments={upcomingAssignments} />
          <VolunteerQuickActions />
        </div>
      </div>
    </div>
  );
}
