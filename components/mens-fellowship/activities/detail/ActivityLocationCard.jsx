"use client";

import { MapPin } from "lucide-react";

export function ActivityLocationCard({ location }) {
  if (!location) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Location</h3>
      <div className="flex gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-ink">{location.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-subtle">{location.address}</p>
        </div>
        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-success-50">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(0deg, rgba(22,163,74,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(22,163,74,0.15) 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
          <MapPin className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-danger-500" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
