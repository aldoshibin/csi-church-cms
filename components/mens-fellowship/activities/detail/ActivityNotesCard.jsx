"use client";

export function ActivityNotesCard({ notes = [] }) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-ink">Notes</h3>
      <div className="flex flex-col gap-3">
        {notes.length === 0 ? (
          <p className="text-sm text-ink-subtle">No notes added yet.</p>
        ) : notes.map((note, i) => (
          <p key={i} className="text-sm leading-relaxed text-ink-muted">{note}</p>
        ))}
      </div>
    </div>
  );
}
