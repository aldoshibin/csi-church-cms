"use client";

import { Calendar, ChevronDown, SlidersHorizontal } from "lucide-react";

import { useOnlineGivingDashboard } from "@/hooks/useOnlineGivingDashboard";
import { OnlineGivingStatsCards } from "@/components/online-giving/OnlineGivingStatsCards";
import { DonationsOverviewChart } from "@/components/online-giving/DonationsOverviewChart";
import { DonationsByPaymentMethodCard } from "@/components/online-giving/DonationsByPaymentMethodCard";
import { RecentDonationsCard } from "@/components/online-giving/RecentDonationsCard";
import { DonationsByFundCard } from "@/components/online-giving/DonationsByFundCard";
import { QuickStatCards } from "@/components/online-giving/QuickStatCards";
import { PaymentSummaryPanel } from "@/components/online-giving/PaymentSummaryPanel";
import { TopDonorsPanel } from "@/components/online-giving/TopDonorsPanel";
import { QuickActionsRow } from "@/components/online-giving/QuickActionsRow";

export default function OnlineGivingDashboardPage() {
  const {
    stats, donationsOverview, paymentMethod, fundBreakdown,
    recentDonations, recentDonationsTotal, quickStats, paymentSummary, topDonors,
    dateRange,
  } = useOnlineGivingDashboard();

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Online Giving &amp; Payments Dashboard</h1>
          <p className="mt-1 text-sm text-ink-subtle">Overview of all online giving activities and payments.</p>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Calendar className="h-4 w-4" /> {dateRange} <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
          <button type="button" className="flex h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <OnlineGivingStatsCards stats={stats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <DonationsOverviewChart data={donationsOverview} />
        </div>
        <DonationsByPaymentMethodCard total={paymentMethod.total} breakdown={paymentMethod.breakdown} />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <RecentDonationsCard donations={recentDonations} totalCount={recentDonationsTotal} />
        </div>

        <div className="flex flex-col gap-4">
          <DonationsByFundCard funds={fundBreakdown} />
          <QuickStatCards stats={quickStats} />
        </div>

        <div className="flex flex-col gap-4">
          <PaymentSummaryPanel summary={paymentSummary} />
          <TopDonorsPanel donors={topDonors} />
          <QuickActionsRow />
        </div>
      </div>
    </div>
  );
}
