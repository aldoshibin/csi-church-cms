"use client";

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function FamilyContactInformationCard({ familyContacts = [], address, email }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Family &amp; Contact Information</h3>
      <div className="flex flex-col gap-4">
        {familyContacts.map((c) => (
          <div key={c.id} className="grid grid-cols-2 gap-4">
            <Field
              label={c.relation}
              value={c.phone ? `${c.name}  ${c.phone}` : c.name}
            />
            <Field label="Relationship with Deceased" value={c.relationshipWithDeceased} />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Address" value={address} />
          <Field label="Email" value={email} />
        </div>
      </div>
    </div>
  );
}
