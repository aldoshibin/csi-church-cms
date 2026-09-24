"use client";

import { Eye } from "lucide-react";
import { Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CAMPAIGN_TEMPLATE_OPTIONS } from "@/lib/mock/vmEmailCampaignsMockData";

export function CampaignTemplateCard({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Template</h3>
      <Select label="Select Email Template" value={form.template} onChange={(e) => setField("template", e.target.value)}>
        {CAMPAIGN_TEMPLATE_OPTIONS.map((t) => <option key={t}>{t}</option>)}
      </Select>
      <Button type="button" variant="secondary" className="mt-3 w-full" leftIcon={<Eye className="h-4 w-4" />}>
        Preview Template
      </Button>
    </div>
  );
}
