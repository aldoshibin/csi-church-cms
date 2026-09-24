"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useYouthGroups } from "@/hooks/useYouthGroups";
import { Button } from "@/components/ui/Button";
import { YouthGroupsTable } from "@/components/youth-ministry/groups/YouthGroupsTable";
import { GroupActivitiesOverviewRow } from "@/components/youth-ministry/groups/GroupActivitiesOverviewRow";
import { GroupDistributionByAgeCard } from "@/components/youth-ministry/groups/GroupDistributionByAgeCard";
import { UpcomingMeetingsCard, YouthGroupsQuickActions } from "@/components/youth-ministry/groups/YouthGroupsSidebarExtras";

export default function YouthGroupsPage() {
  const {
    groups, totalCount, isLoading, distribution, upcomingMeetings, activitiesOverview,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useYouthGroups();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Youth Groups</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize all youth groups in the ministry.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/youth-ministry/youth-groups/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Youth Group</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <YouthGroupsTable
            groups={groups}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onManageMembers={(row) => console.log("Manage members", row.id)}
            onManageLeaders={(row) => console.log("Manage leaders", row.id)}
            onGroupAttendance={(row) => console.log("Group attendance", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />

          <div className="mt-5">
            <GroupActivitiesOverviewRow overview={activitiesOverview} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <GroupDistributionByAgeCard total={distribution.total} breakdown={distribution.breakdown} />
          <UpcomingMeetingsCard meetings={upcomingMeetings} />
          <YouthGroupsQuickActions />
        </div>
      </div>
    </div>
  );
}
