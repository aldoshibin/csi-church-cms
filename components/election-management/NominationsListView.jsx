"use client";

import { FileEdit, Search, SlidersHorizontal, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNominations } from "@/hooks/useNominations";
import { NominationsTable } from "@/components/election-management/NominationsTable";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  NOMINATIONS_QUICK_ACTIONS, NOMINATIONS_NOTE_TEXT, NOMINATION_STATUS_OPTIONS,
  NOMINATION_ELECTION_OPTIONS, NOMINATION_POSITION_OPTIONS,
} from "@/lib/mock/vmNominationsMockData";

export function NominationsListView() {
  const {
    nominations, totalCount, isLoading, overview,
    search, setSearch, electionFilter, setElectionFilter, positionFilter, setPositionFilter,
    statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  } = useNominations();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <FileEdit className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Nominations</h1>
            <p className="mt-1 text-sm text-ink-subtle">Manage all nominations for the election.</p>
          </div>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Export Nominations</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search nominations..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={electionFilter} onChange={(e) => setElectionFilter(e.target.value)} className={selectClass}>
              <option>All Elections</option>
              {NOMINATION_ELECTION_OPTIONS.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
            <select value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} className={selectClass}>
              <option>All Positions</option>
              {NOMINATION_POSITION_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {NOMINATION_STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">Clear</button>
          </div>

          <NominationsTable
            nominations={nominations} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={NOMINATIONS_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={overview} title="Nomination Overview" totalLabel="Total Nominations" />
          <NoteCard>{NOMINATIONS_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
