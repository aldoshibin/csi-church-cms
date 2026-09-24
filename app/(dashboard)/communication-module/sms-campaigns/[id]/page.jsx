"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useSmsCampaignDetail } from "@/hooks/useSmsCampaignDetail";
import { Badge } from "@/components/ui/Badge";
import { SMS_CAMPAIGN_STATUS_VARIANT } from "@/lib/mock/vmSmsCampaignsMockData";
import { CampaignIcon } from "@/components/communication-module/sms-campaigns/CampaignIcon";
import { CampaignDetailTabs } from "@/components/communication-module/sms-campaigns/detail/CampaignDetailTabs";
import { CampaignTabPlaceholder } from "@/components/communication-module/sms-campaigns/detail/CampaignTabPlaceholder";
import { CampaignDetailActionsMenu } from "@/components/communication-module/sms-campaigns/detail/CampaignDetailActionsMenu";
import { CampaignOverviewCard } from "@/components/communication-module/sms-campaigns/detail/CampaignOverviewCard";
import { CampaignActivityLogCard } from "@/components/communication-module/sms-campaigns/detail/CampaignActivityLogCard";
import { CampaignAttachmentsCard } from "@/components/communication-module/sms-campaigns/detail/CampaignAttachmentsCard";
import { CampaignSummarySidebarCard } from "@/components/communication-module/sms-campaigns/detail/CampaignSummarySidebarCard";
import { CampaignPerformanceOverviewCard } from "@/components/communication-module/sms-campaigns/detail/CampaignPerformanceOverviewCard";
import { CampaignQuickActionsSidebarCard } from "@/components/communication-module/sms-campaigns/detail/CampaignQuickActionsSidebarCard";

export default function SmsCampaignDetailPage() {
  const { id } = useParams();
  const { campaign, isLoading } = useSmsCampaignDetail(id);
  const [activeTab, setActiveTab] = React.useState("Overview");

  if (isLoading || !campaign) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/sms-campaigns" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to SMS Campaigns
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-white p-5 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-success-50 text-success-600">
            <CampaignIcon name="MessageCircle" className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-xl font-bold text-ink">{campaign.title}</h1>
              <Badge variant={SMS_CAMPAIGN_STATUS_VARIANT[campaign.status] ?? "default"}>{campaign.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{campaign.preview}</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span>Type: <span className="font-medium text-ink">{campaign.type}</span> <span className="block text-xs text-ink-subtle">Campaign Type</span></span>
              <span>Audience: <span className="font-medium text-ink">{campaign.audience}</span> <span className="block text-xs text-ink-subtle">{campaign.recipientsCount.toLocaleString()} recipients</span></span>
              <span>
                Sent On: <span className="font-medium text-ink">
                  {new Date(campaign.sentOn).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span className="block text-xs text-ink-subtle">
                  {new Date(campaign.sentOn).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" })}
                </span>
              </span>
              <span>Campaign ID: <span className="font-medium text-ink">{campaign.id}</span></span>
            </div>
          </div>
        </div>
        <CampaignDetailActionsMenu
          onResend={() => console.log("Resend", campaign.id)}
          onDuplicate={() => console.log("Duplicate", campaign.id)}
          onDownload={() => console.log("Download report", campaign.id)}
          onDelete={() => console.log("Delete", campaign.id)}
        />
      </div>

      <CampaignDetailTabs active={activeTab} onChange={setActiveTab} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="flex flex-col gap-5 xl:col-span-2">
          {activeTab === "Overview" && (
            <>
              <CampaignOverviewCard campaign={campaign} />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <CampaignActivityLogCard activityLog={campaign.activityLog} />
                <CampaignAttachmentsCard attachments={campaign.attachments} />
              </div>
            </>
          )}
          {activeTab === "Recipients" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Recipients" /></div>}
          {activeTab === "Message Content" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Message Content" /></div>}
          {activeTab === "Delivery Report" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Delivery Report" /></div>}
          {activeTab === "Activity Log" && <CampaignActivityLogCard activityLog={campaign.activityLog} />}
        </div>

        <div className="flex flex-col gap-5">
          <CampaignSummarySidebarCard campaign={campaign} />
          <CampaignPerformanceOverviewCard performance={campaign.performance} />
          <CampaignQuickActionsSidebarCard
            onResend={() => console.log("Resend", campaign.id)}
            onCreateSimilar={() => console.log("Create similar", campaign.id)}
            onDownload={() => console.log("Download report", campaign.id)}
            onExport={() => console.log("Export recipients", campaign.id)}
          />
        </div>
      </div>
    </div>
  );
}
