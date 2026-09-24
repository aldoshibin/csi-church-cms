"use client";

import * as React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HandCoins, ArrowLeft, Home, ChevronRight, Download, Pencil, MoreVertical, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/utils";
import { useMissionDonationDetail } from "@/hooks/useMissionDonationDetail";
import { DonationInformationCard } from "@/components/mission-evangelism/DonationInformationCard";
import { AllocationDetailsTable } from "@/components/mission-evangelism/AllocationDetailsTable";
import { ActivityTimelineCard } from "@/components/mission-evangelism/ActivityTimelineCard";
import { DonorInformationCard } from "@/components/mission-evangelism/DonorInformationCard";
import { PaymentInformationCard } from "@/components/mission-evangelism/PaymentInformationCard";
import { DonationNotesCard } from "@/components/mission-evangelism/DonationNotesCard";
import { ProgramAttachmentsCard } from "@/components/mission-evangelism/ProgramAttachmentsCard";
import { DonationActionsCard } from "@/components/mission-evangelism/DonationActionsCard";
import { DONATION_PAYMENT_STATUS_BADGE_MAP } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function DonationDetailView({ id }) {
  const { donation, isLoading } = useMissionDonationDetail(id);

  if (isLoading || !donation) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/donations" className="hover:text-interactive-600">Donations</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Donation Details</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/donations" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Donations
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <HandCoins className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">Donation Details</h1>
              <Badge variant={DONATION_PAYMENT_STATUS_BADGE_MAP[donation.status] ?? "success"}>{donation.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{donation.id} • {formatDateTime(donation.createdAt)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Receipt</Button>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Donation</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" size="icon" aria-label="More actions"><MoreVertical className="h-4 w-4" /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Duplicate Donation</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export Details</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>Delete Donation</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-6">
          <DonationInformationCard donation={donation} />

          {donation.donorMessage && (
            <div className="rounded-lg border border-border bg-white p-6 shadow-card">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <MessageSquareQuote className="h-4 w-4 text-interactive-600" /> Message from Donor
              </h3>
              <p className="mt-3 text-sm italic text-ink-muted">{donation.donorMessage}</p>
            </div>
          )}

          <AllocationDetailsTable allocation={donation.allocation} />
          <ActivityTimelineCard timeline={donation.timeline} />
        </div>

        <div className="flex flex-col gap-6">
          <DonorInformationCard donor={donation.donor} />
          <PaymentInformationCard payment={donation.payment} />
          <DonationNotesCard note={donation.note} byline={donation.notesByline} />
          <ProgramAttachmentsCard
            attachments={donation.attachments}
            emptyText="No files attached to this donation yet."
            viewAllLabel="View All Attachments"
            viewAllHref="#"
          />
          <DonationActionsCard />
        </div>
      </div>
    </div>
  );
}
