import { UserCircle2 } from "lucide-react";

export function MemberSummaryPreview({ form }) {
  const initials = form.full_name?.trim() ? form.full_name.trim()[0].toUpperCase() : null;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-bold text-ink">Member Summary (Preview)</h3>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
          {initials ? <span className="text-lg font-bold">{initials}</span> : <UserCircle2 className="h-8 w-8" />}
        </div>
        <div>
          <p className="text-base font-bold text-ink">{form.full_name?.trim() || "New Member"}</p>
          <p className="text-sm text-ink-subtle">Not saved yet</p>
        </div>
      </div>

      <dl className="divide-y divide-border border-t border-border">
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Member Type</dt>
          <dd className="text-ink-subtle">{form.member_type || "-"}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Branch / Church</dt>
          <dd className="text-ink-subtle">{form.branch || "-"}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Phone</dt>
          <dd className="text-ink-subtle">{form.phone ? `+${form.phone_code} ${form.phone}` : "-"}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Status</dt>
          <dd className="font-semibold text-success-600">{form.status || "Active"}</dd>
        </div>
      </dl>
    </div>
  );
}
