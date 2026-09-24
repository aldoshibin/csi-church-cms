"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CalendarCheck2, ShieldCheck, FileText, ListChecks, UserRound, Layers, Paperclip, History,
  ChevronDown, FileImage, File as FileIcon, Check,
} from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { REQUEST_STATUS_VARIANT, AVATAR_COLORS } from "@/lib/mock/vmBookingRequestsMockData";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-interactive-600" />
      <h4 className="text-sm font-semibold text-interactive-700">{children}</h4>
    </div>
  );
}

function initials(name) {
  return name.split(" ").filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join("");
}

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function BookingRequestDetailsDrawer({ open, onOpenChange, request, isLoading, onApprove, onReject }) {
  const style = request ? AVATAR_COLORS[request.requesterName.charCodeAt(0) % AVATAR_COLORS.length] : null;

  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Booking Request Details" width="900px">
      {isLoading || !request ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold"
                style={{ backgroundColor: style.bg, color: style.color }}
              >
                {initials(request.requesterName)}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-ink">{request.requesterName}</p>
                  <Badge variant={REQUEST_STATUS_VARIANT[request.status] ?? "default"}>{request.status}</Badge>
                </div>
                <p className="text-sm text-ink-subtle">Request ID: {request.id}</p>
                <p className="mt-1 text-xs text-ink-subtle">{request.email} · {request.phone}</p>
                <p className="text-xs text-ink-subtle">Requested on {formatDate(request.requestedOn, { hour: "numeric", minute: "2-digit" })}</p>
              </div>
            </div>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button type="button" variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>More Actions</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                  <DropdownMenu.Item className={menuItemClass} onSelect={() => onApprove?.(request)}><Check className="h-4 w-4" /> Approve Request</DropdownMenu.Item>
                  <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`} onSelect={() => onReject?.(request)}>
                    <ShieldCheck className="h-4 w-4" /> Reject Request
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <SectionTitle icon={CalendarCheck2}>Booking Information</SectionTitle>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Field label="Facility / Event" value={request.facilityEvent} />
                <Field label="Date & Time" value={request.dateTimeLabel} />
                <Field label="Total Guests" value={request.totalGuests} />
                <Field label="Setup Type" value={request.setupType} />
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <SectionTitle icon={ShieldCheck}>Policy Information</SectionTitle>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Field label="Advance Booking Days" value={request.advanceBookingDays} />
                <Field label="Booking Allowed" value={request.bookingAllowed} />
                <Field label="Max Booking Hours" value={request.maxBookingHours} />
                <Field label="Cancellation Policy" value={request.cancellationPolicy} />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <SectionTitle icon={FileText}>Additional Information</SectionTitle>
            <div className="mt-3">
              <p className="text-xs text-ink-subtle">Description / Notes</p>
              <p className="mt-1 whitespace-pre-line text-sm text-ink-muted">{request.descriptionNotes}</p>
            </div>
            <div className="mt-4">
              <p className="mb-2 flex items-center gap-2 text-xs text-ink-subtle"><ListChecks className="h-3.5 w-3.5" /> Special Requirements</p>
              <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2">
                {request.specialRequirements?.map((req) => (
                  <div key={req} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="h-4 w-4 shrink-0 text-success-600" />
                    {req}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
              <SectionTitle icon={UserRound}>Contact Information</SectionTitle>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <Field label="Full Name" value={request.contact?.fullName} />
                <Field label="Email" value={request.contact?.email} />
                <Field label="Phone" value={request.contact?.phone} />
                <Field label="Address" value={request.contact?.address} />
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <SectionTitle icon={Layers}>Usage Information</SectionTitle>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Doors</span>
                  <span className="font-medium text-ink">{request.usage?.numberOfDoors}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Windows</span>
                  <span className="font-medium text-ink">{request.usage?.numberOfWindows}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Total Area</span>
                  <span className="font-medium text-ink">{request.usage?.totalArea}</span>
                </div>
                <div>
                  <span className="text-ink-subtle">Amenities</span>
                  <p className="mt-1 text-xs text-ink-muted">{request.usage?.amenitiesRequested?.join(", ")}</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <SectionTitle icon={Paperclip}>Attachments</SectionTitle>
              <div className="mt-3 flex flex-col gap-2">
                {request.attachments?.map((file) => (
                  <div key={file.name} className="flex items-center gap-2.5 rounded-md border border-border px-2.5 py-2">
                    {file.type === "image" ? (
                      <FileImage className="h-4 w-4 shrink-0 text-interactive-600" />
                    ) : (
                      <FileIcon className="h-4 w-4 shrink-0 text-interactive-600" />
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-ink">{file.name}</p>
                      <p className="text-[11px] text-ink-subtle">{file.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <SectionTitle icon={History}>Booking History</SectionTitle>
            <div className="mt-3 flex flex-col gap-4">
              {request.history?.map((h, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-interactive-500" />
                  <div>
                    <p className="text-sm text-ink">{h.event}</p>
                    <p className="text-xs text-ink-subtle">{formatDate(h.date, { hour: "numeric", minute: "2-digit" })}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
            <Button type="button" variant="secondary" onClick={() => onOpenChange?.(false)}>Back</Button>
            <div className="flex items-center gap-2">
              <Button type="button" variant="danger" onClick={() => onReject?.(request)}>Reject Request</Button>
              <Button type="button" variant="success" onClick={() => onApprove?.(request)}>Approve Request</Button>
            </div>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
