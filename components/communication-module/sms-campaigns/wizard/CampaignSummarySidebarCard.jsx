"use client";

import { Send, Users2, Radio, MessageSquareText, IndianRupee, Clock } from "lucide-react";
import { SMS_CAMPAIGN_AUDIENCE_TYPE_OPTIONS } from "@/lib/mock/vmSmsCampaignsMockData";

function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="flex items-center gap-2 text-ink-subtle">
        <Icon className="h-4 w-4 text-ink-subtle" /> {label}
      </span>
      <span className="text-right font-medium text-ink">{children ?? "–"}</span>
    </div>
  );
}

export function CampaignSummarySidebarCard({ form }) {
  const audienceLabel = SMS_CAMPAIGN_AUDIENCE_TYPE_OPTIONS.find((o) => o.key === form.audienceType)?.label ?? "–";
  const recipients = form.audienceType === "all" ? `${form.estimatedRecipients.toLocaleString()} members` : audienceLabel;
  const parts = Math.max(1, Math.ceil((form.message.length || 1) / 160));
  const scheduled = form.sendOption === "schedule" ? `${form.scheduleDate} ${form.scheduleTime}` : form.sendOption === "draft" ? "Not scheduled" : "Send Immediately";

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Campaign Summary</h3>
      <div className="flex flex-col gap-3">
        <Row icon={Send} label="Campaign Type">{form.campaignType}</Row>
        <Row icon={Users2} label="Recipients">{recipients}</Row>
        <Row icon={Radio} label="Channel">SMS</Row>
        <Row icon={MessageSquareText} label="Message Parts">{`${parts} SMS`}</Row>
        <Row icon={IndianRupee} label="Estimated Cost">&#8377;0.00</Row>
        <Row icon={Clock} label="Scheduled">{scheduled}</Row>
      </div>
    </div>
  );
}
