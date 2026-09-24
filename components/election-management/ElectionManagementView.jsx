"use client";

import Link from "next/link";
import { Shield, Vote, Users2, UsersRound, Users, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useElectionManagement } from "@/hooks/useElectionManagement";
import { ElectionStatCard } from "@/components/election-management/ElectionStatCard";
import { ElectionsTable } from "@/components/election-management/ElectionsTable";
import { ElectionTimelineCard } from "@/components/election-management/ElectionTimelineCard";
import { RecentActivityCard } from "@/components/election-management/RecentActivityCard";
import { ElectionOverviewCard } from "@/components/election-management/ElectionOverviewCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import { ELECTION_QUICK_ACTIONS, ELECTION_NOTE_TEXT } from "@/lib/mock/vmElectionManagementMockData";

export function ElectionManagementView() {
  const {
    stats, timeline, recentActivity, overview, isLoading,
    tabs, activeTab, setActiveTab, elections,
  } = useElectionManagement();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-semibold text-ink">
            <Shield className="h-6 w-6 text-interactive-600" /> Election Management
          </h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage church elections, nominations, voting and results.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            <ElectionStatCard
              icon={Vote} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Upcoming Elections"
              value={stats.upcomingElections.value} linkLabel={stats.upcomingElections.linkLabel} href={stats.upcomingElections.href}
            />
            <ElectionStatCard
              icon={Users2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Positions"
              value={stats.totalPositions.value} sub={stats.totalPositions.sub}
            />
            <ElectionStatCard
              icon={UsersRound} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Candidates"
              value={stats.totalCandidates.value} sub={stats.totalCandidates.sub}
            />
            <ElectionStatCard
              icon={Users} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Voters"
              value={stats.totalVoters.value} sub={stats.totalVoters.sub}
            />
            <ElectionStatCard
              icon={Mail} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Completed Elections"
              value={stats.completedElections.value} linkLabel={stats.completedElections.linkLabel} href={stats.completedElections.href}
            />
          </div>

          <div className="rounded-lg border border-border bg-white shadow-card">
            <div className="flex flex-col justify-between gap-3 border-b border-border p-4 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-1">
                {tabs.map((t) => (
                  <button
                    key={t} type="button" onClick={() => setActiveTab(t)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === t ? "border-b-2 border-interactive-600 text-interactive-600" : "text-ink-subtle hover:text-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <Link href="/election-management/elections/add">
                <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Create Election</Button>
              </Link>
            </div>

            <ElectionsTable elections={elections} isLoading={isLoading} emptyMessage={`No ${activeTab.toLowerCase()}.`} />

            <div className="flex items-center justify-between p-4">
              <p className="text-sm text-ink-subtle">Showing 1 to {elections.length} of {elections.length} elections</p>
              <Link href="/election-management/elections" className="flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
                View All Elections →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ElectionTimelineCard timeline={timeline} />
            <RecentActivityCard activity={recentActivity} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={ELECTION_QUICK_ACTIONS} />
          <ElectionOverviewCard data={overview} />
          <NoteCard>{ELECTION_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
