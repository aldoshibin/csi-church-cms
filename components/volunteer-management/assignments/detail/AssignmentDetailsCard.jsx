"use client";

import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-0.5 text-sm font-medium text-ink">{children}</div>
    </div>
  );
}

export function AssignmentDetailsCard({ assignment }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Assignment Details</h3>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Field label="Service / Event">{assignment.title}</Field>
        <Field label="Description">{assignment.description}</Field>

        <Field label="Ministry / Team">{assignment.ministryTeam}</Field>
        <Field label="Dress Code">{assignment.dressCode}</Field>

        <Field label="Location">{assignment.location}</Field>
        <Field label="Check-in Time">{assignment.checkinTime}</Field>

        <Field label="Date">{formatDate(assignment.date)} ({assignment.dayLabel})</Field>
        <Field label="Prepared By">{assignment.preparedBy}</Field>

        <Field label="Time">{assignment.startTime} - {assignment.endTime}</Field>
        <Field label="Remarks">{assignment.remarks}</Field>

        <Field label="Role">{assignment.role}</Field>
        <div />
      </div>
    </div>
  );
}
