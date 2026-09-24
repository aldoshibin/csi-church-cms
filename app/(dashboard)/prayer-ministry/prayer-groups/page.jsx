"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePrayerGroupsList } from "@/hooks/usePrayerGroupsList";
import { usePrayerGroupDetail } from "@/hooks/usePrayerGroupDetail";
import { Button } from "@/components/ui/Button";
import { PrayerGroupsFiltersBar } from "@/components/prayer-ministry/groups/PrayerGroupsFiltersBar";
import { PrayerGroupsTable } from "@/components/prayer-ministry/groups/PrayerGroupsTable";
import { GroupDistributionCard } from "@/components/prayer-ministry/groups/GroupDistributionCard";
import { GroupUpcomingMeetingsCard } from "@/components/prayer-ministry/groups/GroupUpcomingMeetingsCard";
import { GroupsQuickActions } from "@/components/prayer-ministry/groups/GroupsQuickActions";
import { PrayerGroupDetailsDrawer } from "@/components/prayer-ministry/groups/detail/PrayerGroupDetailsDrawer";

export default function PrayerGroupsPage() {
  const {
    groups, totalCount, isLoading, distribution, upcomingMeetings,
    search, setSearch, statusFilter, setStatusFilter, dayFilter, setDayFilter, typeFilter, setTypeFilter,
    page, setPage, pageSize, applyFilters, resetFilters,
  } = usePrayerGroupsList();

  const [activeGroupId, setActiveGroupId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { group, isLoading: isGroupLoading, deactivate } = usePrayerGroupDetail(drawerOpen ? activeGroupId : null);

  const openDetails = (row) => {
    setActiveGroupId(row.id);
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Prayer Groups</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize prayer groups to strengthen our church community in prayer.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/prayer-ministry/prayer-groups/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add Prayer Group</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <PrayerGroupsFiltersBar
        search={search} onSearchChange={setSearch}
        statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
        dayFilter={dayFilter} onDayFilterChange={setDayFilter}
        typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
        onApply={applyFilters} onReset={resetFilters}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PrayerGroupsTable
            groups={groups}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            onViewDetails={openDetails}
          />
        </div>

        <div className="flex flex-col gap-5">
          <GroupDistributionCard data={distribution} />
          <GroupUpcomingMeetingsCard meetings={upcomingMeetings} />
          <GroupsQuickActions />
        </div>
      </div>

      <PrayerGroupDetailsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        group={group}
        isLoading={isGroupLoading}
        onEdit={() => console.log("Edit", activeGroupId)}
        onDeactivate={deactivate}
      />
    </div>
  );
}
