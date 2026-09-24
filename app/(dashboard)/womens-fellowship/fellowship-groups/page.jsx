"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useFellowshipGroups } from "@/hooks/useFellowshipGroups";
import { Button } from "@/components/ui/Button";
import { FellowshipGroupsTable } from "@/components/womens-fellowship/groups/FellowshipGroupsTable";
import { FgUpcomingMeetingsCard } from "@/components/womens-fellowship/groups/FgUpcomingMeetingsCard";
import { GroupsByMinistryFocusCard, FgQuickActions } from "@/components/womens-fellowship/groups/GroupsByMinistryFocusCard";
import { GroupDetailsModal } from "@/components/womens-fellowship/groups/GroupDetailsModal";

export default function FellowshipGroupsPage() {
  const {
    groups, totalCount, isLoading, upcomingMeetings, byMinistryFocus,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedGroup, setSelectedGroupId,
  } = useFellowshipGroups();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Fellowship Groups</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage women's fellowship groups and their details.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/fellowship-groups/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Group</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FellowshipGroupsTable
            groups={groups}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onView={(row) => setSelectedGroupId(row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
            onManageMembers={(row) => console.log("Manage members", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <FgUpcomingMeetingsCard meetings={upcomingMeetings} />
          <GroupsByMinistryFocusCard breakdown={byMinistryFocus.breakdown} />
          <FgQuickActions />
        </div>
      </div>

      {selectedGroup && (
        <GroupDetailsModal
          group={selectedGroup}
          upcomingMeeting={upcomingMeetings[0]}
          onClose={() => setSelectedGroupId(null)}
        />
      )}
    </div>
  );
}
