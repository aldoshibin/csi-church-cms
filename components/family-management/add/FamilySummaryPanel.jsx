import { Users, Info, User } from "lucide-react";

const STEP_MESSAGES = {
  1: "Fill in the family details to proceed to the next step.",
  2: "Complete the address & contact information to proceed.",
  3: "Add all family members to proceed to review and confirm.",
  4: "Please confirm the details to add this family to the system.",
};

export function FamilySummaryPanel({ step, form, members }) {
  const genderCounts = members.reduce(
    (acc, m) => {
      if (m.gender === "Male") acc.male += 1;
      if (m.gender === "Female") acc.female += 1;
      return acc;
    },
    { male: 0, female: 0 }
  );

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-border bg-white p-5 shadow-card">
        <h3 className="mb-4 text-base font-bold text-ink">Family Summary</h3>

        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-interactive-50 text-interactive-500">
            <Users className="h-8 w-8" />
          </div>
        </div>

        <dl className="divide-y divide-border border-t border-border">
          <Row label="Family ID" value={form.family_id || "-"} />
          <Row label="Family Name" value={form.family_name || "-"} />
          <Row label="Family Head" value={form.family_head || "-"} />
          <Row label="Parish" value={form.parish || "-"} />
          <Row label="Members" value={String(members.length)} bold />
          <Row label="Created On" value={form.created_on || "-"} />
        </dl>

        {step >= 3 && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-bold text-ink">Members by Gender</p>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2.5 rounded-md border border-border p-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-ink-subtle">Male</p>
                  <p className="text-base font-bold text-ink">{genderCounts.male}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-md border border-border p-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-ink-subtle">Female</p>
                  <p className="text-base font-bold text-ink">{genderCounts.female}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start gap-2.5 rounded-lg border border-interactive-100 bg-interactive-50 p-4 text-sm text-interactive-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{STEP_MESSAGES[step]}</p>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-center justify-between py-2.5 text-sm">
      <dt className="text-ink-subtle">{label}</dt>
      <dd className={bold ? "font-bold text-ink" : "text-ink"}>{value}</dd>
    </div>
  );
}
