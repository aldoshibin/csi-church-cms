"use client";

import { History } from "lucide-react";
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

export function VoterElectionParticipationCard({ participation }) {
  if (!participation) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Election Participation</h3>
      <div className="mt-2 divide-y divide-border">
        <Row label="Eligible Elections" value={participation.eligibleElections} />
        <Row label="Participated Elections" value={participation.participatedElections} />
        <Row label="Upcoming Elections" value={participation.upcomingElections} />
        <Row
          label="Last Participated"
          value={participation.lastParticipated
            ? `${participation.lastParticipated} (${formatDate(participation.lastParticipatedOn)})`
            : "–"}
        />
      </div>
      <Button type="button" variant="secondary" leftIcon={<History className="h-4 w-4" />} className="mt-3 w-full">
        View Election History
      </Button>
    </div>
  );
}
