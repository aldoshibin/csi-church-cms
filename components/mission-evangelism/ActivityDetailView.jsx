"use client";

import * as React from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HeartHandshake, ArrowLeft, Home, ChevronRight, Download, Pencil, MoreVertical,
  Users2, Wallet, Image as ImageIcon, FileBarChart2, Paperclip,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useOutreachActivityDetail } from "@/hooks/useOutreachActivityDetail";
import { ActivitySummaryCard } from "@/components/mission-evangelism/ActivitySummaryCard";
import { ActivityDescriptionCard } from "@/components/mission-evangelism/ActivityDescriptionCard";
import { ActivityStatSummaryCard } from "@/components/mission-evangelism/ActivityStatSummaryCard";
import { ActivityTimelineCard } from "@/components/mission-evangelism/ActivityTimelineCard";
import { TabComingSoonCard } from "@/components/mission-evangelism/TabComingSoonCard";
import { QuickActionsCard } from "@/components/mission-evangelism/QuickActionsCard";
import { NoteCard } from "@/components/mission-evangelism/NoteCard";
import { formatCurrency } from "@/lib/utils";
import {
  OUTREACH_STATUS_BADGE_MAP, ACTIVITY_DETAIL_TABS, OUTREACH_DETAIL_QUICK_ACTIONS, OUTREACH_DETAIL_NOTE_TEXT,
} from "@/lib/mock/vmMissionEvangelismMockData";

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function ActivityDetailView({ id }) {
  const { activity, isLoading } = useOutreachActivityDetail(id);
  const [tab, setTab] = React.useState("Overview");

  if (isLoading || !activity) {
    return <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <nav className="flex items-center gap-1.5 text-sm text-ink-subtle">
        <Home className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/overview" className="hover:text-interactive-600">Mission &amp; Evangelism</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/mission-evangelism/outreach-programs" className="hover:text-interactive-600">Outreach Activities</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-ink">Activity Details</span>
      </nav>

      <div>
        <Link href="/mission-evangelism/outreach-programs" className="inline-flex items-center gap-1.5 text-sm font-medium text-interactive-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Activities
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
            <HeartHandshake className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold text-ink">{activity.name}</h1>
              <Badge variant={OUTREACH_STATUS_BADGE_MAP[activity.status] ?? "info"}>{activity.status}</Badge>
            </div>
            <p className="mt-1 text-sm text-ink-subtle">{activity.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" leftIcon={<Download className="h-4 w-4" />}>Download Report</Button>
          <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit</Button>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button type="button" variant="secondary" size="icon" aria-label="More actions"><MoreVertical className="h-4 w-4" /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-52 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                <DropdownMenu.Item className={menuItemClass}>Duplicate Activity</DropdownMenu.Item>
                <DropdownMenu.Item className={menuItemClass}>Export Details</DropdownMenu.Item>
                <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>Cancel Activity</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-white p-1.5 shadow-card">
            <div className="flex flex-wrap items-center gap-1">
              {ACTIVITY_DETAIL_TABS.map((t) => (
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
              <ActivitySummaryCard activity={activity} />
              <ActivityDescriptionCard description={activity.description} objectives={activity.objectives} />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <ActivityStatSummaryCard
                  icon={Users2} title="Team & Volunteers"
                  stats={[
                    { label: "Total Volunteers", value: activity.teamVolunteers.totalVolunteers },
                    { label: "Departments Involved", value: activity.teamVolunteers.departmentsInvolved },
                    { label: "People Reached", value: activity.teamVolunteers.peopleReached },
                  ]}
                  linkLabel="View All Volunteers" href="#"
                />
                <ActivityStatSummaryCard
                  icon={Wallet} title="Donations & Support"
                  stats={[
                    { label: "Total Donations", value: formatCurrency(activity.donationsSupport.totalDonations) },
                    { label: "Donors", value: activity.donationsSupport.donors },
                    { label: "Sponsors", value: activity.donationsSupport.sponsors },
                  ]}
                  linkLabel="View Donations" href="#"
                />
              </div>
            </div>
          )}

          {tab === "Participants" && (
            <TabComingSoonCard icon={Users2} title="Participants" description="The list of participants who attended this activity will appear here." />
          )}
          {tab === "Donations" && (
            <TabComingSoonCard icon={Wallet} title="Donations" description="Donations and sponsorships received for this activity will appear here." />
          )}
          {tab === "Photos" && (
            <TabComingSoonCard icon={ImageIcon} title="Photos" description="Photos captured during this activity will appear here." />
          )}
          {tab === "Reports" && (
            <TabComingSoonCard icon={FileBarChart2} title="Reports" description="Generated reports for this activity will appear here." />
          )}
          {tab === "Timeline" && (
            <ActivityTimelineCard timeline={activity.timeline} title="Activity Timeline" />
          )}
          {tab === "Attachments" && (
            <TabComingSoonCard icon={Paperclip} title="Attachments" description="Files and documents attached to this activity will appear here." />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <ActivityTimelineCard timeline={activity.timeline} />
          <QuickActionsCard actions={OUTREACH_DETAIL_QUICK_ACTIONS} />
          <NoteCard>{OUTREACH_DETAIL_NOTE_TEXT}</NoteCard>
        </div>
      </div>
    </div>
  );
}
