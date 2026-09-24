"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Pencil, MoreVertical, MoreHorizontal, Heart, BookOpen, Users, Cross, HandHeart, Star, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn, formatDate } from "@/lib/utils";
import { ACT_STATUS_VARIANT, ACT_TYPE_OPTIONS } from "@/lib/mock/fellowshipActivitiesMockData";

const ICON_MAP = { heart: Heart, book: BookOpen, users: Users, cross: Cross, handHeart: HandHeart, star: Star, moreHorizontal: MoreHorizontal };

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function OverviewTab({ activity }) {
  const pct = activity.capacity ? Math.round(((activity.participants ?? 0) / activity.capacity) * 100) : 0;
  const remaining = activity.capacity ? activity.capacity - (activity.participants ?? 0) : 0;
  const duration = activity.time;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Activity Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Activity Type" value={activity.activityType} />
            <Row label="Organizer" value={activity.organizer ?? "Women's Fellowship Team"} />
            <Row label="Focus Area" value={activity.focusArea} />
            <Row label="Dress Code" value={activity.dressCode} />
            <Row label="Bring With" value={activity.bringWith} />
          </div>
          <div className="mt-2 flex items-start justify-between gap-4 border-t border-surface-muted pt-2 text-sm">
            <span className="text-ink-subtle">Description</span>
            <span className="text-right font-medium text-ink">{activity.description}</span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Participation Summary</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Registered Participants" value={activity.participants ?? "—"} />
            <Row label="Total Capacity" value={activity.capacity ?? "—"} />
            <Row label="Remaining Seats" value={activity.capacity ? remaining : "—"} />
            <Row label="Registration Opens On" value={formatDate(activity.registrationOpensOn)} />
            <Row label="Last Date to Register" value={formatDate(activity.lastDateToRegister)} />
          </div>
          {activity.capacity && (
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-ink-subtle">
                <span>Participation Rate</span>
                <span>{pct}%</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full bg-success-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-1 text-right text-xs text-ink-subtle">{pct}% Filled</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink">
            <Calendar className="h-4 w-4 text-interactive-600" /> Schedule
          </h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Date" value={`${formatDate(activity.date)}${activity.day ? ` (${activity.day})` : ""}`} />
            <Row label="Time" value={duration} />
            <Row label="Venue" value={activity.venue} />
          </div>
          {activity.venueAddress && <p className="mt-2 text-xs text-ink-subtle">{activity.venueAddress}</p>}
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Agenda</h3>
          {activity.agenda?.length > 0 ? (
            <div className="flex flex-col divide-y divide-surface-muted">
              {activity.agenda.map((a, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 text-sm">
                  <span className="text-ink-subtle">{a.time}</span>
                  <span className="text-right font-medium text-ink">{a.item}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-subtle">No agenda added yet.</p>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Recent Notes</h3>
        {activity.notes?.length > 0 ? (
          <div className="flex flex-col gap-3">
            {activity.notes.map((n, i) => (
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

export function ActivityDetailsModal({ activity, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");
  if (!activity) return null;

  const typeOption = ACT_TYPE_OPTIONS.find((t) => t.value === activity.activityType);
  const Icon = ICON_MAP[typeOption?.icon] ?? Heart;

  const tabs = [
    "Overview",
    `Participants (${activity.participants ?? 0})`,
    `Notes (${activity.notes?.length ?? 0})`,
    "Documents (3)",
    "Reminders",
  ];

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${activity.color}1A` }}>
                <Icon className="h-7 w-7" style={{ color: activity.color }} />
              </span>
              <div>
                <Dialog.Title className="text-xl font-bold text-ink">{activity.title}</Dialog.Title>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant="accent">{activity.activityType}</Badge>
                  <Badge variant={ACT_STATUS_VARIANT[activity.status] ?? "default"}>{activity.status}</Badge>
                </div>
                <p className="mt-1.5 text-xs text-ink-subtle">
                  {formatDate(activity.date)}{activity.day ? ` (${activity.day})` : ""} · {activity.time} · {activity.venue}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />}>Edit Activity</Button>
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
            {activeTab === "Overview" ? <OverviewTab activity={activity} /> : <TabPlaceholder label={activeTab} />}
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
