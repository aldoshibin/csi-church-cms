"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { CANDIDATE_STATUS_BADGE_MAP } from "@/lib/mock/vmCandidatesMockData";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function CandidateElectionInfoCard({ candidate }) {
  if (!candidate) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Election Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Election" value={candidate.election} />
        <Row label="Position" value={candidate.position} />
        <div>
          <p className="text-xs font-medium text-ink-subtle">Status</p>
          <Badge variant={CANDIDATE_STATUS_BADGE_MAP[candidate.status] ?? "info"} className="mt-1">{candidate.status}</Badge>
        </div>
        <Row label="Nominated By" value={candidate.nominatedBy} />
        <Row label="Nomination Date" value={formatDate(candidate.nominationDate, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Approved On" value={candidate.approvedOn ? formatDate(candidate.approvedOn, { hour: "numeric", minute: "2-digit" }) : "–"} />
        <Row label="Approved By" value={candidate.approvedByName} />
        <Row label="Remarks" value={candidate.remarks} />
      </div>
    </div>
  );
}
