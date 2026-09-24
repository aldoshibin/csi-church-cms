"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { UsersRound, MoreVertical, ArrowLeft, Home, ChevronRight, Pencil, RefreshCcw, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useVoterDetail } from "@/hooks/useVoterDetail";
import { VoterPersonalInfoCard } from "@/components/election-management/VoterPersonalInfoCard";
import { VoterMembershipInfoCard } from "@/components/election-management/VoterMembershipInfoCard";
import { CandidatePhotoCard } from "@/components/election-management/CandidatePhotoCard";
import { VoterElectionParticipationCard } from "@/components/election-management/VoterElectionParticipationCard";
import { VoterVotingSummaryCard } from "@/components/election-management/VoterVotingSummaryCard";
import { VoterDocumentsCard } from "@/components/election-management/VoterDocumentsCard";
import { VoterTimelineCard } from "@/components/election-management/VoterTimelineCard";
import { VoterAdditionalInfoCard } from "@/components/election-management/VoterAdditionalInfoCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import { VOTER_STATUS_BADGE_MAP, VOTER_VIEW_QUICK_ACTIONS, VOTERS_OVERVIEW_MOCK } from "@/lib/mock/vmVotersMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function VoterDetailView({ id }) {
  const { voter, isLoading } = useVoterDetail(id);

  if (isLoading || !voter) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/voters" className="hover:text-interactive-600">Voters</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Voter Details</span>
      </nav>

      <div>
        <Link href="/election-management/voters" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Voters
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <UsersRound className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">Voter Details</h1>
              <Badge variant={VOTER_STATUS_BADGE_MAP[voter.status] ?? "info"}>{voter.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">View complete details of the voter.</p>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />}>More Actions</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Voter</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><RefreshCcw className="h-4 w-4" /> Change Status</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Export Voter</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <Trash2 className="h-4 w-4" /> Delete Voter
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <VoterPersonalInfoCard voter={voter} />
            <VoterMembershipInfoCard voter={voter} />
            <CandidatePhotoCard photo={voter.photo} name={voter.name} title="Voter Photo" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <VoterElectionParticipationCard participation={voter.electionParticipation} />
            <VoterVotingSummaryCard summary={voter.votingSummary} />
            <VoterDocumentsCard documents={voter.documents} />
          </div>
          <VoterAdditionalInfoCard notes={voter.notes} remarks={voter.remarks} />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={VOTER_VIEW_QUICK_ACTIONS} />
          <VoterTimelineCard timeline={voter.timeline} />
          <CandidatesOverviewCard data={VOTERS_OVERVIEW_MOCK} title="Voter Overview" totalLabel="Total Voters" />
          <NoteCard>Only <strong className="font-semibold text-ink">Active</strong> voters are eligible to vote in the election. Ensure voter information is up to date.</NoteCard>
        </div>
      </div>
    </div>
  );
}
