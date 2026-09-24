"use client";

import Link from "next/link";

export function PositionHistoryTable({ history }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Position History</h3>
      <div className="mt-4 overflow-hidden rounded-md border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Holder Name</th>
              <th className="px-3 py-2 font-medium">From</th>
              <th className="px-3 py-2 font-medium">To</th>
              <th className="px-3 py-2 font-medium">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {!history?.length ? (
              <tr>
                <td colSpan={4} className="px-3 py-6 text-center text-sm text-ink-subtle">No history recorded for this position yet.</td>
              </tr>
            ) : (
              history.map((row) => (
                <tr key={row.id}>
                  <td className="px-3 py-2.5">
                    <Link href="#" className="font-medium text-interactive-600 hover:underline">{row.holderName}</Link>
                  </td>
                  <td className="px-3 py-2.5 text-ink">{row.from}</td>
                  <td className="px-3 py-2.5">
                    <span className={row.to === "Present" ? "font-medium text-success-600" : "text-ink"}>{row.to}</span>
                  </td>
                  <td className="px-3 py-2.5 text-ink">{row.duration}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
