"use client";

import { CAMPAIGN_AUDIENCE_TYPE_OPTIONS } from "@/lib/mock/vmEmailCampaignsMockData";

function Row({ label, children }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-border py-3 text-sm last:border-0">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{children ?? "–"}</span>
    </div>
  );
}

export function ReviewConfirmStep({ form }) {
  const audienceLabel = CAMPAIGN_AUDIENCE_TYPE_OPTIONS.find((o) => o.key === form.audienceType)?.label ?? "–";
  const sendLabel =
    form.sendOption === "immediate" ? "Send Immediately" :
    form.sendOption === "schedule" ? `Scheduled for ${form.scheduleDate} at ${form.scheduleTime}` :
    "Save as Draft";

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Review &amp; Confirm</h3>
      <p className="mt-0.5 text-xs text-ink-subtle">Please review your campaign details before sending.</p>

      <div className="mt-4">
        <Row label="Campaign Name">{form.campaignName || undefined}</Row>
        <Row label="Campaign Type">{form.campaignType}</Row>
        <Row label="Subject Line">{form.subjectLine || undefined}</Row>
        <Row label="Preheader Text">{form.preheaderText || undefined}</Row>
        <Row label="Audience">{audienceLabel}</Row>
        <Row label="Template">{form.template}</Row>
        <Row label="Send Settings">{sendLabel}</Row>
      </div>

      <div className="mt-4 rounded-lg border border-border bg-surface-canvas/40 p-4">
        <p className="text-xs text-ink-subtle">Email Preview</p>
        <p className="mt-2 whitespace-pre-line text-sm text-ink-muted">{form.emailBody || "No content written yet."}</p>
      </div>
    </div>
  );
}
