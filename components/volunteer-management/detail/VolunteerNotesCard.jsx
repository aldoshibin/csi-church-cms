"use client";

import { formatDate } from "@/lib/utils";

export function VolunteerNotesCard({ notes = [], onViewAll }) {
  const items = notes.slice(0, 2);
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Notes</h3>
        <button type="button" onClick={onViewAll} className="text-xs font-medium text-interactive-500 hover:underline">View All</button>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((note, i) => (
          <div key={i} className="rounded-md border border-warning-50 bg-warning-50 p-3">
            <p className="text-xs font-medium text-ink-subtle">{formatDate(note.date)} &middot; {note.by}</p>
            <p className="mt-1 text-sm text-ink">{note.text}</p>
          </div>
        ))}
        {!items.length && <p className="text-sm text-ink-subtle">No notes yet.</p>}
      </div>
    </div>
  );
}
