"use client";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value ?? "–"}</p>
    </div>
  );
}

export function NominationPositionDetailsCard({ position, details }) {
  if (!details) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position Details</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Position" value={position} />
        <Row label="Description" value={details.description} />
        <Row label="Term" value={details.term} />
        <Row label="Max Nominees Allowed" value={details.maxNomineesAllowed} />
      </div>
    </div>
  );
}
