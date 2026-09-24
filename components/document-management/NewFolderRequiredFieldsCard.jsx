"use client";

import { CheckCircle2 } from "lucide-react";

export function NewFolderRequiredFieldsCard() {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Required Fields</h3>
      <div className="mt-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-danger-600" />
        <p className="text-sm text-ink-muted">Folder Name is required</p>
      </div>
    </div>
  );
}
