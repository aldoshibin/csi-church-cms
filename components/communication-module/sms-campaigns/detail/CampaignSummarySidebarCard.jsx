"use client";

import { Badge } from "@/components/ui/Badge";
import { SMS_CAMPAIGN_STATUS_VARIANT } from "@/lib/mock/vmSmsCampaignsMockData";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

export function CampaignSummarySidebarCard({ campaign }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Campaign Summary</h3>
      <div className="flex flex-col gap-3">
        <Row label="Status"><Badge variant={SMS_CAMPAIGN_STATUS_VARIANT[campaign.status] ?? "default"}>{campaign.status}</Badge></Row>
        <Row label="Sent On">
          {new Date(campaign.sentOn).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" })}
        </Row>
        <Row label="Audience">{campaign.audience}</Row>
        <Row label="Recipients">{campaign.recipientsCount.toLocaleString()}</Row>
        <Row label="Total SMS">{campaign.totalSmsLabel}</Row>
        <Row label="Delivery Time">{campaign.deliveryTimeLabel}</Row>
        <Row label="Channel">{campaign.channel}</Row>
        <Row label="Allow Replies">{campaign.allowReplies ? "Yes" : "No"}</Row>
      </div>
    </div>
  );
}
