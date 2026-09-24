"use client";

import { Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-right text-sm font-medium text-ink">{value || "–"}</span>
    </div>
  );
}

const STATUS_VARIANT = { Upcoming: "info", Ongoing: "warning", Completed: "success" };

export function ElectionInfoCard({ election }) {
  if (!election) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Election Information</h3>
      </div>
      <div className="mt-2 divide-y divide-border">
        <div className="flex items-center justify-between py-2.5">
          <span className="text-sm text-ink-subtle">Status</span>
          <Badge variant={STATUS_VARIANT[election.status] ?? "info"}>{election.status}</Badge>
        </div>
        <Row label="Created By" value={election.createdByName} />
        <Row label="Created On" value={formatDate(election.createdOn, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Last Updated" value={formatDate(election.lastUpdated, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Election ID" value={election.electionCode} />
      </div>
    </div>
  );
}
