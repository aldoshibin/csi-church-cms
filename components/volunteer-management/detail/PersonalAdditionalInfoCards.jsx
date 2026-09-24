"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { VOLUNTEER_STATUS_VARIANT } from "@/lib/mock/volunteersMockData";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

function PillList({ items, tone = "purple" }) {
  const toneClass = tone === "blue" ? "bg-interactive-50 text-interactive-600" : "bg-[#F3E8FF] text-[#7C3AED]";
  if (!items?.length) return <span className="text-ink-subtle">—</span>;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className={`rounded-sm px-2 py-1 text-xs font-medium ${toneClass}`}>{s}</span>
      ))}
    </div>
  );
}

export function VolunteerPersonalInfoCard({ volunteer }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Full Name">{volunteer.name}</Field>
        <Field label="Primary Phone">{volunteer.phone}</Field>

        <Field label="Date of Birth">{formatDate(volunteer.dob)}</Field>
        <Field label="Alternate Phone">{volunteer.alternatePhone || "—"}</Field>

        <Field label="Gender">{volunteer.gender}</Field>
        <Field label="Email">{volunteer.email}</Field>

        <Field label="Marital Status">{volunteer.maritalStatus}</Field>
        <Field label="Emergency Contact">{volunteer.emergencyContact}</Field>

        <Field label="Blood Group">{volunteer.bloodGroup}</Field>
        <Field label="Emergency Phone">{volunteer.emergencyPhone}</Field>

        <Field label="Languages Known">{volunteer.languagesKnown}</Field>
        <Field label="Occupation">{volunteer.occupation}</Field>

        <Field label="Address">{volunteer.address}</Field>
        <Field label="Employer">{volunteer.employer}</Field>
      </div>
    </div>
  );
}

export function VolunteerMinistryRoleInfoCard({ volunteer }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry &amp; Role Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Primary Ministry / Department">{volunteer.ministry}</Field>
        <Field label="Member Status"><Badge variant={VOLUNTEER_STATUS_VARIANT[volunteer.memberStatus] ?? "success"}>{volunteer.memberStatus}</Badge></Field>

        <Field label="Role">{volunteer.role}</Field>
        <Field label="Volunteer Rating">
          <span className="flex items-center gap-1 text-warning-500">
            {"★".repeat(Math.round(volunteer.rating))}
            <span className="ml-1 text-ink-subtle">({volunteer.rating})</span>
          </span>
        </Field>

        <Field label="Team / Group">{volunteer.team}</Field>
        <Field label="How did you hear about us?">{volunteer.hearAboutUs}</Field>

        <Field label="Serving Since">{formatDate(volunteer.servingSince)}</Field>
        <Field label="Member Since">{formatDate(volunteer.memberSince)}</Field>
      </div>
    </div>
  );
}

export function VolunteerAdditionalInfoCard({ volunteer }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Skills"><PillList items={volunteer.skills} tone="purple" /></Field>
        <Field label="Special Talents / Hobbies">{volunteer.specialTalents || "—"}</Field>

        <Field label="Interests / Areas of Service"><PillList items={volunteer.interests} tone="blue" /></Field>
        <Field label="Availability">{volunteer.availability || "—"}</Field>

        <Field label="Remarks">{volunteer.remarks}</Field>
        <Field label="Preferred Contact Method">{volunteer.preferredContactMethod || "—"}</Field>

        <div />
        <Field label="Parish Member"><Badge variant={volunteer.parishMember ? "success" : "default"}>{volunteer.parishMember ? "Yes" : "No"}</Badge></Field>
      </div>
    </div>
  );
}
