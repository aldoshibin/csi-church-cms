"use client";

import Link from "next/link";
import { Plane, Briefcase, Users2, MapPin, Calendar, HeartHandshake, Search, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMissionTrips } from "@/hooks/useMissionTrips";
import { MissionStatCard } from "@/components/mission-evangelism/MissionStatCard";
import { TripsTable } from "@/components/mission-evangelism/TripsTable";
import { UpcomingActivitiesCard } from "@/components/mission-evangelism/UpcomingActivitiesCard";
import { QuickActionsCard } from "@/components/mission-evangelism/QuickActionsCard";
import {
  TRIP_LIST_STATS_MOCK, TRIP_LIST_QUICK_ACTIONS, UPCOMING_TRIPS_MOCK, TRIP_STATUS_BADGE_MAP,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function MissionTripsListView() {
  const {
    trips, totalCount, isLoading,
    search, setSearch, statusFilter, setStatusFilter, page, setPage, pageSize, clearFilters,
  } = useMissionTrips();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";
  const statusOptions = Object.keys(TRIP_STATUS_BADGE_MAP);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Plane className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Mission Trips</h1>
            <p className="mt-1 text-sm text-ink-subtle">Plan, manage and monitor mission trips and outreach journeys.</p>
          </div>
        </div>
        <Link href="/mission-evangelism/mission-trips/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add New Trip</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MissionStatCard icon={Briefcase} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Trips" value={TRIP_LIST_STATS_MOCK.totalTrips.value} sub={TRIP_LIST_STATS_MOCK.totalTrips.sub} />
        <MissionStatCard icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Participants" value={TRIP_LIST_STATS_MOCK.participants.value} sub={TRIP_LIST_STATS_MOCK.participants.sub} />
        <MissionStatCard icon={MapPin} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Destinations" value={TRIP_LIST_STATS_MOCK.destinations.value} sub={TRIP_LIST_STATS_MOCK.destinations.sub} />
        <MissionStatCard icon={Calendar} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Days of Outreach" value={TRIP_LIST_STATS_MOCK.daysOfOutreach.value} sub={TRIP_LIST_STATS_MOCK.daysOfOutreach.sub} />
        <MissionStatCard icon={HeartHandshake} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Total Expenditure" value={TRIP_LIST_STATS_MOCK.totalExpenditure.value} sub={TRIP_LIST_STATS_MOCK.totalExpenditure.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search trips..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={selectClass}>
              <option>All Status</option>
              {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">Clear</button>
          </div>

          <div className="rounded-lg border border-border bg-white p-4 shadow-card">
            <h3 className="mb-3 text-sm font-semibold text-ink">All Mission Trips</h3>
            <TripsTable
              trips={trips} isLoading={isLoading}
              page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <UpcomingActivitiesCard activities={UPCOMING_TRIPS_MOCK} title="Upcoming Trips" viewAllLabel="View All Trips" />
          <QuickActionsCard actions={TRIP_LIST_QUICK_ACTIONS} />
        </div>
      </div>
    </div>
  );
}
