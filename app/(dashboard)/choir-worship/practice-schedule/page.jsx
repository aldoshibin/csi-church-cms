"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { usePracticeScheduleList } from "@/hooks/usePracticeScheduleList";
import { usePracticeMemberDetail } from "@/hooks/usePracticeMemberDetail";
import { Button } from "@/components/ui/Button";
import { PracticeScheduleTable } from "@/components/choir-worship/practice-schedule/PracticeScheduleTable";
import { PsMemberDetailModal } from "@/components/choir-worship/practice-schedule/PsMemberDetailModal";
import { PsUpcomingPracticesCard } from "@/components/choir-worship/practice-schedule/PsUpcomingPracticesCard";
import { TeamSummaryCard } from "@/components/choir-worship/practice-schedule/TeamSummaryCard";
import { PsQuickActionsCard } from "@/components/choir-worship/practice-schedule/PsQuickActionsCard";

export default function PracticeSchedulePage() {
  const {
    members, totalCount, isLoading, upcomingPractices, teamSummary,
    memberTab, setMemberTab, search, setSearch, teamFilter, setTeamFilter,
    instrumentFilter, setInstrumentFilter, dayFilter, setDayFilter,
    page, setPage, pageSize, selectedIds, setSelectedIds, refetch,
  } = usePracticeScheduleList();

  const [activeMemberId, setActiveMemberId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { member, isLoading: isMemberLoading } = usePracticeMemberDetail(modalOpen ? activeMemberId : null);

  const openDetails = (row) => {
    setActiveMemberId(row.id);
    setModalOpen(true);
  };

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Practice Schedule Members</h1>
          <p className="mt-1 text-sm text-ink-subtle">View and manage all practice schedule members.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/practice-schedule/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add to Schedule
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PracticeScheduleTable
            members={members}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            memberTab={memberTab} onMemberTabChange={setMemberTab}
            search={search} onSearchChange={setSearch}
            teamFilter={teamFilter} onTeamFilterChange={setTeamFilter}
            instrumentFilter={instrumentFilter} onInstrumentFilterChange={setInstrumentFilter}
            dayFilter={dayFilter} onDayFilterChange={setDayFilter}
            onRefresh={refetch}
            selectedIds={selectedIds} onSelectionChange={setSelectedIds}
            onViewDetails={openDetails}
            onEdit={(row) => console.log("Edit", row.id)}
            onAssignRole={(row) => console.log("Assign role", row.id)}
            onDeactivate={(row) => console.log("Deactivate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <PsUpcomingPracticesCard practices={upcomingPractices} />
          <TeamSummaryCard summary={teamSummary} />
          <PsQuickActionsCard />
        </div>
      </div>

      <PsMemberDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        member={member}
        isLoading={isMemberLoading}
        onEdit={() => console.log("Edit", activeMemberId)}
      />
    </div>
  );
}
