"use client";

import { CampaignInformationSection } from "./CampaignInformationSection";
import { CampaignAudienceSelector } from "./CampaignAudienceSelector";
import { ScheduleSection } from "./ScheduleSection";

export function CampaignSetupStep({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <CampaignInformationSection form={form} setField={setField} />
      <CampaignAudienceSelector value={form.audienceType} onChange={(v) => setField("audienceType", v)} estimatedRecipients={form.estimatedRecipients} />
      <ScheduleSection form={form} setField={setField} />
    </div>
  );
}
