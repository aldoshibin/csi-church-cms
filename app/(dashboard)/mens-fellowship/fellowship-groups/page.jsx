"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useMensFellowshipGroups } from "@/hooks/useMensFellowshipGroups";
import { Button } from "@/components/ui/Button";
import { MfFellowshipGroupsTable } from "@/components/mens-fellowship/groups/MfFellowshipGroupsTable";
import { AboutMensFellowshipBanner } from "@/components/mens-fellowship/groups/AboutMensFellowshipBanner";
import { MfGroupStatusOverviewCard, TopGroupsByAttendanceCard } from "@/components/mens-fellowship/groups/GroupStatusTopGroupsCards";
import { MfGroupsQuickActions, MfRecentActivitiesCard } from "@/components/mens-fellowship/groups/MfGroupsSidebarExtras";

export default function MensFellowshipGroupsPage() {
  const {
    groups, totalCount, isLoading, statusOverview, topGroups, recentActivities, about,
    search, setSearch, statusFilter, setStatusFilter, leaderFilter, setLeaderFilter,
    page, setPage, pageSize,
  } = useMensFellowshipGroups();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Fellowship Groups</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage men's fellowship groups and their details.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/fellowship-groups/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Group</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <MfFellowshipGroupsTable
            groups={groups}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            leaderFilter={leaderFilter} onLeaderFilterChange={setLeaderFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onManageMembers={(row) => console.log("Manage members", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
          <AboutMensFellowshipBanner about={about} />
        </div>

        <div className="flex flex-col gap-5">
          <MfGroupStatusOverviewCard breakdown={statusOverview.breakdown} />
          <TopGroupsByAttendanceCard groups={topGroups} />
          <MfGroupsQuickActions />
          <MfRecentActivitiesCard activities={recentActivities} />
        </div>
      </div>
    </div>
  );
}
