"use client";

export function DocumentGuidelinesCard({ guidelines }) {
  if (!guidelines?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Document Guidelines</h3>
      <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
        {guidelines.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-subtle" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
