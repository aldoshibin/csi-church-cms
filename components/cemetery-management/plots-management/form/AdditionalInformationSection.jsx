"use client";

import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { formatDate } from "@/lib/utils";

export function AdditionalInformationSection() {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-base font-semibold text-ink">Additional Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input label="Created By" value="Parish Office" disabled />
        <Input label="Created On" value={formatDate(new Date().toISOString())} disabled />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Attach Document (Optional)</label>
          <button
            type="button"
            className="flex h-[74px] w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-border text-center hover:bg-surface-canvas"
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
