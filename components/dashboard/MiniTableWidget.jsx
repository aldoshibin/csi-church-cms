"use client";

import Link from "next/link";


export function MiniTableWidget({ title, viewAllHref, columns, rows, getRowId = (row) => row.id }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-interactive-500">{title}</h3>
        {viewAllHref && (
          <Link href={viewAllHref} className="text-xs font-medium text-interactive-500 hover:underline">
            View All →
          </Link>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-ink-subtle">
              {columns.map((col) => (
                <th key={col.key} className="pb-2 pr-3 font-medium">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={getRowId(row)}>
                {columns.map((col) => (
                  <td key={col.key} className="py-2 pr-3 text-ink">
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
