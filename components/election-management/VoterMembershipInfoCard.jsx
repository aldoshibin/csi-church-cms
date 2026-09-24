"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { VOTER_STATUS_BADGE_MAP } from "@/lib/mock/vmVotersMockData";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function VoterMembershipInfoCard({ voter }) {
  if (!voter) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Membership Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Membership No." value={voter.membershipNumber} />
        <Row label="Membership Type" value={voter.membershipType} />
        <div>
          <p className="text-xs font-medium text-ink-subtle">Status</p>
          <Badge variant={VOTER_STATUS_BADGE_MAP[voter.status] ?? "info"} className="mt-1">{voter.status}</Badge>
        </div>
        <Row label="Joined On" value={formatDate(voter.joinedOn)} />
        <Row label="Last Updated" value={formatDate(voter.lastUpdated, { hour: "numeric", minute: "2-digit" })} />
        <Row label="Updated By" value={voter.updatedByName} />
      </div>
    </div>
  );
}
