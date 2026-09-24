"use client";

import { CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-right text-sm font-medium text-ink">{value ? formatDate(value) : "–"}</span>
    </div>
  );
}

// Create New Election form's sidebar card summarizing the key dates
// entered in the form, live, as the person fills them in.
export function ElectionKeyDatesCard({ form }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <CalendarClock className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Key Dates</h3>
      </div>
      <div className="mt-2 divide-y divide-border">
        <Row label="Nomination Starts" value={form.nominationStartDate} />
        <Row label="Nomination Ends" value={form.nominationEndDate} />
        <Row label="Candidate List" value={form.candidateListPublishDate} />
        <Row label="Election Day" value={form.electionDate} />
        <Row label="Results Declaration" value={form.resultsDeclarationDate} />
      </div>
    </div>
  );
}
