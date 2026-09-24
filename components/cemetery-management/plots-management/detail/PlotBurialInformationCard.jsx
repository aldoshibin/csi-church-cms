"use client";

import { formatDate } from "@/lib/utils";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function PlotBurialInformationCard({ burial }) {
  if (!burial) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Burial Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Deceased Name" value={burial.deceasedName} />
        <Field label="Age at Death" value={burial.ageAtDeath ? `${burial.ageAtDeath} Years` : undefined} />
        <Field label="Burial Record ID" value={burial.burialRecordId} />
        <Field label="Gender" value={burial.gender} />
        <Field label="Date of Death" value={formatDate(burial.dateOfDeath)} />
        <Field label="Marital Status" value={burial.maritalStatus} />
        <Field label="Date of Burial" value={formatDate(burial.dateOfBurial)} />
        <Field label="Nationality" value={burial.nationality} />
        <Field label="Time of Burial" value={burial.timeOfBurial} />
        <Field label="Occupation" value={burial.occupation} />
        <Field label="Recorded By" value={burial.recordedBy} />
        <Field label="Funeral Conducted By" value={burial.funeralConductedBy} />
        <Field label="Service Type" value={burial.serviceType} />
      </div>
    </div>
  );
}
