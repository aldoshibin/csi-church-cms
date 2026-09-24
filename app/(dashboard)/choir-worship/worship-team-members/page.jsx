"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useWorshipTeamMembersList } from "@/hooks/useWorshipTeamMembersList";
import { useWorshipTeamMemberDetail } from "@/hooks/useWorshipTeamMemberDetail";
import { Button } from "@/components/ui/Button";
import { WorshipTeamMembersTable } from "@/components/choir-worship/worship-members/WorshipTeamMembersTable";
import { WtMemberDetailModal } from "@/components/choir-worship/worship-members/WtMemberDetailModal";
import { WtMembersQuickActions } from "@/components/choir-worship/worship-members/WtMembersQuickActions";
import { CwUpcomingRehearsalsCard } from "@/components/choir-worship/dashboard/CwUpcomingRehearsalsCard";
import { CwUpcomingServicesCard } from "@/components/choir-worship/dashboard/CwUpcomingServicesCard";

export default function WorshipTeamMembersPage() {
  const {
    members, totalCount, isLoading, upcomingRehearsals, upcomingServices,
    memberTab, setMemberTab, search, setSearch, roleFilter, setRoleFilter,
    instrumentFilter, setInstrumentFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, selectedIds, setSelectedIds,
  } = useWorshipTeamMembersList();

  const [activeMemberId, setActiveMemberId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { member, isLoading: isMemberLoading } = useWorshipTeamMemberDetail(modalOpen ? activeMemberId : null);

  const openDetails = (row) => {
    setActiveMemberId(row.id);
    setModalOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Worship Team Members</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage all worship team members.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/worship-team-members/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add New Member
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WorshipTeamMembersTable
            members={members}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            memberTab={memberTab} onMemberTabChange={setMemberTab}
            search={search} onSearchChange={setSearch}
            roleFilter={roleFilter} onRoleFilterChange={setRoleFilter}
            instrumentFilter={instrumentFilter} onInstrumentFilterChange={setInstrumentFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            selectedIds={selectedIds} onSelectionChange={setSelectedIds}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAssignRole={(row) => console.log("Assign role", row.id)}
            onAddToRehearsal={(row) => console.log("Add to rehearsal", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <CwUpcomingRehearsalsCard rehearsals={upcomingRehearsals} />
          <CwUpcomingServicesCard services={upcomingServices} />
          <WtMembersQuickActions />
        </div>
      </div>

      <WtMemberDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        member={member}
        isLoading={isMemberLoading}
        onEdit={() => console.log("Edit", activeMemberId)}
      />
    </div>
  );
}
