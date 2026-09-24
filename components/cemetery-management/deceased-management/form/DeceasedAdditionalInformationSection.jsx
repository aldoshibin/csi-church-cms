"use client";

import { UploadCloud } from "lucide-react";
import { Textarea } from "@/components/ui/Input";

export function DeceasedAdditionalInformationSection({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Additional Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Textarea label="Remarks" rows={4} value={form.remarks} onChange={(e) => setField("remarks", e.target.value)} placeholder="Enter any remarks" />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Upload Document (Optional)</label>
          <button
            type="button"
            className="flex h-[104px] w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border text-center hover:bg-surface-canvas"
          >
            <UploadCloud className="h-5 w-5 text-ink-subtle" />
            <span className="text-xs font-medium text-ink-muted">Click to upload or drag and drop</span>
            <span className="text-[11px] text-ink-subtle">PDF, JPG, PNG (Max. 5MB)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
