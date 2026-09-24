"use client";

import { formatDate } from "@/lib/utils";

function ageFromDob(dob) {
  if (!dob) return "";
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return "";
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) age -= 1;
  return age;
}

function Row({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-subtle">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm font-medium text-ink">{value || "–"}</p>
    </div>
  );
}

export function VoterPersonalInfoCard({ voter }) {
  if (!voter) return null;
  const age = ageFromDob(voter.dateOfBirth);
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Personal Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Voter Name" value={voter.name} />
        <Row label="Email" value={voter.email} />
        <Row label="Phone" value={voter.phone} />
        <Row label="Date of Birth" value={voter.dateOfBirth ? `${formatDate(voter.dateOfBirth)}${age !== "" ? ` (${age} years)` : ""}` : "–"} />
        <Row label="Gender" value={voter.gender} />
        <Row label="Address" value={voter.address} />
        <Row label="Member Since" value={formatDate(voter.memberSince)} />
        <Row label="Member No." value={voter.membershipNumber} />
        <Row label="Family" value={voter.familyName} />
      </div>
    </div>
  );
}
