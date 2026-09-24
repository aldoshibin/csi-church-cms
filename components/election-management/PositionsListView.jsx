"use client";

import Link from "next/link";
import { UserRound, Search, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { usePositions } from "@/hooks/usePositions";
import { PositionsListTable } from "@/components/election-management/PositionsListTable";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { PositionOverviewCard } from "@/components/election-management/PositionOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  POSITIONS_QUICK_ACTIONS, POSITION_OVERVIEW_MOCK, POSITIONS_NOTE_TEXT, POSITION_STATUS_FILTER_OPTIONS,
} from "@/lib/mock/vmPositionsMockData";

export function PositionsListView() {
  const {
    positions, totalCount, isLoading,
    search, setSearch, statusFilter, setStatusFilter,
    page, setPage, pageSize,
  } = usePositions();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <UserRound className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Positions</h1>
            <p className="mt-1 text-sm text-ink-subtle">Manage all election positions and their details.</p>
          </div>
        </div>
        <Link href="/election-management/positions/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add New Position</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search positions..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {POSITION_STATUS_FILTER_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
          </div>

          <PositionsListTable
            positions={positions} isLoading={isLoading}
            page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
          />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={POSITIONS_QUICK_ACTIONS} />
          <PositionOverviewCard data={POSITION_OVERVIEW_MOCK} />
          <NoteCard>{POSITIONS_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
