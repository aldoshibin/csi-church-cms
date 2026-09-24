"use client";

import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

function InfoRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value ?? "—"}</p>
    </div>
  );
}

export function MemberOverviewTab({ member }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-4 text-base font-semibold text-ink">Personal Information</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <InfoRow label="Full Name" value={member.name} />
          <InfoRow label="Phone" value={member.phone} />
          <InfoRow label="Date of Birth" value={member.dob ? `${formatDate(member.dob)} (${member.age} Years)` : "—"} />
          <InfoRow label="Email" value={member.email} />
          <InfoRow label="Gender" value={member.gender} />
          <InfoRow label="Address" value={member.address} />
          <InfoRow label="Marital Status" value={member.maritalStatus} />
          <InfoRow label="Joined On" value={formatDate(member.joinedOn)} />
          {member.maritalStatus === "Married" && <InfoRow label="Spouse" value={member.spouseName} />}
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="mb-4 text-base font-semibold text-ink">Contact Information</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-1.5 text-xs text-ink-subtle"><Phone className="h-3.5 w-3.5" /> Phone (Mobile)</p>
            <p className="mt-0.5 text-sm font-medium text-ink">{member.phone}</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-xs text-ink-subtle"><Phone className="h-3.5 w-3.5" /> Phone (Alternate)</p>
            <p className="mt-0.5 text-sm font-medium text-ink">{member.phoneAlternate || "—"}</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-xs text-ink-subtle"><Mail className="h-3.5 w-3.5" /> Email</p>
            <p className="mt-0.5 text-sm font-medium text-ink">{member.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="mb-4 text-base font-semibold text-ink">Additional Information</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
          <InfoRow label="Occupation" value={member.occupation} />
          <InfoRow label="Blood Group" value={member.bloodGroup} />
          <InfoRow label="Member Since" value={formatDate(member.joinedOn)} />
          <InfoRow label="Employer" value={member.employer} />
          <InfoRow label="On Church Roll" value={member.onChurchRoll} />
          <InfoRow label="Baptism Date" value={formatDate(member.baptismDate)} />
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="mb-2 text-base font-semibold text-ink">Notes</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{member.notes || "No notes added yet."}</p>
      </div>
    </div>
  );
}
