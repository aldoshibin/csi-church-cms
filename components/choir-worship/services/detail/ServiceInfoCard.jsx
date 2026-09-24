"use client";

export function ServiceInfoCard({ label, children }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="text-xs text-ink-subtle">{label}</p>
      <div className="mt-1 text-sm font-semibold text-ink">{children}</div>
    </div>
  );
}
