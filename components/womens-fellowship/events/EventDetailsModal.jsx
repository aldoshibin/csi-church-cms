"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Pencil, MoreVertical, Heart, BookOpen, Users, Cross, HandHeart, Star, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn, formatDate } from "@/lib/utils";
import { EVT_STATUS_VARIANT, EVT_TYPE_OPTIONS } from "@/lib/mock/fellowshipEventsMockData";

const ICON_MAP = { heart: Heart, book: BookOpen, users: Users, cross: Cross, handHeart: HandHeart, star: Star };
const TABS = ["Overview", "Registrations", "Agenda", "Notes", "Documents"];

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

function OverviewTab({ event }) {
  const pct = event.capacity ? Math.round(((event.registered ?? 0) / event.capacity) * 100) : 0;
  const remaining = event.capacity ? event.capacity - (event.registered ?? 0) : 0;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Event Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Date & Time" value={`${formatDate(event.date)}${event.day ? ` (${event.day})` : ""}`} />
            <Row label="" value={event.time} />
            <Row label="Venue" value={event.venue} />
            <Row label="Event Type" value={event.eventType} />
            <Row label="Organizer" value={event.organizer} />
          </div>
          <div className="mt-2 flex items-start justify-between gap-4 border-t border-surface-muted pt-2 text-sm">
            <span className="text-ink-subtle">Description</span>
            <span className="text-right font-medium text-ink">{event.description}</span>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Registration Summary</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Registration Opened" value={formatDate(event.registrationOpened)} />
            <Row label="Last Date to Register" value={formatDate(event.lastDateToRegister)} />
            <Row label="Total Capacity" value={event.capacity ?? "—"} />
            <Row label="Registered" value={event.registered ?? "—"} />
            <Row label="Remaining Seats" value={event.capacity ? remaining : "—"} />
          </div>
          {event.capacity && (
            <div className="mt-3">
              <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
                <div className="h-full rounded-full bg-success-500" style={{ width: `${pct}%` }} />
              </div>
              <p className="mt-1 text-right text-xs text-ink-subtle">{pct}% Filled</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 border-t border-border pt-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Agenda</h3>
          {event.agenda?.length > 0 ? (
            <div className="flex flex-col divide-y divide-surface-muted">
              {event.agenda.map((a, i) => (
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
        <div>
          <h3 className="mb-2 text-sm font-semibold text-ink">Additional Information</h3>
          <div className="flex flex-col divide-y divide-surface-muted">
            <Row label="Dress Code" value={event.dressCode} />
            <Row label="Bring With" value={event.bringWith} />
            <Row label="Contact Person" value={event.contact.person} />
            <Row label="Contact Number" value={event.contact.number} />
            <Row label="Email" value={event.contact.email} />
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink">Recent Notes</h3>
        {event.notes?.length > 0 ? (
          <div className="flex flex-col gap-3">
            {event.notes.map((n, i) => (
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

export function EventDetailsModal({ event, onClose }) {
  const [activeTab, setActiveTab] = useState("Overview");
  if (!event) return null;

  const typeOption = EVT_TYPE_OPTIONS.find((t) => t.value === event.eventType);
  const Icon = ICON_MAP[typeOption?.icon] ?? Heart;

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 animate-fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl bg-white p-6 shadow-elevated animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${event.color}1A` }}>
                <Icon className="h-7 w-7" style={{ color: event.color }} />
              </span>
              <div>
                <Dialog.Title className="text-xl font-bold text-ink">{event.title}</Dialog.Title>
                <div className="mt-1 flex items-center gap-2">
                  <Badge variant={EVT_STATUS_VARIANT[event.eventType] ?? "info"}>{event.eventType}</Badge>
                </div>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-ink-subtle">
                  <Badge variant={EVT_STATUS_VARIANT[event.status] ?? "default"}>{event.status}</Badge>
                  {event.capacity && <span>{event.registered} / {event.capacity} Registered</span>}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" size="sm" leftIcon={<Pencil className="h-3.5 w-3.5" />}>Edit Event</Button>
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
            {activeTab === "Overview" ? <OverviewTab event={event} /> : <TabPlaceholder label={activeTab} />}
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
