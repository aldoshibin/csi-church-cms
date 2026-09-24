"use client";

import { User, ClipboardList } from "lucide-react";
import { formatDate } from "@/lib/utils";

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-ink-subtle">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}

export function VolunteerOverviewTab({ volunteer }) {
  const { personal, ministryInfo } = volunteer;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="rounded-lg border border-border p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
          <User className="h-4 w-4" /> Personal Information
        </h3>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <InfoRow label="Full Name" value={personal.fullName} />
          <InfoRow label="Marital Status" value={personal.maritalStatus} />
          <InfoRow label="Date of Birth" value={formatDate(personal.dob)} />
          <InfoRow label="Emergency Contact" value={personal.emergencyContact} />
          <InfoRow label="Gender" value={personal.gender} />
          <InfoRow label="Emergency Phone" value={personal.emergencyPhone} />
          <InfoRow label="Phone" value={personal.phone} />
          <InfoRow label="Blood Group" value={personal.bloodGroup} />
          <InfoRow label="Email" value={personal.email} />
          <InfoRow label="Member Since" value={formatDate(personal.memberSince)} />
        </div>
        <div className="mt-2 flex items-start justify-between gap-4 border-t border-surface-muted pt-2 text-sm">
          <span className="text-ink-subtle">Address</span>
          <span className="text-right font-medium text-ink">{personal.address}</span>
        </div>
      </div>

      <div className="rounded-lg border border-border p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-accent-700">
          <ClipboardList className="h-4 w-4" /> Ministry Information
        </h3>
        <div className="flex flex-col divide-y divide-surface-muted">
          <InfoRow label="Ministry / Department" value={ministryInfo.ministryDept} />
          <InfoRow label="Role" value={ministryInfo.role} />
          <InfoRow label="Areas of Service" value={ministryInfo.areasOfService} />
          <InfoRow label="Service Start Date" value={formatDate(ministryInfo.serviceStartDate)} />
          <InfoRow label="Weekly Availability" value={ministryInfo.weeklyAvailability} />
          <InfoRow label="Skills / Interests" value={ministryInfo.skills} />
        </div>
      </div>
    </div>
  );
}
