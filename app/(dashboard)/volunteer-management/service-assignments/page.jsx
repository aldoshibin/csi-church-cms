"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useServiceAssignments } from "@/hooks/useServiceAssignments";
import { Button } from "@/components/ui/Button";
import { AssignmentsTable } from "@/components/volunteer-management/assignments/AssignmentsTable";
import { AssignmentOverviewCard } from "@/components/volunteer-management/assignments/AssignmentOverviewCard";
import { AssignmentsByStatusCard } from "@/components/volunteer-management/assignments/AssignmentsByStatusCard";
import { UpcomingAssignmentsMiniCard } from "@/components/volunteer-management/assignments/UpcomingAssignmentsMiniCard";
import { AssignmentQuickActions } from "@/components/volunteer-management/assignments/AssignmentQuickActions";

export default function ServiceAssignmentsPage() {
  const router = useRouter();
  const {
    assignments, totalCount, isLoading, stats, byStatus, upcoming,
    tabs, activeTab, setActiveTab,
    search, setSearch, ministryFilter, setMinistryFilter, teamFilter, setTeamFilter, dateFilter, setDateFilter,
    page, setPage, pageSize, resetFilters,
  } = useServiceAssignments();

  const openDetails = (row) => router.push(`/volunteer-management/service-assignments/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Service Assignments</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage service assignments for ministries, teams, and volunteers.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/volunteer-management/service-assignments/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Assignment</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AssignmentsTable
            assignments={assignments}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            ministryFilter={ministryFilter} onMinistryFilterChange={setMinistryFilter}
            teamFilter={teamFilter} onTeamFilterChange={setTeamFilter}
            dateFilter={dateFilter} onDateFilterChange={setDateFilter}
            onReset={resetFilters}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAssignVolunteers={(row) => console.log("Assign volunteers", row.id)}
            onCancel={(row) => console.log("Cancel", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <AssignmentOverviewCard stats={stats} />
          <AssignmentsByStatusCard data={byStatus} />
          <UpcomingAssignmentsMiniCard assignments={upcoming} />
          <AssignmentQuickActions />
        </div>
      </div>
    </div>
  );
}
