"use client";

import { UploadCloud } from "lucide-react";


export function AdditionalInfoTab() {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">What to Bring / Notes for Attendees</label>
        <textarea
          rows={3}
          placeholder="e.g., Bring your own Bible, dress code, parking information..."
          className="w-full resize-none rounded-md border border-border px-3 py-2 text-sm text-ink placeholder:text-ink-subtle"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-ink">Attachments <span className="font-normal text-ink-subtle">(Optional)</span></p>
        <div className="rounded-md border border-dashed border-border p-6 text-center">
          <UploadCloud className="mx-auto h-7 w-7 text-interactive-400" />
          <p className="mt-2 text-sm font-medium text-ink">Click to upload</p>
          <p className="text-sm text-ink-subtle">or drag and drop</p>
          <p className="mt-1 text-xs text-ink-subtle">PDF, DOC, DOCX (Max. 10MB each)</p>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Internal Notes <span className="font-normal text-ink-subtle">(Not visible to attendees)</span></label>
        <textarea
          rows={2}
          placeholder="Notes for staff/volunteers only..."
          className="w-full resize-none rounded-md border border-border px-3 py-2 text-sm text-ink placeholder:text-ink-subtle"
        />
      </div>
    </div>
  );
}
