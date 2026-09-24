"use client";

import { BarChart3, Users2, CheckCircle2, XCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useResults } from "@/hooks/useResults";
import { ElectionStatCard } from "@/components/election-management/ElectionStatCard";
import { PositionResultsTable } from "@/components/election-management/PositionResultsTable";
import { VotesDistributionChart } from "@/components/election-management/VotesDistributionChart";
import { OverallSummaryCard } from "@/components/election-management/OverallSummaryCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import { RESULTS_TABS, RESULTS_QUICK_ACTIONS, RESULTS_NOTE_TEXT } from "@/lib/mock/vmResultsMockData";

export function ResultsView() {
  const { stats, overview, positionResults, overallSummary, activeTab, setActiveTab } = useResults();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Results</h1>
            <p className="mt-1 text-sm text-ink-subtle">View the declared results for the election.</p>
          </div>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Results</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ElectionStatCard icon={Users2} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Eligible Voters" value={stats.totalEligibleVoters.value} sub={stats.totalEligibleVoters.sub} />
        <ElectionStatCard icon={CheckCircle2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Votes Cast" value={stats.totalVotesCast.value} sub={stats.totalVotesCast.sub} />
        <ElectionStatCard icon={CheckCircle2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Valid Votes" value={stats.validVotes.value} sub={stats.validVotes.sub} />
        <ElectionStatCard icon={XCircle} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Rejected Votes" value={stats.rejectedVotes.value} sub={stats.rejectedVotes.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-1 border-b border-border">
            {RESULTS_TABS.map((tab) => (
              <button
                key={tab} type="button" onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab ? "border-b-2 border-interactive-500 text-interactive-600" : "text-ink-subtle hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Position Results" ? (
            <>
              <PositionResultsTable results={positionResults} />
              <VotesDistributionChart results={positionResults} />
            </>
          ) : (
            <OverallSummaryCard summary={overallSummary} />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={RESULTS_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={overview} title="Results Overview" totalLabel="Total Votes Cast" />
          <NoteCard>{RESULTS_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
