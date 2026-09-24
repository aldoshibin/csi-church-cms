"use client";

import { Info } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { SMS_CAMPAIGN_TYPE_OPTIONS, SMS_CAMPAIGN_CATEGORY_OPTIONS } from "@/lib/mock/vmSmsCampaignsMockData";

export function CampaignInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">1. Campaign Information</h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">
            Campaign Name <span className="text-danger-500">*</span>
          </label>
          <input
            value={form.campaignName} onChange={(e) => setField("campaignName", e.target.value)}
            placeholder="Enter campaign name"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
        </div>
        <Select label="Campaign Type" required value={form.campaignType} onChange={(e) => setField("campaignType", e.target.value)}>
          {SMS_CAMPAIGN_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Select label="Purpose / Category" value={form.purposeCategory} onChange={(e) => setField("purposeCategory", e.target.value)}>
          <option value="">Select category</option>
          {SMS_CAMPAIGN_CATEGORY_OPTIONS.map((c) => <option key={c}>{c}</option>)}
        </Select>

        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <label className="text-sm font-medium text-ink">
              Default Sender ID <span className="text-danger-500">*</span>
            </label>
            <Info className="h-3.5 w-3.5 text-ink-subtle" />
          </div>
          <div className="relative">
            <input
              value={form.senderId} maxLength={11} onChange={(e) => setField("senderId", e.target.value.toUpperCase())}
              className="h-10 w-full rounded-md border border-border bg-white px-3 pr-12 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-subtle">{form.senderId.length}/11</span>
          </div>
          <p className="mt-1.5 text-xs text-ink-subtle">This Sender ID will be shown to recipients.</p>
        </div>
      </div>
    </div>
  );
}
