"use client";

import { Badge } from "@/components/ui/Badge";
import { CAMPAIGN_STATUS_VARIANT } from "@/lib/mock/vmEmailCampaignsMockData";

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children}</span>
    </div>
  );
}

function fmt(dt) {
  return new Date(dt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
}

export function CampaignDetailsSidebarCard({ campaign }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Campaign Details</h3>
      <div className="flex flex-col gap-3">
        <Row label="Status"><Badge variant={CAMPAIGN_STATUS_VARIANT[campaign.status] ?? "default"}>{campaign.status}</Badge></Row>
        <Row label="Priority">{campaign.priority}</Row>
        <Row label="Created On">{fmt(campaign.createdOn)}</Row>
        <Row label="Created By">{campaign.createdBy}</Row>
        <Row label="Last Updated">{fmt(campaign.lastUpdated)}</Row>
        <Row label="Channel">{campaign.channel}</Row>
        <Row label="Template Used">{campaign.templateUsed}</Row>
        <Row label="Allow Replies">{campaign.allowReplies ? "Yes" : "No"}</Row>
      </div>
    </div>
  );
}
