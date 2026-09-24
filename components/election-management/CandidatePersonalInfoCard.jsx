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

export function CandidatePersonalInfoCard({ candidate }) {
  if (!candidate) return null;
  const age = ageFromDob(candidate.dateOfBirth);
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Personal Information</h3>
      <div className="mt-4 flex flex-col gap-4">
        <Row label="Candidate Name" value={candidate.name} />
        <Row label="Email" value={candidate.email} />
        <Row label="Phone" value={candidate.phone} />
        <Row label="Date of Birth" value={candidate.dateOfBirth ? `${formatDate(candidate.dateOfBirth)}${age !== "" ? ` (${age} years)` : ""}` : "–"} />
        <Row label="Gender" value={candidate.gender} />
        <Row label="Address" value={candidate.address} />
        <Row label="Member Since" value={formatDate(candidate.memberSince)} />
        <Row label="Membership No." value={candidate.membershipNumber} />
      </div>
    </div>
  );
}
