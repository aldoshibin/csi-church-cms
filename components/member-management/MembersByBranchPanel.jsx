"use client";


export function MembersByBranchPanel({ branches = [] }) {
  const maxCount = Math.max(...branches.map((b) => b.count));

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Members by Branch</h3>
      <ul className="space-y-3">
        {branches.map((branch) => (
          <li key={branch.label}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-ink">{branch.label}</span>
              <span className="font-medium text-ink-subtle">{branch.count.toLocaleString()}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-surface-muted">
              <div className="h-1.5 rounded-full bg-interactive-500" style={{ width: `${(branch.count / maxCount) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
