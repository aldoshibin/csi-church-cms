"use client";

import { formatCurrency } from "@/lib/utils";

export function AllocationDetailsTable({ allocation = [] }) {
  if (allocation.length === 0) return null;
  const total = allocation.reduce((sum, row) => sum + (row.amount ?? 0), 0);
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Allocation Details</h3>
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-4 py-3">Fund / Purpose</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allocation.map((row) => (
              <tr key={row.fund}>
                <td className="px-4 py-3 text-ink">{row.fund}</td>
                <td className="px-4 py-3 font-medium text-ink">{formatCurrency(row.amount)}</td>
                <td className="px-4 py-3 text-ink-muted">{row.description}</td>
              </tr>
            ))}
            <tr className="bg-surface-canvas font-semibold">
              <td className="px-4 py-3 text-ink">Total</td>
              <td className="px-4 py-3 text-ink">{formatCurrency(total)}</td>
              <td className="px-4 py-3" />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
