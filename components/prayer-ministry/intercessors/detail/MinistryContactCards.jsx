"use client";

function Field({ label, children }) {
  return (
    <div>
      <p className="text-xs text-ink-subtle">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{children}</p>
    </div>
  );
}

export function MinistryInfoCard({ intercessor }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Ministry Information</h4>
      <div className="flex flex-col gap-3">
        <Field label="Ministry / Group">{intercessor.ministry}</Field>
        <Field label="Role">{intercessor.role}</Field>
        <Field label="Member Since">{new Date(intercessor.joinedOn).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</Field>
      </div>
    </div>
  );
}

export function ContactInfoCard({ intercessor }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Contact Information</h4>
      <div className="flex flex-col gap-3">
        <Field label="Phone">{intercessor.phone}</Field>
        <Field label="Email">{intercessor.email}</Field>
        <Field label="Preferred Contact">{intercessor.preferredContact}</Field>
      </div>
    </div>
  );
}
