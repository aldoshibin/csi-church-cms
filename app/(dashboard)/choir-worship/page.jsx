"use client";

import Link from "next/link";
import { Download, ChevronDown, Plus } from "lucide-react";

import { useChoirWorshipDashboard } from "@/hooks/useChoirWorshipDashboard";
import { Button } from "@/components/ui/Button";
import { CwStatsCards } from "@/components/choir-worship/dashboard/CwStatsCards";
import { CwMembersTable } from "@/components/choir-worship/dashboard/CwMembersTable";
import { CwTeamOverviewSection } from "@/components/choir-worship/dashboard/CwTeamOverviewSection";
import { CwUpcomingRehearsalsCard } from "@/components/choir-worship/dashboard/CwUpcomingRehearsalsCard";
import { CwUpcomingServicesCard } from "@/components/choir-worship/dashboard/CwUpcomingServicesCard";
import { CwQuickActionsCard } from "@/components/choir-worship/dashboard/CwQuickActionsCard";

export default function ChoirWorshipDashboardPage() {
  const {
    stats, teamDistribution, activityOverview, upcomingRehearsals, upcomingServices, isLoading,
    members, totalCount,
    memberTab, setMemberTab, search, setSearch, roleFilter, setRoleFilter, teamFilter, setTeamFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize,
  } = useChoirWorshipDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Choir &amp; Worship Team</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage choir members, worship team, rehearsals and services.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add New
            </Button>
          </Link>
        </div>
      </div>

      <CwStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <CwMembersTable
            members={members}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            memberTab={memberTab} onMemberTabChange={setMemberTab}
            search={search} onSearchChange={setSearch}
            roleFilter={roleFilter} onRoleFilterChange={setRoleFilter}
            teamFilter={teamFilter} onTeamFilterChange={setTeamFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
          />
          <CwTeamOverviewSection teamDistribution={teamDistribution} activityOverview={activityOverview} />
        </div>

        <div className="flex flex-col gap-5">
          <CwUpcomingRehearsalsCard rehearsals={upcomingRehearsals} />
          <CwUpcomingServicesCard services={upcomingServices} />
          <CwQuickActionsCard />
        </div>
      </div>
    </div>
  );
}
