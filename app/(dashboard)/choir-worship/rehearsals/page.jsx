"use client";

import Link from "next/link";
import { Plus, Download, ChevronDown } from "lucide-react";

import { useRehearsalsList } from "@/hooks/useRehearsalsList";
import { Button } from "@/components/ui/Button";
import { RehearsalsTable } from "@/components/choir-worship/rehearsals/RehearsalsTable";
import { RehearsalsUpcomingCard } from "@/components/choir-worship/rehearsals/RehearsalsUpcomingCard";
import { TeamAttendanceCard } from "@/components/choir-worship/rehearsals/TeamAttendanceCard";
import { RehearsalsQuickActions } from "@/components/choir-worship/rehearsals/RehearsalsQuickActions";

export default function RehearsalsPage() {
  const {
    rehearsals, totalCount, isLoading, upcoming, teamAttendance,
    search, setSearch, teamFilter, setTeamFilter, locationFilter, setLocationFilter, statusFilter, setStatusFilter,
    page, setPage, pageSize, refetch,
  } = useRehearsalsList();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Rehearsals</h1>
          <p className="mt-1 text-sm text-ink-subtle">Manage and organize all choir &amp; worship team rehearsals.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
            Export
          </Button>
          <Link href="/choir-worship/rehearsals/add">
            <Button type="button" leftIcon={<Plus className="h-4 w-4" />} rightIcon={<ChevronDown className="h-4 w-4 opacity-70" />}>
              Add Rehearsal
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RehearsalsTable
            rehearsals={rehearsals}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            search={search} onSearchChange={setSearch}
            teamFilter={teamFilter} onTeamFilterChange={setTeamFilter}
            locationFilter={locationFilter} onLocationFilterChange={setLocationFilter}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            onRefresh={refetch}
          />
        </div>

        <div className="flex flex-col gap-5">
          <RehearsalsUpcomingCard items={upcoming} />
          <TeamAttendanceCard data={teamAttendance} />
          <RehearsalsQuickActions />
        </div>
      </div>
    </div>
  );
}
