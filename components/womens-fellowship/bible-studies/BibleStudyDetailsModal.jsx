"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Pencil, MoreVertical, MoreHorizontal, Cross, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn, formatDate } from "@/lib/utils";
import { BS_STATUS_VARIANT } from "@/lib/mock/bibleStudiesMockData";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function OverviewTab({ study }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Study Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Study Type" value={study.studyType} />
            <Row label="Leader" value={study.leader} />
            <Row label="Day & Time" value={`${study.day}, ${study.time}`} />
            <Row label="Location / Venue" value={study.venue} />
          </div>
          <div className="mt-2 flex items-start justify-between gap-4 border-t border-surface-muted pt-2 text-sm">
            <span className="text-ink-subtle">Description</span>
            <span className="text-right font-medium text-ink">{study.description}</span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Participation Summary</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Total Participants" value={study.participants ?? "—"} />
            <Row label="Average Attendance" value={`${study.avgAttendance} (${study.participationRate}%)`} />
            <Row label="Participation Rate" value={`${study.participationRate}%`} />
            <Row label="New Members (This Month)" value={study.newMembersThisMonth} />
            <Row label="Started On" value={formatDate(study.startedOn)} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
            <Calendar className="h-4 w-4 text-interactive-600" /> Study Schedule
          </h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Day" value={study.day} />
            <Row label="Time" value={study.time} />
            <Row label="Frequency" value={study.recurrence} />
            <Row label="Next Study" value={formatDate(study.nextStudy)} />
            <Row label="End Date" value={formatDate(study.endDate)} />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Recent Sessions</h3>
          {study.recentSessions?.length > 0 ? (
            <div className="flex flex-col gap-2.5">
              {study.recentSessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-2.5 text-sm">
                  <div>
                    <p className="font-medium text-ink">Session {s.session} · {s.title}</p>
                    <p className="text-xs text-ink-subtle">{formatDate(s.date)} · {s.attendees} Attendees</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-subtle">No sessions recorded yet.</p>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Recent Notes</h3>
        {study.notes?.length > 0 ? (
          <div className="flex flex-col gap-3">
            {study.notes.map((n, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-lg bg-surface-canvas p-3">
                <p className="text-sm text-ink-muted">{n.text}<br /><span className="text-xs text-ink-subtle">Added by {n.by} · {formatDate(n.date)}</span></p>
                <MoreHorizontal className="h-4 w-4 shrink-0 text-ink-subtle" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-ink-subtle">No notes added yet.</p>
        )}
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

export function BibleStudyDetailsModal({ study, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");
  if (!study) return null;

  const tabs = ["Overview", `Participants (${study.participants ?? 0})`, "Sessions (8)", "Notes (3)", "Documents (2)"];

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${study.color}1A` }}>
                <Cross className="h-7 w-7" style={{ color: study.color }} />
              </span>
              <div>
                <Dialog.Title className="text-xl font-bold text-ink">{study.title}</Dialog.Title>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant={BS_STATUS_VARIANT[study.status] ?? "default"}>{study.status}</Badge>
                  <Badge variant="accent">{study.studyType}</Badge>
                </div>
                <p className="mt-1.5 max-w-md text-xs text-ink-subtle">{study.description}</p>
                <p className="mt-1.5 text-xs text-ink-subtle">{study.day} · {study.time} · {study.venue} · {study.participants ?? 0} Participants</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />}>Edit Study</Button>
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
            {tabs.map((tab) => {
              const base = tab.split(" (")[0];
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(base)}
                  className={cn(
                    "shrink-0 border-b-2 pb-2.5 text-sm font-medium transition-colors",
                    activeTab === base ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="mt-5">
            {activeTab === "Overview" ? <OverviewTab study={study} /> : <TabPlaceholder label={activeTab} />}
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
