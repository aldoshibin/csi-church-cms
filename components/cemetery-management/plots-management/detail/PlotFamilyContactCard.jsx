"use client";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function PlotFamilyContactCard({ familyContact }) {
  if (!familyContact) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Family / Contact Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <Field label="Primary Contact" value={`${familyContact.name}${familyContact.relation ? ` (${familyContact.relation})` : ""}`} />
        <Field label="Address" value={familyContact.address} />
        <Field label="Phone" value={familyContact.phone} />
        <Field label="Email" value={familyContact.email} />
      </div>
    </div>
  );
}
