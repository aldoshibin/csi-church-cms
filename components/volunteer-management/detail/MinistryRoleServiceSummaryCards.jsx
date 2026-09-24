"use client";

import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{children}</p>
    </div>
  );
}

export function VolunteerMinistryRoleCard({ volunteer }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Ministry &amp; Role</h3>
      <div className="flex flex-col gap-3.5">
        <Field label="Primary Ministry">{volunteer.ministry}</Field>
        <Field label="Role">{volunteer.role}</Field>
        <Field label="Team">{volunteer.team}</Field>
        <Field label="Serving Since">{formatDate(volunteer.servingSince)}</Field>
      </div>
    </div>
  );
}

export function VolunteerServiceSummaryCard({ summary }) {
  if (!summary) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Service Summary</h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-ink-subtle">Total Assignments</span>
          <span className="font-semibold text-ink">{summary.totalAssignments}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-1.5 text-success-600">Completed</span>
          <span className="font-semibold text-success-600">{summary.completed}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-interactive-600">Upcoming</span>
          <span className="font-semibold text-interactive-600">{summary.upcoming}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-danger-600">Cancelled</span>
          <span className="font-semibold text-danger-600">{summary.cancelled}</span>
        </div>
      </div>
    </div>
  );
}
