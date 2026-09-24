"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function VotingElectionInfoCard({ election }) {
  if (!election) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Election Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Election Name" value={election.name} />
        <Row label="Election Type" value={election.type} />
        <Row label="Start Date" value={formatDate(election.startDate)} />
        <Row label="End Date" value={formatDate(election.endDate)} />
        <Row label="Voting Method" value={election.votingMethod} />
        <div>
          <p className="text-xs font-medium text-ink-subtle">Status</p>
          <div className="mt-1">
            <Badge variant={election.status === "Completed" ? "success" : "info"}>{election.status}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
