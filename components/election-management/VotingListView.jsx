"use client";

import Link from "next/link";
import { Vote, Search, SlidersHorizontal, Download, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useVotingList } from "@/hooks/useVotingList";
import { VotingTable } from "@/components/election-management/VotingTable";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  VOTING_QUICK_ACTIONS, VOTING_NOTE_TEXT, VOTING_STATUS_OPTIONS,
  VOTING_ELECTION_OPTIONS, VOTING_MEMBERSHIP_OPTIONS,
} from "@/lib/mock/vmVotingMockData";

export function VotingListView() {
  const {
    voters, totalCount, isLoading, overview,
    search, setSearch, electionFilter, setElectionFilter, statusFilter, setStatusFilter,
    membershipFilter, setMembershipFilter, page, setPage, pageSize, clearFilters,
  } = useVotingList();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Vote className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Voting</h1>
            <p className="mt-1 text-sm text-ink-subtle">Track voter participation and voting status for the election.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Voting List</Button>
          <Link href="/election-management/voting/start">
            <Button type="button" variant="primary" leftIcon={<PlayCircle className="h-4 w-4" />}>Start Voting</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search voters..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={electionFilter} onChange={(e) => setElectionFilter(e.target.value)} className={selectClass}>
              <option>All Elections</option>
              {VOTING_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {VOTING_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={membershipFilter} onChange={(e) => setMembershipFilter(e.target.value)} className={selectClass}>
              <option>All Membership Types</option>
              {VOTING_MEMBERSHIP_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">Clear</button>
          </div>

          <VotingTable
            voters={voters} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={VOTING_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={overview} title="Voting Overview" totalLabel="Total Voters" />
          <NoteCard>{VOTING_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
