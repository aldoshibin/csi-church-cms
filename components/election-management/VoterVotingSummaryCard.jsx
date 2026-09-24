"use client";

import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <p className="flex items-center justify-between py-2 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </p>
  );
}

export function VoterVotingSummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Voting Summary</h3>
      <div className="mt-2 divide-y divide-border">
        <Row label="Total Votes Cast" value={summary.totalVotesCast} />
        <Row label="Pending Votes" value={summary.pendingVotes} />
        <Row label="Last Vote Cast" value={summary.lastVoteCast ? formatDate(summary.lastVoteCast, { hour: "numeric", minute: "2-digit" }) : "–"} />
        <Row
          label="Next Eligible Election"
          value={summary.nextEligibleElection ? `${summary.nextEligibleElection} (${formatDate(summary.nextEligibleOn)})` : "–"}
        />
      </div>
      <Button type="button" variant="secondary" leftIcon={<BarChart3 className="h-4 w-4" />} className="mt-3 w-full">
        View Voting History
      </Button>
    </div>
  );
}
