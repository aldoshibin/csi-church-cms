"use client";

import { User } from "lucide-react";
import { formatDate } from "@/lib/utils";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function DeceasedInformationCard({ deceased, photoUrl }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Deceased Information</h3>
      <div className="flex flex-col gap-5 sm:flex-row">
        <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted text-ink-subtle">
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoUrl} alt={deceased.fullName} className="h-full w-full object-cover" />
          ) : (
            <User className="h-9 w-9" />
          )}
        </span>
        <div className="grid flex-1 grid-cols-2 gap-4">
          <Field label="Full Name" value={deceased.fullName} />
          <Field label="Gender" value={deceased.gender} />
          <Field label="Date of Birth" value={formatDate(deceased.dateOfBirth)} />
          <Field label="Marital Status" value={deceased.maritalStatus} />
          <Field label="Age at Death" value={deceased.ageAtDeath ? `${deceased.ageAtDeath} Years` : undefined} />
          <Field label="Nationality" value={deceased.nationality} />
          <Field label="Date of Death" value={formatDate(deceased.dateOfDeath)} />
          <Field label="Occupation" value={deceased.occupation} />
        </div>
      </div>
    </div>
  );
}
