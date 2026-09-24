"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useMensFellowshipMembers } from "@/hooks/useMensFellowshipMembers";
import { Button } from "@/components/ui/Button";
import { MembersStatsCards } from "@/components/mens-fellowship/members/MembersStatsCards";
import { MembersTable } from "@/components/mens-fellowship/members/MembersTable";
import { MemberStatusCard } from "@/components/mens-fellowship/members/MemberStatusCard";
import { AgeGroupBreakdownCard } from "@/components/mens-fellowship/members/AgeGroupBreakdownCard";
import { RecentJoinedMembersCard } from "@/components/mens-fellowship/members/RecentJoinedMembersCard";
import { MembersQuickActions } from "@/components/mens-fellowship/members/MembersQuickActions";

export default function MensFellowshipMembersPage() {
  const {
    members, totalCount, isLoading, stats, statusBreakdown, ageGroups, recentJoined,
    search, setSearch, groupFilter, setGroupFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = useMensFellowshipMembers();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Members</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage men&apos;s fellowship group members.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/mens-fellowship/members/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Add New Member</Button>
          </Link>
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
        </div>
      </div>

      <MembersStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MembersTable
            members={members}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            groupFilter={groupFilter} onGroupFilterChange={setGroupFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onEdit={(row) => console.log("Edit", row.id)}
            onSendMessage={(row) => console.log("Send message", row.id)}
            onAddToGroup={(row) => console.log("Add to group", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <MemberStatusCard total={statusBreakdown.total} breakdown={statusBreakdown.breakdown} />
          <AgeGroupBreakdownCard groups={ageGroups} />
          <RecentJoinedMembersCard members={recentJoined} />
          <MembersQuickActions />
        </div>
      </div>
    </div>
  );
}
