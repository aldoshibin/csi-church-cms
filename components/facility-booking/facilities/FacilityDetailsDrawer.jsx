"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Building2, ShieldCheck, Wrench, Info, ImageIcon, UserRound, Zap, Pencil, MoreHorizontal, Plus,
  CalendarDays, CalendarClock, PowerOff, ChevronDown, Check,
} from "lucide-react";
import { SlideOverDrawer } from "@/components/ui/SlideOverDrawer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import { FACILITY_STATUS_VARIANT } from "@/lib/mock/vmFacilitiesMockData";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

const menuItemClass =
  "flex w-full items-center gap-2 rounded px-2.5 py-2 text-sm text-ink-muted outline-none transition-colors hover:bg-surface-canvas hover:text-ink focus:bg-surface-canvas cursor-pointer";

export function FacilityDetailsDrawer({ open, onOpenChange, facility, isLoading }) {
  return (
    <SlideOverDrawer open={open} onOpenChange={onOpenChange} title="Facility Details" width="900px">
      {isLoading || !facility ? (
        <div className="h-64 animate-pulse rounded-lg bg-surface-muted" />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-20 w-28 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-interactive-50 to-surface-muted text-interactive-300">
                <Building2 className="h-8 w-8" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-ink">{facility.name}</p>
                  <Badge variant={FACILITY_STATUS_VARIANT[facility.status] ?? "default"}>{facility.status}</Badge>
                </div>
                <p className="text-sm text-ink-subtle">ID: {facility.id}</p>
                <p className="mt-1 text-xs text-ink-subtle">{facility.location}</p>
                <p className="text-xs text-ink-subtle">{facility.capacityLabel} Capacity</p>
                <p className="text-xs text-ink-subtle">Added on {formatDate(facility.addedOn)}</p>
                <p className="text-xs text-ink-subtle">Last updated on {formatDate(facility.updatedOn)} by Parish Office</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="secondary" leftIcon={<Pencil className="h-4 w-4" />}>Edit Facility</Button>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button type="button" variant="secondary" rightIcon={<ChevronDown className="h-3.5 w-3.5" />}>More Actions</Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content align="end" sideOffset={6} className="z-50 w-48 rounded-md border border-border bg-white p-1.5 shadow-elevated animate-fade-in">
                    <DropdownMenu.Item className={menuItemClass}><CalendarDays className="h-4 w-4" /> View Bookings</DropdownMenu.Item>
                    <DropdownMenu.Item className={menuItemClass}><CalendarClock className="h-4 w-4" /> Maintenance Schedule</DropdownMenu.Item>
                    <DropdownMenu.Item className={`${menuItemClass} text-danger-600 hover:text-danger-600`}>
                      <PowerOff className="h-4 w-4" /> Deactivate Facility
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-interactive-600" />
                <h4 className="text-sm font-semibold text-interactive-700">Facility Information</h4>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Field label="Facility Name" value={facility.name} />
                <Field label="Location" value={facility.location} />
                <Field label="Category" value={facility.category} />
                <Field label="Capacity" value={facility.capacityLabel} />
                <div>
                  <p className="text-xs text-ink-subtle">Status</p>
                  <Badge variant={FACILITY_STATUS_VARIANT[facility.status] ?? "default"} className="mt-1">{facility.status}</Badge>
                </div>
                <Field label="Setup Type" value={facility.setupType} />
                <Field label="Number of Doors" value={facility.numberOfDoors} />
                <Field label="Number of Windows" value={facility.numberOfWindows} />
                <Field label="Total Area" value={facility.totalArea} />
              </div>
            </div>

            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-interactive-600" />
                <h4 className="text-sm font-semibold text-interactive-700">Amenities</h4>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-y-2.5 text-sm">
                {facility.fullAmenities.map((key) => (
                  <div key={key} className="flex items-center gap-2 text-ink">
                    <Check className="h-4 w-4 shrink-0 text-success-600" />
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2">
              <Info className="h-4 w-4 text-interactive-600" />
              <h4 className="text-sm font-semibold text-interactive-700">Description</h4>
            </div>
            <p className="mt-2 whitespace-pre-line text-sm text-ink-muted">{facility.description}</p>
          </div>

          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-interactive-600" />
              <h4 className="text-sm font-semibold text-interactive-700">Images</h4>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex h-20 items-center justify-center rounded-md bg-gradient-to-br from-interactive-50 to-surface-muted text-interactive-300">
                  <Building2 className="h-6 w-6" />
                </div>
              ))}
              <button type="button" className="flex h-20 flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border text-ink-subtle hover:bg-surface-canvas">
                <Plus className="h-4 w-4" />
                <span className="text-[11px]">Add Image</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-interactive-600" />
                <h4 className="text-sm font-semibold text-interactive-700">Usage Information</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Booking Allowed</span>
                  <span className="font-medium text-ink">{facility.status === "Active" ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Max Booking Hours</span>
                  <span className="font-medium text-ink">{facility.maxBookingHours}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Advance Booking Days</span>
                  <span className="font-medium text-ink">{facility.advanceBookingDays}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Cancellation Policy</span>
                  <span className="font-medium text-ink">{facility.cancellationPolicy}</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-interactive-600" />
                <h4 className="text-sm font-semibold text-interactive-700">Maintenance Information</h4>
              </div>
              <div className="mt-3 flex flex-col gap-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Maintenance Status</span>
                  <Badge variant={facility.maintenanceStatus === "Up to Date" ? "warning" : "danger"}>{facility.maintenanceStatus}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Last Maintenance</span>
                  <span className="font-medium text-ink">{formatDate(facility.lastMaintenance)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-subtle">Next Maintenance</span>
                  <span className="font-medium text-ink">{formatDate(facility.nextMaintenance)}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="shrink-0 text-ink-subtle">Remarks</span>
                  <span className="text-right font-medium text-ink">{facility.maintenanceRemarks}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-interactive-600" />
              <h4 className="text-sm font-semibold text-interactive-700">Assigned To</h4>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Field label="Managed By" value={facility.managedBy} />
              <Field label="Contact Person" value={facility.contactPerson} />
              <Field label="Phone Number" value={facility.contactPhone} />
              <Field label="Email Address" value={facility.contactEmail} />
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-interactive-700">
              <MoreHorizontal className="h-4 w-4" /> Quick Actions
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button type="button" className="flex items-center gap-2.5 rounded-md border border-border p-3 text-left text-sm font-medium text-ink hover:bg-surface-canvas">
                <CalendarDays className="h-4 w-4 text-interactive-600" />
                <div>
                  <p>View Bookings</p>
                  <p className="text-xs font-normal text-ink-subtle">View upcoming and past bookings</p>
                </div>
              </button>
              <button type="button" className="flex items-center gap-2.5 rounded-md border border-border p-3 text-left text-sm font-medium text-ink hover:bg-surface-canvas">
                <CalendarClock className="h-4 w-4 text-interactive-600" />
                <div>
                  <p>Maintenance Schedule</p>
                  <p className="text-xs font-normal text-ink-subtle">View maintenance history</p>
                </div>
              </button>
              <button type="button" className="flex items-center gap-2.5 rounded-md border border-border p-3 text-left text-sm font-medium text-danger-600 hover:bg-danger-50">
                <PowerOff className="h-4 w-4" />
                <div>
                  <p>Deactivate Facility</p>
                  <p className="text-xs font-normal text-danger-500">Move facility to inactive</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </SlideOverDrawer>
  );
}
