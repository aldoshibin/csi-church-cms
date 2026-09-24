"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useCampaignDetail } from "@/hooks/useCampaignDetail";
import { Badge } from "@/components/ui/Badge";
import { CAMPAIGN_STATUS_VARIANT } from "@/lib/mock/vmEmailCampaignsMockData";
import { CampaignIcon } from "@/components/communication-module/email-campaigns/CampaignIcon";
import { CampaignDetailTabs } from "@/components/communication-module/email-campaigns/detail/CampaignDetailTabs";
import { CampaignTabPlaceholder } from "@/components/communication-module/email-campaigns/detail/CampaignTabPlaceholder";
import { CampaignDetailActionsMenu } from "@/components/communication-module/email-campaigns/detail/CampaignDetailActionsMenu";
import { CampaignEmailContentCard } from "@/components/communication-module/email-campaigns/detail/CampaignEmailContentCard";
import { CampaignAttachmentsLinksCard } from "@/components/communication-module/email-campaigns/detail/CampaignAttachmentsLinksCard";
import { CampaignActivityLogCard } from "@/components/communication-module/email-campaigns/detail/CampaignActivityLogCard";
import { CampaignDetailsSidebarCard } from "@/components/communication-module/email-campaigns/detail/CampaignDetailsSidebarCard";
import { CampaignPerformanceSummaryCard } from "@/components/communication-module/email-campaigns/detail/CampaignPerformanceSummaryCard";
import { CampaignQuickActionsSidebarCard } from "@/components/communication-module/email-campaigns/detail/CampaignQuickActionsSidebarCard";

export default function CampaignDetailPage() {
  const { id } = useParams();
  const { campaign, isLoading } = useCampaignDetail(id);
  const [activeTab, setActiveTab] = React.useState("Overview");

  if (isLoading || !campaign) {
    return <div className="py-16 text-center text-sm text-ink-subtle">Loading…</div>;
  }

  return (
    <div className="space-y-5 pb-10">
      <Link href="/communication-module/email-campaigns" className="flex items-center gap-1.5 text-xs font-medium text-interactive-500 hover:underline">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Email Campaigns
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg border border-border bg-white p-5 shadow-card">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
            <CampaignIcon name="Cross" className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-xl font-bold text-ink">{campaign.title}</h1>
              <Badge variant={CAMPAIGN_STATUS_VARIANT[campaign.status] ?? "default"}>{campaign.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{campaign.preview}</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span>Type: <span className="font-medium text-ink">{campaign.type}</span></span>
              <span>Audience: <span className="font-medium text-ink">{campaign.audience}</span> <span className="text-ink-subtle">({campaign.recipientsCount.toLocaleString()} recipients)</span></span>
              <span>
                Sent On: <span className="font-medium text-ink">
                  {new Date(campaign.sentOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
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
              <CampaignEmailContentCard campaign={campaign} />
              <CampaignAttachmentsLinksCard campaign={campaign} />
              <CampaignActivityLogCard activityLog={campaign.activityLog} />
            </>
          )}
          {activeTab === "Performance" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Performance" /></div>}
          {activeTab === "Recipients" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Recipients" /></div>}
          {activeTab === "Content" && <div className="rounded-lg border border-border bg-white p-6 shadow-card"><CampaignTabPlaceholder label="Content" /></div>}
          {activeTab === "Activity Log" && <CampaignActivityLogCard activityLog={campaign.activityLog} />}
        </div>

        <div className="flex flex-col gap-5">
          <CampaignDetailsSidebarCard campaign={campaign} />
          <CampaignPerformanceSummaryCard performance={campaign.performance} />
          <CampaignQuickActionsSidebarCard
            onResend={() => console.log("Resend", campaign.id)}
            onDuplicate={() => console.log("Duplicate", campaign.id)}
            onViewRecipients={() => console.log("View recipients", campaign.id)}
            onDownload={() => console.log("Download report", campaign.id)}
          />
        </div>
      </div>
    </div>
  );
}
