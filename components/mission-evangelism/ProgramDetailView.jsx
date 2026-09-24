"use client";

import * as React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Users2, ArrowLeft, Home, ChevronRight, Download, Pencil, MoreVertical,
  Image as ImageIcon, FileBarChart2, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useOutreachProgramDetail } from "@/hooks/useOutreachProgramDetail";
import { ProgramSummaryCard } from "@/components/mission-evangelism/ProgramSummaryCard";
import { ActivityDescriptionCard } from "@/components/mission-evangelism/ActivityDescriptionCard";
import { TeamVolunteersTable } from "@/components/mission-evangelism/TeamVolunteersTable";
import { ActivityTimelineCard } from "@/components/mission-evangelism/ActivityTimelineCard";
import { QuickStatsCard } from "@/components/mission-evangelism/QuickStatsCard";
import { ProgramAttachmentsCard } from "@/components/mission-evangelism/ProgramAttachmentsCard";
import { TabComingSoonCard } from "@/components/mission-evangelism/TabComingSoonCard";
import { NoteCard } from "@/components/mission-evangelism/NoteCard";
import { PROGRAM_STATUS_BADGE_MAP, PROGRAM_DETAIL_TABS, PROGRAM_DETAIL_NOTE_TEXT } from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ProgramDetailView({ id }) {
  const { program, isLoading } = useOutreachProgramDetail(id);
  const [tab, setTab] = React.useState("Overview");

  if (isLoading || !program) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/outreach-programs" className="hover:text-interactive-600">Outreach Programs</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Program Details</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/outreach-programs" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Programs
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <Users2 className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{program.name}</h1>
              <Badge variant={PROGRAM_STATUS_BADGE_MAP[program.status] ?? "info"}>{program.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{program.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Report</Button>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Program</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" size="icon" aria-label="More actions"><MoreVertical className="h-4 w-4" /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Duplicate Program</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export Details</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>Cancel Program</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {PROGRAM_DETAIL_TABS.map((t) => (
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
              <ProgramSummaryCard program={program} />
              <ActivityDescriptionCard description={program.description} objectives={program.objectives} />
              <TeamVolunteersTable team={program.team} />
            </div>
          )}

          {tab === "Participants" && (
            <TabComingSoonCard icon={Users2} title="Participants" description="The list of participants who attended this program will appear here." />
          )}
          {tab === "Volunteers" && (
            <TabComingSoonCard icon={Users2} title="Volunteers" description="The full list of volunteers involved in this program will appear here." />
          )}
          {tab === "Photos" && (
            <TabComingSoonCard icon={ImageIcon} title="Photos" description="Photos captured during this program will appear here." />
          )}
          {tab === "Reports" && (
            <TabComingSoonCard icon={FileBarChart2} title="Reports" description="Generated reports for this program will appear here." />
          )}
          {tab === "Documents" && (
            <TabComingSoonCard icon={FileText} title="Documents" description="Files and documents attached to this program will appear here." />
          )}
          {tab === "Timeline" && (
            <ActivityTimelineCard timeline={program.timeline} title="Activity Timeline" />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <ActivityTimelineCard timeline={program.timeline} />
          <QuickStatsCard stats={program.quickStats} />
          <ProgramAttachmentsCard attachments={program.attachments} />
          <NoteCard>{PROGRAM_DETAIL_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
