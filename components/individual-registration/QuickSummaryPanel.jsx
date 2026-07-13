"use client";

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-ink-subtle">{label}</span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </div>
  );
}

export default function QuickSummaryPanel({ summary }) {
  return (
    <section className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h2 className="mb-2 font-display text-base font-semibold text-ink">Quick Summary</h2>
      <div className="divide-y divide-border">
        <Row label="Full Name" value={summary.fullName} />
        <Row label="Gender" value={summary.gender} />
        <Row label="Date of Birth" value={summary.dateOfBirth} />
        <Row label="Branch / Church" value={summary.branchChurch} />
        <Row label="Date of Joining" value={summary.dateOfJoining} />
        <Row label="Membership Number" value="Auto" />
        <Row label="Member Category" value={summary.memberCategory} />
      </div>
    </section>
  );
}
