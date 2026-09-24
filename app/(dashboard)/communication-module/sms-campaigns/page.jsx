"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { useSmsCampaigns } from "@/hooks/useSmsCampaigns";
import { Button } from "@/components/ui/Button";
import { CampaignsStatsRow } from "@/components/communication-module/sms-campaigns/CampaignsStatsRow";
import { CampaignsTable } from "@/components/communication-module/sms-campaigns/CampaignsTable";
import { CampaignOverviewDonutCard } from "@/components/communication-module/sms-campaigns/CampaignOverviewDonutCard";
import { CampaignTypesCard } from "@/components/communication-module/sms-campaigns/CampaignTypesCard";
import { CampaignQuickActions } from "@/components/communication-module/sms-campaigns/CampaignQuickActions";
import { CampaignTipsCard } from "@/components/communication-module/sms-campaigns/CampaignTipsCard";

export default function SmsCampaignsPage() {
  const router = useRouter();
  const {
    campaigns, totalCount, isLoading, stats, donut, campaignTypes,
    tabs, activeTab, setActiveTab,
    search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter,
    page, setPage, pageSize,
  } = useSmsCampaigns();

  const openDetails = (row) => router.push(`/communication-module/sms-campaigns/${row.id}`);

  return (
    <div className="space-y-5 pb-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">SMS Campaigns</h1>
          <p className="mt-1 text-sm text-ink-subtle">Create, manage and track SMS campaigns to reach your community instantly.</p>
        </div>
        <Link href="/communication-module/sms-campaigns/add">
          <Button type="button" leftIcon={<Plus className="h-4 w-4" />}>Create SMS Campaign</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          <CampaignsStatsRow stats={stats} />
          <CampaignsTable
            campaigns={campaigns}
            isLoading={isLoading}
            pagination={{ page, pageSize, totalCount, onPageChange: setPage }}
            tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}
            search={search} onSearchChange={setSearch}
            statusFilter={statusFilter} onStatusFilterChange={setStatusFilter}
            typeFilter={typeFilter} onTypeFilterChange={setTypeFilter}
            onViewDetails={openDetails}
            onResend={(row) => console.log("Resend", row.id)}
            onDuplicate={(row) => console.log("Duplicate", row.id)}
            onDelete={(row) => console.log("Delete", row.id)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <CampaignOverviewDonutCard data={donut} />
          <CampaignTypesCard types={campaignTypes} />
          <CampaignQuickActions />
          <CampaignTipsCard />
        </div>
      </div>
    </div>
  );
}
