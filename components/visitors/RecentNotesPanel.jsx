"use client";

export function RecentNotesPanel({ notes = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Recent Notes</h3>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.id}>
            <p className="text-xs text-ink-subtle">{note.timestamp}</p>
            <p className="text-sm text-ink">{note.text}</p>
          </li>
        ))}
      </ul>
      <button disabled title="No dedicated notes view yet" className="mt-3 cursor-not-allowed text-sm font-medium text-ink-subtle">
        View All Notes
      </button>
    </div>
  );
}
