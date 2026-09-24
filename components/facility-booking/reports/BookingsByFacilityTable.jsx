"use client";

export function BookingsByFacilityTable({ data }) {
  if (!data?.length) return null;
  const formatCurrency = (n) => `₹ ${n.toLocaleString("en-IN")}`;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Bookings by Facility</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-ink-subtle">
              <th className="pb-2 pr-3 font-medium">Facility</th>
              <th className="pb-2 pr-3 font-medium">Bookings</th>
              <th className="pb-2 pr-3 font-medium">Revenue</th>
              <th className="pb-2 font-medium">Utilization</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.name} className="border-b border-border/70 last:border-0">
                <td className="py-2.5 pr-3 font-medium text-ink">{row.name}</td>
                <td className="py-2.5 pr-3 text-ink-muted">{row.bookings}</td>
                <td className="py-2.5 pr-3 text-ink-muted">{formatCurrency(row.revenue)}</td>
                <td className="py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted">
                      <div className="h-full rounded-full bg-interactive-500" style={{ width: `${row.utilization}%` }} />
                    </div>
                    <span className="text-xs text-ink-subtle">{row.utilization}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
