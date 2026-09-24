"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { UsersRound, Pencil, MoreVertical, ArrowLeft, Home, ChevronRight, RefreshCcw, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCandidateDetail } from "@/hooks/useCandidateDetail";
import { CandidatePersonalInfoCard } from "@/components/election-management/CandidatePersonalInfoCard";
import { CandidateElectionInfoCard } from "@/components/election-management/CandidateElectionInfoCard";
import { CandidatePhotoCard } from "@/components/election-management/CandidatePhotoCard";
import { CandidatePositionDetailsCard } from "@/components/election-management/CandidatePositionDetailsCard";
import { CandidateNominationSummaryCard } from "@/components/election-management/CandidateNominationSummaryCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { CandidateBioCard } from "@/components/election-management/CandidateBioCard";
import { CandidateDocumentsCard } from "@/components/election-management/CandidateDocumentsCard";
import { CandidateTimelineCard } from "@/components/election-management/CandidateTimelineCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CANDIDATE_STATUS_BADGE_MAP, CANDIDATE_VIEW_QUICK_ACTIONS, CANDIDATES_OVERVIEW_MOCK } from "@/lib/mock/vmCandidatesMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function CandidateDetailView({ id }) {
  const { candidate, isLoading } = useCandidateDetail(id);

  if (isLoading || !candidate) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/candidates" className="hover:text-interactive-600">Candidates</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Candidate Details</span>
      </nav>

      <div>
        <Link href="/election-management/candidates" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Candidates
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <UsersRound className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">Candidate Details</h1>
              <Badge variant={CANDIDATE_STATUS_BADGE_MAP[candidate.status] ?? "info"}>{candidate.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">View complete details of the candidate.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Candidate</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />}>More</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}><RefreshCcw className="h-4 w-4" /> Change Status</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Export Candidate</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                  <Trash2 className="h-4 w-4" /> Delete Candidate
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_1fr_300px]">
        <CandidatePersonalInfoCard candidate={candidate} />
        <CandidateElectionInfoCard candidate={candidate} />
        <CandidatePhotoCard photo={candidate.photo} name={candidate.name} />
        <QuickActionsCard actions={CANDIDATE_VIEW_QUICK_ACTIONS} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_1fr_300px]">
        <CandidatePositionDetailsCard position={candidate.position} details={candidate.positionDetails} />
        <CandidateNominationSummaryCard summary={candidate.nominationSummary} />
        <CandidatesOverviewCard data={CANDIDATES_OVERVIEW_MOCK} title="Nomination Summary" totalLabel="Total Nominations" />
        <CandidateTimelineCard timeline={candidate.timeline} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
        <CandidateBioCard bio={candidate.bio} />
        <CandidateDocumentsCard documents={candidate.documents} />
      </div>
    </div>
  );
}
