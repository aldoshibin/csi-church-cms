"use client";

import { CampaignInformationSection } from "./CampaignInformationSection";
import { CampaignAudienceSelector } from "./CampaignAudienceSelector";
import { SendSettingsSection } from "./SendSettingsSection";

export function CampaignSetupStep({ form, setField }) {
  return (
    <div className="flex flex-col gap-5">
      <CampaignInformationSection form={form} setField={setField} />
      <CampaignAudienceSelector value={form.audienceType} onChange={(v) => setField("audienceType", v)} estimatedRecipients={form.estimatedRecipients} />
      <SendSettingsSection form={form} setField={setField} />
    </div>
  );
}
