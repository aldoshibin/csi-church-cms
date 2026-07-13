"use client";

import Link from "next/link";
import { ChevronRight, Church, Users, Cross, UserCog, TrendingUp, Calendar as CalendarIcon } from "lucide-react";

import { BRANCH_CHURCH_OVERVIEW_MOCK } from "@/lib/mock/branchChurchOverviewMockData";
import { ParishStatCard } from "@/components/parish-administration/ParishStatCard";
import { BranchChurchLocationPanel } from "@/components/branch-church-overview/BranchChurchLocationPanel";
import { MembershipTrendChart } from "@/components/branch-church-overview/MembershipTrendChart";
import { BranchSummaryPanel } from "@/components/branch-church-overview/BranchSummaryPanel";
import { BranchQuickActions } from "@/components/branch-church-overview/BranchQuickActions";
import { BranchChurchSummaryTable } from "@/components/branch-church-overview/BranchChurchSummaryTable";
import { formatCurrency } from "@/lib/utils";


export default function BranchChurchOverviewPage() {
  const data = BRANCH_CHURCH_OVERVIEW_MOCK;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Branch Church Overview</h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm">
            <Link href="/parish-administration" className="text-interactive-500 hover:underline">
              Parish Administration
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-ink-subtle" />
            <span className="text-ink-subtle">Branch Church Overview</span>
          </p>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-ink-subtle">
          Data as of: <span className="font-medium text-ink">{data.dataAsOf}</span>
          <CalendarIcon className="h-3.5 w-3.5" />
        </p>
      </div>

      {/* 5 stat cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <ParishStatCard label="Total Branch Churches" value={data.cards.totalBranchChurches.value} sublabel={data.cards.totalBranchChurches.sublabel} icon={Church} />
        <ParishStatCard label="Total Members" value={data.cards.totalMembers.value.toLocaleString()} sublabel={data.cards.totalMembers.sublabel} icon={Users} />
        <ParishStatCard label="Worship Services" value={data.cards.worshipServices.value} sublabel={data.cards.worshipServices.sublabel} icon={Cross} />
        <ParishStatCard label="Ministries & Groups" value={data.cards.ministriesGroups.value} sublabel={data.cards.ministriesGroups.sublabel} icon={UserCog} />
        <ParishStatCard label="Total Offerings (May)" value={formatCurrency(data.cards.totalOfferings.value)} sublabel={data.cards.totalOfferings.sublabel} icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.3fr_1.3fr_1fr]">
        <BranchChurchLocationPanel pins={data.mapPins} regions={data.branchesByRegion} total={data.regionTotal} />
        <MembershipTrendChart data={data.membershipTrend} />
        <div className="space-y-4">
          <BranchSummaryPanel summary={data.branchSummary} />
          <BranchQuickActions actions={data.quickActions} />
        </div>
      </div>

      <BranchChurchSummaryTable branches={data.branches} />
    </div>
  );
}
