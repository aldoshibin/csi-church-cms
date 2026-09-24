"use client";

export function DonationNotesCard({ note, byline }) {
  if (!note) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Notes</h3>
      <p className="mt-3 text-sm text-ink-muted">{note}</p>
      {byline && <p className="mt-2 text-xs text-ink-subtle">{byline}</p>}
    </div>
  );
}
