"use client";

import Link from "next/link";
import { UsersRound, UserRound, UserCheck2, Ban, Search, SlidersHorizontal, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCandidates } from "@/hooks/useCandidates";
import { ElectionStatCard } from "@/components/election-management/ElectionStatCard";
import { CandidatesTable } from "@/components/election-management/CandidatesTable";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  CANDIDATES_QUICK_ACTIONS, CANDIDATES_NOTE_TEXT, CANDIDATE_STATUS_OPTIONS,
  CANDIDATE_ELECTION_OPTIONS, CANDIDATE_POSITION_OPTIONS,
} from "@/lib/mock/vmCandidatesMockData";

export function CandidatesListView() {
  const {
    candidates, totalCount, isLoading, stats, overview,
    search, setSearch, electionFilter, setElectionFilter, positionFilter, setPositionFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  } = useCandidates();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <UsersRound className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Candidates</h1>
            <p className="mt-1 text-sm text-ink-subtle">View and manage all candidates for elections.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Candidates</Button>
          <Link href="/election-management/candidates/add">
            <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add New Candidate</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ElectionStatCard icon={UsersRound} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Candidates" value={stats.total.value} sub={stats.total.sub} />
        <ElectionStatCard icon={UserRound} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Approved" value={stats.approved.value} sub={stats.approved.sub} />
        <ElectionStatCard icon={UserCheck2} iconBg="bg-[#FEF3C7]" iconColor="text-[#D97706]" label="Pending Approval" value={stats.pendingApproval.value} sub={stats.pendingApproval.sub} />
        <ElectionStatCard icon={Ban} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Rejected" value={stats.rejected.value} sub={stats.rejected.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search candidates..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={electionFilter} onChange={(e) => setElectionFilter(e.target.value)} className={selectClass}>
              <option>All Elections</option>
              {CANDIDATE_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
            <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} className={selectClass}>
              <option>All Positions</option>
              {CANDIDATE_POSITION_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {CANDIDATE_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">Clear</button>
          </div>

          <CandidatesTable
            candidates={candidates} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={CANDIDATES_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={overview} />
          <NoteCard>{CANDIDATES_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
