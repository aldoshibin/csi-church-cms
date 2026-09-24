"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value ?? "–"}</p>
    </div>
  );
}

export function PositionInfoCard({ position }) {
  if (!position) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position Information</h3>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <Row label="Position Name" value={position.name} />
        <Row label="Description" value={position.description} />
        <Row label="Max Members" value={position.maxMembers} />
        <Row label="Eligibility" value={position.eligibility} />
        <div>
          <p className="text-xs font-medium text-ink-subtle">Status</p>
          <Badge variant={position.status === "Active" ? "success" : "danger"} className="mt-1">{position.status}</Badge>
        </div>
        <Row label="Created By" value={position.createdByName} />
        <Row label="Created On" value={formatDate(position.createdOn, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Last Updated" value={formatDate(position.lastUpdated, { hour: "numeric", minute: "2-digit" })} />
      </div>
    </div>
  );
}
