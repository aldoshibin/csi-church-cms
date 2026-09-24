"use client";

import Link from "next/link";
import { Vote, ArrowLeft, Home, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useVoterVotingDetail } from "@/hooks/useVoterVotingDetail";
import { VoterVotingInfoCard } from "@/components/election-management/VoterVotingInfoCard";
import { VotingElectionInfoCard } from "@/components/election-management/VotingElectionInfoCard";
import { CandidatePhotoCard } from "@/components/election-management/CandidatePhotoCard";
import { VotingTransactionSummaryCard } from "@/components/election-management/VotingTransactionSummaryCard";
import { VotesCastTable } from "@/components/election-management/VotesCastTable";
import { VotingReceiptCard } from "@/components/election-management/VotingReceiptCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  VOTING_STATUS_BADGE_MAP, VOTING_VIEW_QUICK_ACTIONS, VOTING_OVERVIEW_MOCK, VOTING_DETAIL_NOTE_TEXT,
} from "@/lib/mock/vmVotingMockData";

export function VoterVotingDetailView({ id }) {
  const { voter, isLoading } = useVoterVotingDetail(id);

  if (isLoading || !voter) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/voting" className="hover:text-interactive-600">Voting</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Voter Voting Details</span>
      </nav>

      <div>
        <Link href="/election-management/voting" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Voting
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Vote className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">Voter Voting Details</h1>
              <Badge variant={VOTING_STATUS_BADGE_MAP[voter.votingStatus] ?? "info"}>{voter.votingStatus}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">View this voter's voting activity for the election.</p>
          </div>
        </div>
        <Button type="button" variant="secondary" leftIcon={<Mail className="h-4 w-4" />}>Send Reminder</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <VoterVotingInfoCard voter={voter} />
            <VotingElectionInfoCard election={voter.election} />
            <CandidatePhotoCard photo={voter.photo} name={voter.name} title="Voter Photo" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <VotingTransactionSummaryCard summary={voter.votingSummary} />
            <VotingReceiptCard receipt={voter.receipt} />
          </div>
          <VotesCastTable votes={voter.votesCast} />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={VOTING_VIEW_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={VOTING_OVERVIEW_MOCK} title="Voting Overview" totalLabel="Total Voters" />
          <NoteCard>{VOTING_DETAIL_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
