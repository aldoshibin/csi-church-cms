"use client";

export function CheckboxOption({ checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
      <input
        type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-border text-success-600 focus-visible:ring-success-500"
      />
      {label}
    </label>
  );
}
