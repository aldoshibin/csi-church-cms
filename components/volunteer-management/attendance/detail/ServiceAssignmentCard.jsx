"use client";

import { formatDate } from "@/lib/utils";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{children}</p>
    </div>
  );
}

export function ServiceAssignmentCard({ assignment }) {
  if (!assignment) return null;
  return (
    <div>
      <h3 className="mb-4 text-base font-semibold text-ink">Service Assignment</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field label="Service / Event">{assignment.service}</Field>
        <Field label="Location">{assignment.location}</Field>
        <Field label="Role / Position">{assignment.role}</Field>
        <Field label="Assigned On">{formatDate(assignment.assignedOn)}</Field>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Assigned By">{assignment.assignedBy}</Field>
        <Field label="Notes">{assignment.notes}</Field>
      </div>
    </div>
  );
}
