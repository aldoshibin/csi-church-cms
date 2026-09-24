"use client";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-0.5 whitespace-pre-line text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function NomineeInfoCard({ nomination }) {
  if (!nomination) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Nominee Information</h3>
      <div className="mt-4 flex gap-4">
        <img src={nomination.photo} alt={nomination.nomineeName} className="h-16 w-16 shrink-0 rounded-md object-cover" />
        <div className="flex flex-1 flex-col gap-3">
          <Row label="Nominee Name" value={nomination.nomineeName} />
          <Row label="Nominee ID" value={nomination.nomineeMembershipNo} />
          <Row label="Email" value={nomination.email} />
          <Row label="Phone" value={nomination.phone} />
          <Row label="Address" value={nomination.address} />
        </div>
      </div>
    </div>
  );
}
