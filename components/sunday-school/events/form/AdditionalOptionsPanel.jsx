"use client";

const OPTIONS = [
  { key: "sendNotifications", label: "Send Notifications" },
  { key: "addToChurchCalendar", label: "Add to Church Calendar" },
  { key: "showInWebsite", label: "Show in Website" },
  { key: "allowVolunteerSignup", label: "Allow Volunteer Sign-up" },
];

export function AdditionalOptionsPanel({ form, setField }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Additional Options</h3>
      <div className="flex flex-col gap-2.5">
        {OPTIONS.map((option) => (
          <label key={option.key} className="flex items-center gap-2 text-sm text-ink">
            <input type="checkbox" className="h-4 w-4 accent-interactive-500" checked={form[option.key]} onChange={(e) => setField(option.key, e.target.checked)} />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}
