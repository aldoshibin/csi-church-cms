"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FileEdit, MoreVertical, ArrowLeft, Home, ChevronRight, Pencil, UserCheck2, XCircle, Download, History } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useNominationDetail } from "@/hooks/useNominationDetail";
import { NomineeInfoCard } from "@/components/election-management/NomineeInfoCard";
import { NominationInfoCard } from "@/components/election-management/NominationInfoCard";
import { CandidatePhotoCard } from "@/components/election-management/CandidatePhotoCard";
import { NominationPositionDetailsCard } from "@/components/election-management/NominationPositionDetailsCard";
import { CandidateTimelineCard } from "@/components/election-management/CandidateTimelineCard";
import { VoterDocumentsCard } from "@/components/election-management/VoterDocumentsCard";
import { VoterAdditionalInfoCard } from "@/components/election-management/VoterAdditionalInfoCard";
import { QuickActionsCard } from "@/components/election-management/QuickActionsCard";
import { CandidatesOverviewCard } from "@/components/election-management/CandidatesOverviewCard";
import { NoteCard } from "@/components/election-management/NoteCard";
import {
  NOMINATION_STATUS_BADGE_MAP, NOMINATION_VIEW_QUICK_ACTIONS, NOMINATIONS_OVERVIEW_MOCK, NOMINATION_VIEW_NOTE_TEXT,
} from "@/lib/mock/vmNominationsMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function NominationDetailView({ id }) {
  const { nomination, isLoading } = useNominationDetail(id);

  if (isLoading || !nomination) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/election-management/dashboard" className="hover:text-interactive-600">Election Management</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/election-management/nomination" className="hover:text-interactive-600">Nomination</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Nomination Details</span>
      </nav>

      <div>
        <Link href="/election-management/nomination" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Nominations
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <FileEdit className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">Nomination Details</h1>
              <Badge variant={NOMINATION_STATUS_BADGE_MAP[nomination.status] ?? "info"}>{nomination.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">View complete details of the nomination.</p>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Button type="button" variant="secondary" leftIcon={<MoreVertical className="h-4 w-4" />}>More Actions</Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
              <DropdownMenu.Item className={menuItemClass}><Pencil className="h-4 w-4" /> Edit Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><UserCheck2 className="h-4 w-4" /> Approve Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                <XCircle className="h-4 w-4" /> Reject Nomination
              </DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><Download className="h-4 w-4" /> Export Nomination</DropdownMenu.Item>
              <DropdownMenu.Item className={menuItemClass}><History className="h-4 w-4" /> View Nomination History</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <NomineeInfoCard nomination={nomination} />
            <NominationInfoCard nomination={nomination} />
            <CandidatePhotoCard photo={nomination.photo} name={nomination.nomineeName} title="Nominee Photo" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <NominationPositionDetailsCard position={nomination.position} details={nomination.positionDetails} />
            <CandidateTimelineCard timeline={nomination.nominationStatus} title="Nomination Status" />
            <VoterDocumentsCard documents={nomination.documents} />
          </div>
          <VoterAdditionalInfoCard
            notes={nomination.notes} remarks={nomination.remarksAdmin}
            showAddRemark={false} emptyNotesText="No additional notes."
          />
        </div>

        <div className="flex flex-col gap-6">
          <QuickActionsCard actions={NOMINATION_VIEW_QUICK_ACTIONS} />
          <CandidatesOverviewCard data={NOMINATIONS_OVERVIEW_MOCK} title="Nomination Overview" totalLabel="Total Nominations" />
          <NoteCard>{NOMINATION_VIEW_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
