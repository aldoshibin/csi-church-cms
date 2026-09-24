"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, UsersRound, Calendar, ArrowRight, Users, CalendarCheck, HandHeart, FileText, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn, formatDate } from "@/lib/utils";
import { FG_STATUS_VARIANT, FG_MINISTRY_FOCUS_VARIANT, FG_DETAIL_EXTRA_MOCK } from "@/lib/mock/fellowshipGroupsMockData";

const TABS = ["Overview", "Members", "Meetings", "Activities", "Documents"];

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function OverviewTab({ group, upcomingMeeting }) {
  const extra = FG_DETAIL_EXTRA_MOCK;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <h3 className="mb-2 text-sm font-semibold text-ink">Group Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <InfoRow label="Group Name" value={group.name} />
            <InfoRow label="Leader" value={group.leader} />
            <InfoRow label="Co-Leader" value={group.coLeader || "—"} />
            <InfoRow label="Established" value={group.establishedYear} />
            <InfoRow label="Members" value={group.members} />
            <InfoRow label="Meeting Day" value={group.meetingDay} />
            <InfoRow label="Meeting Time" value={group.meetingTime} />
            <InfoRow label="Location" value={group.location} />
            <InfoRow label="Ministry Focus" value={<Badge variant={FG_MINISTRY_FOCUS_VARIANT[group.ministryFocus] ?? "default"}>{group.ministryFocus}</Badge>} />
            <InfoRow label="Status" value={<Badge variant={FG_STATUS_VARIANT[group.status] ?? "default"}>{group.status}</Badge>} />
          </div>
          <div className="mt-3 border-t border-surface-muted pt-3">
            <p className="mb-1 text-sm text-ink-subtle">Description</p>
            <p className="text-sm leading-relaxed text-ink-muted">{group.description}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="flex h-24 w-24 items-center justify-center rounded-2xl" style={{ backgroundColor: `${group.color}1A` }}>
            <UsersRound className="h-10 w-10" style={{ color: group.color }} />
          </span>
          <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />} className="w-full">
            Edit Group
          </Button>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Upcoming Meeting</h3>
        <div className="flex items-start gap-3 rounded-lg bg-surface-canvas p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF]">
            <Calendar className="h-5 w-5 text-[#7C3AED]" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-ink">{upcomingMeeting.title}</p>
              <Badge variant="success" className="shrink-0">{upcomingMeeting.badge}</Badge>
            </div>
            <p className="mt-0.5 text-xs text-ink-subtle">{formatDate(upcomingMeeting.date)} ({upcomingMeeting.day})</p>
            <p className="text-xs text-ink-subtle">{upcomingMeeting.time}</p>
            <p className="text-xs text-ink-subtle">{upcomingMeeting.location}</p>
          </div>
        </div>
        <button type="button" className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-md border border-border py-2 text-sm font-medium text-ink-muted hover:bg-surface-canvas">
          View All Meetings <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Quick Summary</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total Members", value: extra.totalMembers, icon: Users, link: "View Members" },
            { label: "Meetings This Month", value: extra.meetingsThisMonth, icon: CalendarCheck, link: "View Meetings" },
            { label: "Activities This Month", value: extra.activitiesThisMonth, icon: HandHeart, link: "View Activities" },
            { label: "Documents", value: extra.documents, icon: FileText, link: "View Documents" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border p-3">
              <div className="flex items-center gap-2 text-ink-subtle">
                <item.icon className="h-4 w-4" />
                <span className="text-xs">{item.label}</span>
              </div>
              <p className="mt-1 font-display text-xl font-bold text-ink">{item.value}</p>
              <button type="button" className="mt-1 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
                {item.link} <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabPlaceholder({ label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
      <p className="text-sm font-medium text-ink">{label}</p>
      <p className="max-w-xs text-xs text-ink-subtle">This section isn't in the current design reference — let me know if you'd like it built out.</p>
    </div>
  );
}

export function GroupDetailsModal({ group, upcomingMeeting, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");
  if (!group) return null;

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between">
            <div>
              <Dialog.Title className="text-xl font-bold text-ink">{group.name}</Dialog.Title>
              <p className="mt-1 text-sm text-ink-subtle">Est. {group.establishedYear}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={FG_STATUS_VARIANT[group.status] ?? "default"}>{group.status}</Badge>
              <Dialog.Close asChild>
                <button type="button" className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="mt-4 flex gap-6 border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "border-b-2 pb-2.5 text-sm font-medium transition-colors",
                  activeTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-5">
            {activeTab === "Overview" ? <OverviewTab group={group} upcomingMeeting={upcomingMeeting} /> : <TabPlaceholder label={activeTab} />}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
