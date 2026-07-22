import { Users } from "lucide-react";

export function FamilySummaryPreview({ form, memberCount }) {
  const adults = form.membersAges?.filter((a) => a >= 18).length ?? 0;
  const children = form.membersAges?.filter((a) => a < 18).length ?? 0;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-bold text-ink">Family Summary (Preview)</h3>

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
          <Users className="h-7 w-7" />
        </div>
        <div>
          <p className="text-base font-bold text-ink">{form.family_name?.trim() || "New Family"}</p>
          <p className="text-sm text-ink-subtle">Not saved yet</p>
        </div>
      </div>

      <dl className="divide-y divide-border border-t border-border">
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Total Members</dt>
          <dd className="text-ink-subtle">{memberCount}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Adults (18+)</dt>
          <dd className="text-ink-subtle">{adults}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Children (&lt;18)</dt>
          <dd className="text-ink-subtle">{children}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Family Category</dt>
          <dd className="text-ink-subtle">{form.family_category || "-"}</dd>
        </div>
        <div className="flex items-center justify-between py-2.5 text-sm">
          <dt className="font-semibold text-ink">Branch / Church</dt>
          <dd className="text-ink-subtle">{form.branch || "-"}</dd>
        </div>
      </dl>
    </div>
  );
}
