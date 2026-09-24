"use client";

import Link from "next/link";
import { Users2, UsersRound, Users, Vote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { ELECTION_TYPE_BADGE_MAP } from "@/lib/mock/vmElectionManagementMockData";

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

export function ElectionSummaryCard({ election }) {
  if (!election) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Election Summary</h3>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-ink-subtle">Election Type</p>
            <Badge variant={ELECTION_TYPE_BADGE_MAP[election.type] ?? "info"} className="mt-1">{election.type}</Badge>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Election Date</p>
            <p className="mt-1 text-sm font-medium text-ink">{formatDate(election.electionDate)}</p>
            <p className="text-xs text-ink-subtle">{election.timeRange}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Description</p>
            <p className="mt-1 text-sm font-medium text-ink">{election.summaryDescription}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-ink-subtle">Organized By</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-medium text-ink">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-50 text-[10px] font-semibold text-success-600">
                {initials(election.organizedByName)}
              </span>
              {election.organizedByName} ({election.organizedByRole})
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Nomination Period</p>
            <p className="mt-1 text-sm font-medium text-ink">
              {formatDate(election.nominationStart)} - {formatDate(election.nominationEnd)}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-subtle">Voting Method</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-ink">
              <Vote className="h-3.5 w-3.5 text-ink-subtle" /> {election.votingMethod}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <Users2 className="mt-0.5 h-4 w-4 text-success-600" />
            <div>
              <p className="text-xs font-medium text-ink-subtle">Total Positions</p>
              <p className="text-lg font-bold text-ink">{election.totalPositions}</p>
              <Link href="#positions" className="text-xs font-medium text-interactive-600 hover:underline">View positions</Link>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <UsersRound className="mt-0.5 h-4 w-4 text-[#7C3AED]" />
            <div>
              <p className="text-xs font-medium text-ink-subtle">Total Candidates</p>
              <p className="text-lg font-bold text-ink">{election.totalCandidates}</p>
              <Link href="#candidates" className="text-xs font-medium text-interactive-600 hover:underline">View candidates</Link>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="mt-0.5 h-4 w-4 text-[#EA580C]" />
            <div>
              <p className="text-xs font-medium text-ink-subtle">Total Voters</p>
              <p className="text-lg font-bold text-ink">{election.totalVoters}</p>
              <Link href="#voters" className="text-xs font-medium text-interactive-600 hover:underline">View voters</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
