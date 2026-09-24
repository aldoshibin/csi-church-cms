"use client";

export function TopActiveUsersPanel({ users = [] }) {
  const max = Math.max(...users.map((u) => u.count), 1);

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Top Active Users</h3>
      <div className="flex flex-col gap-3">
        {users.map((u) => (
          <div key={u.name} className="flex items-center gap-3">
            <span className="w-24 shrink-0 truncate text-sm text-ink-muted">{u.name}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-interactive-500" style={{ width: `${(u.count / max) * 100}%` }} />
            </div>
            <span className="w-6 shrink-0 text-right text-sm font-medium text-ink">{u.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
