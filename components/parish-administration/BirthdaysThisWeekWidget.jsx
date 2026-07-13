"use client";

export function BirthdaysThisWeekWidget({ people = [] }) {
  return (
    // <div className="rounded-lg border border-border bg-white p-4 shadow-card">
    <div>
      <ul className="space-y-3">
        {people.map((person) => (
          <li key={person.id} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {person.initials}
            </div>
            <span className="flex-1 truncate text-sm text-ink">{person.name}</span>
            <span className="text-xs text-ink-subtle">{person.date}</span>
          </li>
        ))}
      </ul>

      <a href="/members?sort=birthday" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-interactive-500 hover:underline">
        See all birthdays →
      </a>
    </div>
  );
}
