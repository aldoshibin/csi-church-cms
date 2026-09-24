"use client";

export function TeamInvolvedCard({ team = [], teamCount }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <h4 className="mb-3 text-sm font-semibold text-ink">Team Involved</h4>
      <div className="flex flex-col gap-3">
        {team.map((m, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-interactive-50 text-xs font-semibold text-interactive-600">
              {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{m.role}</p>
              <p className="truncate text-xs text-ink-subtle">{m.name}</p>
            </div>
          </div>
        ))}
      </div>
      {teamCount != null && (
        <button type="button" className="mt-3 text-sm font-medium text-interactive-500 hover:underline">
          View all team members ({teamCount})
        </button>
      )}
    </div>
  );
}
