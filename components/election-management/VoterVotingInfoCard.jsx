"use client";

import { formatDate } from "@/lib/utils";

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function VoterVotingInfoCard({ voter }) {
  if (!voter) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Voter Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Voter Name" value={voter.name} />
        <Row label="Member No." value={voter.membershipNumber} />
        <Row label="Email" value={voter.email} />
        <Row label="Phone" value={voter.phone} />
        <Row label="Address" value={voter.address} />
        <Row label="Member Since" value={formatDate(voter.memberSince)} />
        <Row label="Membership Type" value={voter.membershipType} />
        <Row label="Date of Birth" value={formatDate(voter.dateOfBirth)} />
      </div>
    </div>
  );
}
