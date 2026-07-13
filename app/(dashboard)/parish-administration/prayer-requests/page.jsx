"use client";

import Link from "next/link";
import { ChevronRight, HandHeart, FileText, CheckCircle2, Briefcase, UserPlus, Plus } from "lucide-react";

import { PRAYER_REQUEST_SUMMARY_MOCK } from "@/lib/mock/prayerRequestSummaryMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { RequestStatusOverview } from "@/components/prayer-requests/RequestStatusOverview";
import { TopCategoriesPanel } from "@/components/prayer-requests/TopCategoriesPanel";
import { RequestsOverTimeChart } from "@/components/prayer-requests/RequestsOverTimeChart";
import { PrayerFilterBar } from "@/components/prayer-requests/PrayerFilterBar";
import { RecentPrayerRequestsTable } from "@/components/prayer-requests/RecentPrayerRequestsTable";


export default function PrayerRequestSummaryPage() {
  const data = PRAYER_REQUEST_SUMMARY_MOCK;
  const totalForDonut = data.statusOverview.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Prayer Request Summary</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Prayer Request Summary</span>
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-interactive-500 px-3 py-2 text-sm font-semibold text-white shadow-card hover:bg-interactive-600">
          <Plus className="h-4 w-4" />
          Add Prayer Request
        </button>
      </div>

      {/* 5 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <ParishStatCard
          label="Total Requests" value={data.cards.totalRequests.value} sublabel={data.cards.totalRequests.sublabel}
          icon={HandHeart} href="/prayers" viewLabel="View all requests"
        />
        <ParishStatCard
          label="Active Requests" value={data.cards.activeRequests.value} sublabel={data.cards.activeRequests.sublabel}
          icon={FileText} href="/prayers?status=active" viewLabel="View active requests"
        />
        <ParishStatCard
          label="Answered Requests" value={data.cards.answeredRequests.value} sublabel={data.cards.answeredRequests.sublabel}
          icon={CheckCircle2} href="/prayers?status=answered" viewLabel="View answered requests"
        />
        <ParishStatCard
          label="Closed Requests" value={data.cards.closedRequests.value} sublabel={data.cards.closedRequests.sublabel}
          icon={Briefcase} href="/prayers?status=closed" viewLabel="View closed requests"
        />
        <ParishStatCard
          label="Requests This Month" value={data.cards.requestsThisMonth.value} sublabel={data.cards.requestsThisMonth.sublabel}
          icon={UserPlus} href="/prayers?range=month" viewLabel="View monthly requests"
        />
      </div>

      {/* Status donut | Top categories | Over-time chart */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <RequestStatusOverview total={totalForDonut} statusOverview={data.statusOverview} />
        <TopCategoriesPanel categories={data.topCategories} />
        <RequestsOverTimeChart data={data.requestsOverTime} />
      </div>

      <PrayerFilterBar filters={data.filters} />

      <RecentPrayerRequestsTable requests={data.recentRequests} />
    </div>
  );
}
