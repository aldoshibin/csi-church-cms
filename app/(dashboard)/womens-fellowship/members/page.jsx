"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useFellowshipMembers } from "@/hooks/useFellowshipMembers";
import { Button } from "@/components/ui/Button";
import { MembersStatsCards } from "@/components/womens-fellowship/members/MembersStatsCards";
import { MembersTable } from "@/components/womens-fellowship/members/MembersTable";
import { UpcomingBirthdaysCard } from "@/components/womens-fellowship/members/UpcomingBirthdaysCard";
import { MembersByGenderCard, MembersQuickActions } from "@/components/womens-fellowship/members/MembersByGenderCard";
import { MemberDetailsModal } from "@/components/womens-fellowship/members/MemberDetailsModal";

export default function FellowshipMembersPage() {
  const {
    members, totalCount, isLoading, stats, byGender, upcomingBirthdays,
    search, setSearch, groupFilter, setGroupFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize,
    selectedMember, setSelectedMemberId,
  } = useFellowshipMembers();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Members</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and view all members of the women's fellowship.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/womens-fellowship/members/add">
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
            onView={(row) => setSelectedMemberId(row.id)}
            onEdit={(row) => console.log("Edit", row.id)}
            onSendMessage={(row) => console.log("Send message", row.id)}
            onManageGroups={(row) => console.log("Manage groups", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <UpcomingBirthdaysCard birthdays={upcomingBirthdays} />
          <MembersByGenderCard breakdown={byGender.breakdown} />
          <MembersQuickActions />
        </div>
      </div>

      {selectedMember && (
        <MemberDetailsModal member={selectedMember} onClose={() => setSelectedMemberId(null)} />
      )}
    </div>
  );
}
