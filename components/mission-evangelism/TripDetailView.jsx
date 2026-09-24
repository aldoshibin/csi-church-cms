"use client";

import * as React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Globe2, ArrowLeft, Home, ChevronRight, Download, Pencil, MoreVertical,
  MapPin, Calendar, Users2, Image as ImageIcon, FileBarChart2, FileText, Receipt, Route,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { useMissionTripDetail } from "@/hooks/useMissionTripDetail";
import { TripInfoCard } from "@/components/mission-evangelism/TripInfoCard";
import { ActivityDescriptionCard } from "@/components/mission-evangelism/ActivityDescriptionCard";
import { TripHighlightsCard } from "@/components/mission-evangelism/TripHighlightsCard";
import { ActivityTimelineCard } from "@/components/mission-evangelism/ActivityTimelineCard";
import { TripTeamCard } from "@/components/mission-evangelism/TripTeamCard";
import { ProgramAttachmentsCard } from "@/components/mission-evangelism/ProgramAttachmentsCard";
import { TabComingSoonCard } from "@/components/mission-evangelism/TabComingSoonCard";
import { TRIP_STATUS_BADGE_MAP, TRIP_DETAIL_TABS } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function TripDetailView({ id }) {
  const { trip, isLoading } = useMissionTripDetail(id);
  const [tab, setTab] = React.useState("Overview");

  if (isLoading || !trip) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/mission-trips" className="hover:text-interactive-600">Mission Trips</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Trip Details</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/mission-trips" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Mission Trips
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Globe2 className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{trip.name}</h1>
              <Badge variant={TRIP_STATUS_BADGE_MAP[trip.status] ?? "info"}>{trip.status}</Badge>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-subtle">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {trip.destination}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {formatDate(trip.startDate)} – {formatDate(trip.endDate)}</span>
              <span className="flex items-center gap-1"><Users2 className="h-3.5 w-3.5" /> {trip.totalParticipants} Participants</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Report</Button>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Trip</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" size="icon" aria-label="More actions"><MoreVertical className="h-4 w-4" /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Duplicate Trip</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export Details</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>Cancel Trip</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {TRIP_DETAIL_TABS.map((t) => (
                <button
                  key={t} type="button" onClick={() => setTab(t)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    tab === t ? "bg-interactive-50 text-interactive-600" : "text-ink-subtle hover:bg-surface-canvas"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {tab === "Overview" && (
            <div className="flex flex-col gap-6">
              <TripInfoCard trip={trip} />
              <ActivityDescriptionCard description={trip.description} objectives={trip.objectives} />
              <TripHighlightsCard highlights={trip.highlights} />
            </div>
          )}

          {tab === "Participants" && (
            <TabComingSoonCard icon={Users2} title="Participants" description="The list of participants who joined this trip will appear here." />
          )}
          {tab === "Itinerary" && (
            <TabComingSoonCard icon={Route} title="Itinerary" description="The day-by-day itinerary for this trip will appear here." />
          )}
          {tab === "Expenses" && (
            <TabComingSoonCard icon={Receipt} title="Expenses" description="Expenses recorded for this trip will appear here." />
          )}
          {tab === "Reports" && (
            <TabComingSoonCard icon={FileBarChart2} title="Reports" description="Generated reports for this trip will appear here." />
          )}
          {tab === "Photos" && (
            <TabComingSoonCard icon={ImageIcon} title="Photos" description="Photos captured during this trip will appear here." />
          )}
          {tab === "Documents" && (
            <TabComingSoonCard icon={FileText} title="Documents" description="Files and documents attached to this trip will appear here." />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <ActivityTimelineCard timeline={trip.timeline} title="Trip Timeline" />
          <TripTeamCard team={trip.team} />
          <ProgramAttachmentsCard
            attachments={trip.attachments}
            emptyText="No files attached to this trip yet."
            viewAllLabel="View All Documents"
            viewAllHref="#"
          />
        </div>
      </div>
    </div>
  );
}
