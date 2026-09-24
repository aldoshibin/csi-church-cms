"use client";

import { Info, Upload } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";

export function AdditionalInformationPanel({ form, setField }) {
  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) setField("photoName", file.name);
  };

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <Info className="h-4 w-4 text-interactive-600" /> Additional Information
      </h3>
      <div className="flex flex-col gap-4">
        <Textarea
          label="Notes (Optional)" rows={2} placeholder="Add any additional notes about the volunteer"
          value={form.notes} onChange={(e) => setField("notes", e.target.value)}
        />
        <Input
          label="Reference / Referred By (Optional)" placeholder="Enter name or source"
          value={form.referredBy} onChange={(e) => setField("referredBy", e.target.value)}
        />
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Upload Photo (Optional)</label>
          <label className="flex h-[100px] w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-ink-subtle hover:border-interactive-300 hover:bg-interactive-50">
            <Upload className="h-5 w-5" />
            <span className="text-xs font-medium text-ink">{form.photoName || "Click to upload or drag and drop"}</span>
            <span className="text-[11px] text-ink-subtle">PNG, JPG up to 2MB</span>
            <input type="file" className="hidden" accept=".jpg,.jpeg,.png" onChange={handlePhoto} />
          </label>
        </div>
      </div>
    </div>
  );
}
