"use client";

import { Info } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-right text-sm font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

// A new component for the Edit Election form's sidebar: unlike the
// module's existing read-only ElectionInfoCard.jsx (status shown as a
// static Badge), this mockup needs an editable Status dropdown, so it's
// built as its own sibling component. See README_CHANGES.txt.
export function ElectionStatusCard({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Election Information</h3>
      </div>
      <div className="mt-3">
        <label className="mb-1.5 block text-sm font-medium text-ink">Status</label>
        <select
          value={form.status}
          onChange={(e) => setField("status", e.target.value)}
          className="h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-interactive-500/20 focus:border-interactive-500"
        >
          {["Upcoming", "Ongoing", "Completed", "Cancelled"].map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="mt-2 divide-y divide-border">
        <Row label="Election ID" value={form.electionCode} />
        <Row label="Created By" value={form.createdByName} />
        <Row label="Created On" value={formatDate(form.createdOn, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Last Updated" value={formatDate(form.lastUpdated, { hour: "numeric", minute: "2-digit" })} />
      </div>
    </div>
  );
}
