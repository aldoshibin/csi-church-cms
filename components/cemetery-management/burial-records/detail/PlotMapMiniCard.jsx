"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function PlotMapMiniCard({ plotMap }) {
  if (!plotMap) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Plot Map</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1 text-center text-[11px]">
          <thead>
            <tr>
              <th className="w-6" />
              {plotMap.columns.map((c) => (
                <th key={c} className="pb-1 font-medium text-ink-subtle">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plotMap.rows.map((row) => (
              <tr key={row.label}>
                <td className="pr-1 font-semibold text-ink-subtle">{row.label}</td>
                {row.cells.map((cell) => {
                  const isCurrent = cell === plotMap.current;
                  return (
                    <td key={cell}>
                      <span
                        className={cn(
                          "flex h-7 w-9 items-center justify-center rounded font-medium",
                          isCurrent ? "bg-success-600 text-white" : "bg-success-50 text-success-700"
                        )}
                      >
                        {cell}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/cemetery-management/plot-map" className="mt-3 flex items-center justify-center rounded-md border border-border py-2 text-xs font-medium text-ink-muted hover:bg-surface-canvas">
        View Full Plot Map
      </Link>
    </div>
  );
}
