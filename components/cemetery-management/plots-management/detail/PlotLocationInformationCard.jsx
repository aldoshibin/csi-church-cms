"use client";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function PlotLocationInformationCard({ plot }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Location Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Section" value={plot.section} />
        <Field label="Area / Zone" value={plot.areaZone} />
        <Field label="Row" value={plot.row} />
        <Field label="Block" value={plot.block} />
        <Field label="Grave No." value={plot.graveNumber} />
        <Field label="Pathway Access" value={plot.pathwayAccess} />
      </div>
    </div>
  );
}
