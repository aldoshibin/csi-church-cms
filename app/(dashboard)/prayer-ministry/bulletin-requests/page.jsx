"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useBulletinRequestsList } from "@/hooks/useBulletinRequestsList";
import { Button } from "@/components/ui/Button";
import { BulletinRequestsFiltersBar } from "@/components/prayer-ministry/bulletin/BulletinRequestsFiltersBar";
import { BulletinRequestsTable } from "@/components/prayer-ministry/bulletin/BulletinRequestsTable";
import { BulletinOverviewCard } from "@/components/prayer-ministry/bulletin/BulletinOverviewCard";
import { BulletinByTypeCard } from "@/components/prayer-ministry/bulletin/BulletinByTypeCard";
import { BulletinRecentActivityCard } from "@/components/prayer-ministry/bulletin/BulletinRecentActivityCard";
import { BulletinQuickActions } from "@/components/prayer-ministry/bulletin/BulletinQuickActions";
import { useRouter } from "next/navigation";

export default function BulletinRequestsPage() {
  const router = useRouter();
  const {
    requests, totalCount, isLoading, overview, byType, recentActivity,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter, submittedByFilter, setSubmittedByFilter,
    page, setPage, pageSize, applyFilters, resetFilters,
  } = useBulletinRequestsList();

  const openDetails = (row) => router.push(`/prayer-ministry/bulletin-requests/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Bulletin Requests</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage bulletin announcements requested by church members.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/bulletin-requests/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>New Bulletin Request</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <BulletinRequestsFiltersBar
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
        submittedByFilter={submittedByFilter} onSubmittedByFilterChange={setSubmittedByFilter}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BulletinRequestsTable
            requests={requests}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewDetails={openDetails}
          />
        </div>

        <div className="flex flex-col gap-5">
          <BulletinOverviewCard overview={overview} />
          <BulletinByTypeCard data={byType} />
          <BulletinRecentActivityCard activity={recentActivity} />
          <BulletinQuickActions />
        </div>
      </div>
    </div>
  );
}
