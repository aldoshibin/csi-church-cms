"use client";

import { ChevronRight, Building2 } from "lucide-react";

export function FacilityDetailsCard({ facility }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Facility Details</h3>
      <div className="mt-3 flex h-36 items-center justify-center rounded-md bg-gradient-to-br from-interactive-50 to-surface-muted text-interactive-300">
        <Building2 className="h-12 w-12" />
      </div>
      <div className="mt-4 flex flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-ink-subtle">Facility Name</span>
          <span className="font-medium text-ink">{facility.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-subtle">Location</span>
          <span className="font-medium text-ink">{facility.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-ink-subtle">Capacity</span>
          <span className="font-medium text-ink">{facility.capacity}</span>
        </div>
        <div className="flex items-start justify-between gap-2">
          <span className="shrink-0 text-ink-subtle">Amenities</span>
          <span className="text-right font-medium text-ink">{facility.amenities}</span>
        </div>
      </div>
      <button type="button" className="mt-4 flex w-full items-center justify-between border-t border-border pt-3 text-sm font-medium text-interactive-600 hover:underline">
        View Facility Details <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
