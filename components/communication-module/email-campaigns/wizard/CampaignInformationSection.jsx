"use client";

import { Info, ChevronDown, Users2 } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { CAMPAIGN_TYPE_OPTIONS } from "@/lib/mock/vmEmailCampaignsMockData";

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
          {CAMPAIGN_TYPE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
        </Select>
      </div>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-sm font-medium text-ink">
            Subject Line <span className="text-danger-500">*</span>
          </label>
          <span className="text-xs text-ink-subtle">{form.subjectLine.length}/150</span>
        </div>
        <div className="flex gap-2">
          <input
            value={form.subjectLine} maxLength={150} onChange={(e) => setField("subjectLine", e.target.value)}
            placeholder="Enter email subject"
            className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
          <button type="button" className="flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-md border border-border px-3 text-sm text-ink-muted hover:bg-surface-canvas">
            <Users2 className="h-4 w-4" /> Add Personalization <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-1.5 flex items-center gap-1.5">
          <label className="text-sm font-medium text-ink">Preheader Text</label>
          <Info className="h-3.5 w-3.5 text-ink-subtle" />
        </div>
        <div className="relative">
          <input
            value={form.preheaderText} maxLength={150} onChange={(e) => setField("preheaderText", e.target.value)}
            placeholder="This is the preview text that appears next to the subject line (optional)"
            className="h-10 w-full rounded-md border border-border bg-white px-3 pr-12 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-subtle">{form.preheaderText.length}/150</span>
        </div>
      </div>
    </div>
  );
}
