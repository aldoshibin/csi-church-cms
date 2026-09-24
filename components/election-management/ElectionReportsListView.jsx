"use client";

import { FileBarChart2, Search, PlusCircle, Users2, CheckCircle2, Vote, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useElectionReports } from "@/hooks/useElectionReports";
import { ElectionStatCard } from "@/components/election-management/ElectionStatCard";
import { RecentReportsTable } from "@/components/election-management/RecentReportsTable";
import { ReportsOverTimeChart } from "@/components/election-management/ReportsOverTimeChart";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  ELECTION_REPORTS_QUICK_ACTIONS, ELECTION_REPORTS_NOTE_TEXT,
  REPORT_ELECTION_OPTIONS, REPORT_TYPE_OPTIONS,
} from "@/lib/mock/vmElectionReportsMockData";

export function ElectionReportsListView() {
  const {
    reports, totalCount, isLoading, stats, overTime, byFormat, categories,
    search, setSearch, electionFilter, setElectionFilter, typeFilter, setTypeFilter, page, setPage, pageSize,
  } = useElectionReports();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <FileBarChart2 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Reports</h1>
            <p className="mt-1 text-sm text-ink-subtle">Generate and view election reports.</p>
          </div>
        </div>
        <Button type="button" variant="primary" leftIcon={<PlusCircle className="h-4 w-4" />}>Generate New Report</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <ElectionStatCard icon={Vote} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Total Elections" value={stats.totalElections.value} sub={stats.totalElections.sub} />
        <ElectionStatCard icon={CheckCircle2} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Completed Elections" value={stats.completedElections.value} sub={stats.completedElections.sub} />
        <ElectionStatCard icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Eligible Voters" value={stats.totalEligibleVoters.value} sub={stats.totalEligibleVoters.sub} />
        <ElectionStatCard icon={Users2} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Votes Cast" value={stats.totalVotesCast.value} sub={stats.totalVotesCast.sub} />
        <ElectionStatCard icon={FileBarChart} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Reports Generated" value={stats.reportsGenerated.value} sub={stats.reportsGenerated.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <ReportsOverTimeChart data={overTime} />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
                <input
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search reports..."
                  className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
                />
              </div>
              <select value={electionFilter} onChange={(e) => setElectionFilter(e.target.value)} className={selectClass}>
                <option>All Elections</option>
                {REPORT_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
              <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={selectClass}>
                <option>All Types</option>
                {REPORT_TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <RecentReportsTable
              reports={reports} isLoading={isLoading}
              page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={ELECTION_REPORTS_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={byFormat} title="Reports by Format" totalLabel="Total Reports" />
          <CandidatesOverviewCard data={categories} title="Report Categories" totalLabel="Total Reports" />
          <NoteCard>{ELECTION_REPORTS_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
