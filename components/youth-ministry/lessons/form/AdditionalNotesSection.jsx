"use client";

import { FileText } from "lucide-react";
import { Textarea } from "@/components/ui/Input";

export function AdditionalNotesSection({ value, onChange }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <FileText className="h-4 w-4 text-interactive-600" /> Additional Notes <span className="font-normal text-ink-subtle">(Optional)</span>
      </h3>
      <Textarea rows={3} placeholder="Add any additional notes or instructions for this lesson" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
