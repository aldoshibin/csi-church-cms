"use client";

import { ClipboardList } from "lucide-react";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function AdditionalInformationCard({ additional }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <ClipboardList className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Additional Information</h3>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-3">
          <p className="text-xs text-ink-subtle">Special Requests / Notes</p>
          <p className="mt-0.5 whitespace-pre-line text-sm font-medium text-ink">{additional.specialRequests}</p>
        </div>
        <Field label="Stage Decoration" value={additional.stageDecoration} />
        <Field label="Access Time for Setup" value={additional.accessTimeForSetup} />
        <Field label="Organizer Name" value={additional.organizerName} />
      </div>
    </div>
  );
}
