"use client";

import { Info } from "lucide-react";
import { Select, Textarea } from "@/components/ui/Input";
import { CATEGORY_OPTIONS, CONFIDENTIAL_OPTIONS } from "@/lib/mock/vmCemeteryDocumentsMockData";

export function DocumentAdditionalInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Additional Information (Optional)</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Select label="Category" value={form.category} onChange={(e) => setField("category", e.target.value)}>
          <option value="">Select category</option>
          {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Select label="Confidential" value={form.confidential} onChange={(e) => setField("confidential", e.target.value)}>
          <option value="">Select</option>
          {CONFIDENTIAL_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Textarea
          label="Remarks" rows={1} placeholder="Enter any remarks"
          value={form.remarks} onChange={(e) => setField("remarks", e.target.value)}
        />
      </div>
    </div>
  );
}
