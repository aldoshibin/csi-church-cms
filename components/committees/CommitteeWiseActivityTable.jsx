"use client";


export function CommitteeWiseActivityTable({ rows = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2 p-4">
        <h3 className="text-sm font-semibold text-interactive-500">Committee-wise Activity Summary</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full text-left text-sm">
          <thead className="border-y border-border text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              {["Committee Name", "Total Activities", "Completed", "In Progress", "Pending", "Cancelled"].map((h) => (
                <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 font-medium text-interactive-600">{row.name}</td>
                <td className="px-4 py-3 text-ink">{row.total}</td>
                <td className="px-4 py-3 text-ink">{row.completed}</td>
                <td className="px-4 py-3 text-ink">{row.inProgress}</td>
                <td className="px-4 py-3 text-ink">{row.pending}</td>
                <td className="px-4 py-3 text-ink">{row.cancelled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <p className="text-sm text-ink-subtle">Showing 1 to {rows.length} of {rows.length} records</p>
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Previous page">‹</button>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-interactive-500 text-sm font-medium text-white">1</span>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted hover:bg-surface-muted" aria-label="Next page">›</button>
        </div>
      </div>
    </div>
  );
}
