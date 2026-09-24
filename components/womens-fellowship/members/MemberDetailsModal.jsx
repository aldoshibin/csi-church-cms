"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Mail, Phone, Pencil, MoreVertical, CheckCircle2, Users, HandHeart, BookOpen, FileText, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn, formatDate } from "@/lib/utils";
import { MEM_STATUS_VARIANT } from "@/lib/mock/fellowshipMembersMockData";

const TABS = ["Overview", "Personal Info", "Group & Ministry", "Attendance", "Notes", "Documents"];

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function OverviewTab({ member }) {
  const { quickSummary, recentActivity } = member;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Personal Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Full Name" value={member.name} />
            <Row label="Date of Birth" value={formatDate(member.dob)} />
            <Row label="Age" value={`${member.age} Years`} />
            <Row label="Gender" value={member.gender} />
            <Row label="Marital Status" value={member.maritalStatus} />
            <Row label="Spouse Name" value={member.spouseName || "—"} />
            <Row label="Wedding Anniversary" value={member.weddingAnniversary || "—"} />
            <Row label="Phone Number" value={member.phone} />
            <Row label="Email Address" value={member.email} />
            <Row label="Date of Joining" value={formatDate(member.joinedOn)} />
            <Row label="Status" value={<Badge variant={MEM_STATUS_VARIANT[member.status] ?? "default"}>{member.status}</Badge>} />
            <Row label="Member ID" value={member.id} />
          </div>
          <div className="mt-2 flex items-start justify-between gap-4 border-t border-surface-muted pt-2 text-sm">
            <span className="text-ink-subtle">Address</span>
            <span className="text-right font-medium text-ink">{member.address}</span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Group Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Fellowship Group" value={member.group} />
            <Row label="Group Leader" value={member.groupLeader} />
            <Row label="Co-Leader" value={member.coLeader || "—"} />
            <Row label="Ministry Focus" value={member.ministryFocus} />
            <Row label="Joined On" value={formatDate(member.joinedOn)} />
          </div>

          <h3 className="mb-2 mt-5 text-sm font-semibold text-ink">Quick Summary</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Meetings Attended", value: quickSummary.meetingsAttended, icon: Users, color: "text-success-600", bg: "bg-success-50" },
              { label: "Activities", value: quickSummary.activities, icon: HandHeart, color: "text-[#7C3AED]", bg: "bg-[#F3E8FF]" },
              { label: "Bible Studies", value: quickSummary.bibleStudies, icon: BookOpen, color: "text-warning-600", bg: "bg-warning-50" },
              { label: "Documents", value: quickSummary.documents, icon: FileText, color: "text-interactive-600", bg: "bg-interactive-50" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border p-3">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${item.bg}`}>
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </span>
                <p className="mt-2 font-display text-lg font-bold text-ink">{item.value}</p>
                <p className="text-xs text-ink-subtle">{item.label}</p>
                <button type="button" className="mt-1 flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
                  View Details <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Recent Activity</h3>
        <div className="flex flex-col gap-3">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success-50">
                <CheckCircle2 className="h-4 w-4 text-success-600" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{a.title}</p>
                <p className="text-xs text-ink-subtle">{formatDate(a.date)}{a.time ? ` · ${a.time}` : ""}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-subtle">{a.location}</span>
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

export function MemberDetailsModal({ member, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");
  if (!member) return null;

  const initials = member.name.replace("Mrs. ", "").split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-lg font-semibold text-interactive-600">
                {initials}
              </span>
              <div>
                <Dialog.Title className="text-xl font-bold text-ink">{member.name}</Dialog.Title>
                <div className="mt-1"><Badge variant={MEM_STATUS_VARIANT[member.status] ?? "default"}>{member.status} Member</Badge></div>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-interactive-500">{member.group}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><Mail className="h-3 w-3" /> {member.email}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-subtle"><Phone className="h-3 w-3" /> {member.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />}>Edit Member</Button>
              <button type="button" className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-subtle hover:bg-surface-canvas" aria-label="More actions">
                <MoreVertical className="h-4 w-4" />
              </button>
              <Dialog.Close asChild>
                <button type="button" className="rounded-md p-1 text-ink-subtle hover:bg-surface-canvas hover:text-ink" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="mt-4 flex gap-6 overflow-x-auto border-b border-border">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "shrink-0 border-b-2 pb-2.5 text-sm font-medium transition-colors",
                  activeTab === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-5">
            {activeTab === "Overview" ? <OverviewTab member={member} /> : <TabPlaceholder label={activeTab} />}
          </div>

          <div className="mt-6 flex justify-end border-t border-border pt-4">
            <Dialog.Close asChild>
              <Button type="button" variant="secondary">Close</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
