"use client";

const SETTINGS = [
  { key: "allowTeams", label: "Allow teams under this ministry", helper: "Enable to create and manage teams within this ministry." },
  { key: "allowVolunteersToJoin", label: "Allow volunteers to join", helper: "Enable volunteers to join and participate in this ministry." },
  { key: "showInDirectory", label: "Show in church directory", helper: "Display this ministry in the public church directory." },
];

export function MinistrySettingsSection({ form, toggleField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Ministry Settings</h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {SETTINGS.map((s) => (
          <label key={s.key} className="flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              checked={!!form[s.key]}
              onChange={() => toggleField(s.key)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-success-600 focus:ring-success-500"
            />
            <span>
              <span className="block text-sm font-medium text-ink">{s.label}</span>
              <span className="mt-0.5 block text-xs text-ink-subtle">{s.helper}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
