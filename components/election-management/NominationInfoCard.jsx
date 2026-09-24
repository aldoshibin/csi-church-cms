"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { NOMINATION_STATUS_BADGE_MAP } from "@/lib/mock/vmNominationsMockData";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function NominationInfoCard({ nomination }) {
  if (!nomination) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Nomination Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Position" value={nomination.position} />
        <Row label="Election" value={nomination.election} />
        <Row label="Nominated By" value={`${nomination.nominatedByName} (${nomination.nominatedByMembershipNo})`} />
        <Row label="Nominated On" value={formatDate(nomination.nominatedOn, { hour: "numeric", minute: "2-digit" })} />
        <div>
          <p className="text-xs font-medium text-ink-subtle">Status</p>
          <Badge variant={NOMINATION_STATUS_BADGE_MAP[nomination.status] ?? "info"} className="mt-1">{nomination.status}</Badge>
        </div>
        <Row label="Approved By" value={nomination.approvedByName} />
        <Row label="Approved On" value={nomination.approvedOn ? formatDate(nomination.approvedOn, { hour: "numeric", minute: "2-digit" }) : "–"} />
        <Row label="Remarks" value={nomination.remarks} />
      </div>
    </div>
  );
}
