"use client";

import Link from "next/link";
import { HandCoins, Calendar, Users2, TrendingUp, Repeat, Search, SlidersHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMissionDonations } from "@/hooks/useMissionDonations";
import { MissionStatCard } from "@/components/mission-evangelism/MissionStatCard";
import { DonationsTable } from "@/components/mission-evangelism/DonationsTable";
import { OutreachOverviewCard } from "@/components/mission-evangelism/OutreachOverviewCard";
import { DonationsByMonthChart } from "@/components/mission-evangelism/DonationsByMonthChart";
import { RecentDonationsCard } from "@/components/mission-evangelism/RecentDonationsCard";
import { QuickActionsCard } from "@/components/mission-evangelism/QuickActionsCard";
import { formatCurrency } from "@/lib/utils";
import {
  DONATIONS_LIST_STATS_MOCK, DONATIONS_BY_FUND_MOCK, DONATIONS_BY_MONTH_MOCK,
  RECENT_DONATIONS_MOCK, DONATIONS_LIST_QUICK_ACTIONS, DONATION_FUND_OPTIONS,
} from "@/lib/mock/vmMissionEvangelismMockData";

export function DonationsListView() {
  const {
    donations, totalCount, isLoading,
    search, setSearch, fundFilter, setFundFilter, page, setPage, pageSize, clearFilters,
  } = useMissionDonations();

  const selectClass =
    "h-10 rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <HandCoins className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-semibold text-ink">Donations</h1>
            <p className="mt-1 text-sm text-ink-subtle">Track and manage all donations and contributions.</p>
          </div>
        </div>
        <Link href="/mission-evangelism/donations/add">
          <Button type="button" variant="primary" leftIcon={<Plus className="h-4 w-4" />}>Add New Donation</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MissionStatCard icon={HandCoins} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" label="Total Donations" value={DONATIONS_LIST_STATS_MOCK.totalDonations.value} sub={DONATIONS_LIST_STATS_MOCK.totalDonations.sub} />
        <MissionStatCard icon={Calendar} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" label="Total Transactions" value={DONATIONS_LIST_STATS_MOCK.totalTransactions.value} sub={DONATIONS_LIST_STATS_MOCK.totalTransactions.sub} />
        <MissionStatCard icon={Users2} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" label="Total Donors" value={DONATIONS_LIST_STATS_MOCK.totalDonors.value} sub={DONATIONS_LIST_STATS_MOCK.totalDonors.sub} />
        <MissionStatCard icon={TrendingUp} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" label="Average Donation" value={DONATIONS_LIST_STATS_MOCK.averageDonation.value} sub={DONATIONS_LIST_STATS_MOCK.averageDonation.sub} />
        <MissionStatCard icon={Repeat} iconBg="bg-[#FFE5E5]" iconColor="text-[#DC2626]" label="Recurring Donations" value={DONATIONS_LIST_STATS_MOCK.recurringDonations.value} sub={DONATIONS_LIST_STATS_MOCK.recurringDonations.sub} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
              <input
                value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search donations..."
                className="h-10 w-full rounded-md border border-border bg-white pl-9 pr-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
              />
            </div>
            <select value={fundFilter} onChange={(e) => setFundFilter(e.target.value)} className={selectClass}>
              <option>All Funds</option>
              {DONATION_FUND_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            <Button type="button" variant="secondary" leftIcon={<SlidersHorizontal className="h-4 w-4" />}>Filters</Button>
            <button type="button" onClick={clearFilters} className="text-sm font-medium text-interactive-600 hover:underline">Clear</button>
          </div>

          <div className="rounded-lg border border-border bg-white p-4 shadow-card">
            <h3 className="mb-3 text-sm font-semibold text-ink">Recent Transactions</h3>
            <DonationsTable
              donations={donations} isLoading={isLoading}
              page={page} pageSize={pageSize} totalCount={totalCount} onPageChange={setPage}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <OutreachOverviewCard data={DONATIONS_BY_FUND_MOCK} title="Donations by Fund" totalLabel="Total" formatValue={(v) => formatCurrency(v)} />
            <DonationsByMonthChart data={DONATIONS_BY_MONTH_MOCK} title="Donations by Month" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <RecentDonationsCard donations={RECENT_DONATIONS_MOCK} />
          <QuickActionsCard actions={DONATIONS_LIST_QUICK_ACTIONS} />
        </div>
      </div>
    </div>
  );
}
