"use client";

import {
  Wrench, Fan, Volume2, MonitorPlay, Mic2, Armchair, Table2, PenSquare, LayoutTemplate, Lightbulb,
  ParkingCircle, UtensilsCrossed, Bath, Wifi, Music2, Library, MoreHorizontal,
} from "lucide-react";
import { AMENITY_OPTIONS } from "@/lib/mock/vmFacilitiesMockData";

const ICONS = {
  Fan, Volume2, MonitorPlay, Mic2, Armchair, Table2, PenSquare, LayoutTemplate, Lightbulb,
  ParkingCircle, UtensilsCrossed, Bath, Wifi, Music2, Library, MoreHorizontal,
};

export function AmenitiesSection({ selected, onToggle }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Wrench className="h-4 w-4 text-interactive-600" />
        <h3 className="text-base font-semibold text-ink">Amenities</h3>
      </div>
      <p className="mt-1 text-sm text-ink-subtle">Select all amenities available in this facility.</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {AMENITY_OPTIONS.map((amenity) => {
          const Icon = ICONS[amenity.icon] ?? MoreHorizontal;
          const checked = selected.includes(amenity.key);
          return (
            <label
              key={amenity.key}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm text-ink hover:bg-surface-canvas"
            >
              <input
                type="checkbox" checked={checked} onChange={() => onToggle(amenity.key)}
                className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
              />
              <Icon className="h-4 w-4 shrink-0 text-ink-subtle" />
              {amenity.key}
            </label>
          );
        })}
      </div>
    </div>
  );
}
