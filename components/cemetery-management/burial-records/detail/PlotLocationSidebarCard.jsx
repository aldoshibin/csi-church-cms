"use client";

import { MapPin } from "lucide-react";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function PlotLocationSidebarCard({ plot }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        <MapPin className="h-4 w-4 text-interactive-600" /> Plot Location
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Section" value={plot.section} />
        <Field label="Plot No." value={plot.plotNumber} />
        <Field label="Row" value={plot.row} />
        <Field label="Grave No." value={plot.graveNumber} />
        <Field label="Area" value={plot.area} />
      </div>
    </div>
  );
}
