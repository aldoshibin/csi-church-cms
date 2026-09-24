"use client";

import * as React from "react";
import Link from "next/link";
import { Home, ChevronRight, Vote, Search, Filter, Plus, Users2, UsersRound, ListChecks, Percent } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ElectionStatCard } from "@/components/election-management/ElectionStatCard";
import { ElectionsListTable } from "@/components/election-management/ElectionsListTable";
import { ElectionsListTimelineHorizontal } from "@/components/election-management/ElectionsListTimelineHorizontal";
import { ElectionsListQuickActionsGrid } from "@/components/election-management/ElectionsListQuickActionsGrid";
import { ElectionDetailsModal } from "@/components/election-management/ElectionDetailsModal";
import { useElectionsList } from "@/hooks/useElectionsList";

export function ElectionsListView() {
  const {
    stats, tabs, activeTab, setActiveTab, searchTerm, setSearchTerm,
    elections, isLoading, timeline, quickActions,
  } = useElectionsList();
  const [detailsElectionId, setDetailsElectionId] = React.useState(null);

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Elections</span>
      </nav>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Vote className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Elections</h1>
            <p className="mt-1 text-sm text-ink-subtle">Manage and monitor all church elections.</p>
          </div>
        </div>
        <Link href="/election-management/elections/add">
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Create New Election</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <ElectionStatCard icon={Vote} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Elections" value={stats.totalElections.value} sub={stats.totalElections.trend} />
        <ElectionStatCard icon={ListChecks} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Positions" value={stats.totalPositions.value} sub={stats.totalPositions.trend} />
        <ElectionStatCard icon={UsersRound} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Candidates" value={stats.totalCandidates.value} sub={stats.totalCandidates.trend} />
        <ElectionStatCard icon={Users2} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Voters" value={stats.totalVoters.value} sub={stats.totalVoters.trend} />
        <ElectionStatCard icon={Percent} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Completed Elections" value={stats.completedElections.value} sub={stats.completedElections.trend} />
      </div>

      <div className="rounded-lg border border-border bg-white shadow-card">
        <div className="flex flex-wrap items-center gap-1 border-b border-border px-4 pt-3">
          {tabs.map((tab) => (
            <button
              key={tab} type="button" onClick={() => setActiveTab(tab)}
              className={`rounded-t-md px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab ? "border-b-2 border-interactive-600 text-interactive-600" : "text-ink-subtle hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search elections..."
              className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
          </div>
          <Button variant="secondary" leftIcon={<Filter className="h-4 w-4" />}>Filter</Button>
        </div>
        <div className="px-4 pb-4">
          <ElectionsListTable elections={elections} isLoading={isLoading} onViewDetails={(e) => setDetailsElectionId(e.id)} />
        </div>
      </div>

      <ElectionsListTimelineHorizontal timeline={timeline} />

      <ElectionsListQuickActionsGrid actions={quickActions} />

      <ElectionDetailsModal
        electionId={detailsElectionId}
        open={!!detailsElectionId}
        onOpenChange={(open) => !open && setDetailsElectionId(null)}
      />
    </div>
  );
}
