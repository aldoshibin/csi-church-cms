"use client";

import { cn } from "@/lib/utils";

const STATUS_STYLE = {
  Occupied: "bg-success-600 text-white",
  Available: "bg-interactive-50 text-interactive-700",
  Reserved: "bg-warning-50 text-warning-700",
};

const LEGEND = [
  { label: "Occupied", className: "bg-success-600" },
  { label: "Available", className: "bg-interactive-50 border border-interactive-200" },
  { label: "Reserved", className: "bg-warning-50 border border-warning-200" },
];

export function PlotMapGridCard({ plotMap }) {
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
                {row.cells.map((cell, idx) => {
                  const isCurrent = cell === plotMap.current;
                  const status = row.cellStatus?.[idx];
                  return (
                    <td key={`${row.label}-${cell}-${idx}`}>
                      <span
                        className={cn(
                          "flex h-7 w-9 items-center justify-center rounded font-medium",
                          isCurrent ? "bg-success-600 text-white" : (STATUS_STYLE[status] ?? "bg-surface-muted text-ink-subtle")
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
      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
        {LEGEND.map((l) => (
          <span key={l.label} className="flex items-center gap-1.5">
            <span className={cn("h-2.5 w-2.5 rounded-full", l.className)} /> {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
