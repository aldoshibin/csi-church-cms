"use client";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import { MINISTRY_STATUS_VARIANT } from "@/lib/mock/ministriesTeamsMockData";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function MinistryInformationCard({ ministry }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry Information</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Ministry Name">{ministry.name}</Field>
        <Field label="Total Teams">{ministry.totalTeams}</Field>

        <Field label="Category">{ministry.category}</Field>
        <Field label="Total Volunteers">{ministry.totalVolunteers}</Field>

        <Field label="Description">{ministry.description}</Field>
        <Field label="Active Volunteers">{ministry.activeVolunteers}</Field>

        <Field label="Status"><Badge variant={MINISTRY_STATUS_VARIANT[ministry.status] ?? "default"}>{ministry.status}</Badge></Field>
        <Field label="Inactive Volunteers">{ministry.inactiveVolunteers}</Field>

        <Field label="Established On">{formatDate(ministry.establishedOn)}</Field>
        <Field label="Total Assignments">{ministry.totalAssignments}</Field>

        <Field label="Ministry Head">{ministry.ministryHead}</Field>
        <Field label="This Month's Assignments">{ministry.thisMonthAssignments}</Field>

        <Field label="Contact Email">{ministry.contactEmail}</Field>
        <Field label="Preferred Service Time">{ministry.preferredServiceTime}</Field>

        <Field label="Contact Phone">{ministry.contactPhone}</Field>
        <Field label="Created By">{ministry.createdBy}</Field>

        <div />
        <Field label="Last Updated">{formatDate(ministry.lastUpdated)} by {ministry.lastUpdatedBy}</Field>
      </div>
    </div>
  );
}
