"use client";

export function SectionSummaryTable({ summary = [] }) {
  const totals = summary.reduce(
    (acc, s) => ({
      total: acc.total + s.total,
      occupied: acc.occupied + s.occupied,
      available: acc.available + s.available,
      reserved: acc.reserved + s.reserved,
    }),
    { total: 0, occupied: 0, available: 0, reserved: 0 }
  );

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Section Summary</h3>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-wide text-ink-subtle">
            <th className="pb-2 font-medium">Section</th>
            <th className="pb-2 font-medium">Total Plots</th>
            <th className="pb-2 font-medium">Occupied</th>
            <th className="pb-2 font-medium">Available</th>
            <th className="pb-2 font-medium">Reserved</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {summary.map((s) => (
            <tr key={s.section}>
              <td className="py-2 font-medium text-ink">{s.section}</td>
              <td className="py-2 text-ink-muted">{s.total}</td>
              <td className="py-2 text-ink-muted">{s.occupied}</td>
              <td className="py-2 text-ink-muted">{s.available}</td>
              <td className="py-2 text-ink-muted">{s.reserved}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-border font-semibold text-ink">
            <td className="pt-2">Total</td>
            <td className="pt-2">{totals.total}</td>
            <td className="pt-2">{totals.occupied}</td>
            <td className="pt-2">{totals.available}</td>
            <td className="pt-2">{totals.reserved}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
