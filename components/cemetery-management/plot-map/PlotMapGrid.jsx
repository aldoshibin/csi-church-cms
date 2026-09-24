"use client";

import Link from "next/link";
import { Building2, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { PLOT_MAP_LEGEND } from "@/lib/mock/vmCemeteryMockData";

const STATUS_COLOR = Object.fromEntries(PLOT_MAP_LEGEND.map((l) => [l.status, l.color]));

function PlotCell({ code, status }) {
  const color = status ? STATUS_COLOR[status] : null;
  const content = (
    <span
      className={cn(
        "flex h-9 w-14 shrink-0 items-center justify-center rounded-md border text-[10px] font-medium",
        color ? "text-white border-transparent" : "border-border bg-white text-ink-muted hover:border-interactive-500"
      )}
      style={color ? { backgroundColor: color } : undefined}
      title={code}
    >
      {code}
    </span>
  );
  return (
    <Link href="#" className="inline-flex">
      {content}
    </Link>
  );
}

export function PlotMapGrid({ sectionMap }) {
  const { section, columns, rowGroups, highlights, initial } = sectionMap;
  const colLabels = Array.from({ length: columns }, (_, i) => String(i + 1).padStart(2, "0"));

  let rowCounter = 0;

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <span className="w-10" />
        <h3 className="text-base font-bold tracking-wide text-ink">{section.toUpperCase()}</h3>
        <Compass className="h-6 w-6 text-ink-subtle" />
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-2">
          <div className="flex gap-1 pl-12">
            {colLabels.map((c) => (
              <span key={c} className="flex w-14 shrink-0 items-center justify-center text-xs font-medium text-ink-subtle">{c}</span>
            ))}
          </div>

          {rowGroups.map((group, gi) => {
            if (group.pathway) {
              return (
                <div key={`pathway-${gi}`} className="my-1 flex items-center justify-center rounded-md bg-surface-canvas py-1.5 text-xs font-semibold tracking-wide text-ink-subtle">
                  PATHWAY
                </div>
              );
            }
            return group.rows.map((rowNum) => {
              rowCounter += 1;
              return (
                <div key={`row-${rowNum}`} className="flex items-center gap-1">
                  <span className="w-12 shrink-0 text-xs font-medium text-ink-subtle">Row {rowNum}</span>
                  {colLabels.map((_, colIdx) => {
                    const plotIndex = (rowNum - 1) * columns + (colIdx + 1);
                    const code = `${initial}-${String(plotIndex).padStart(2, "0")}`;
                    return <PlotCell key={code} code={code} status={highlights[code]} />;
                  })}
                </div>
              );
            });
          })}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 rounded-md border border-success-200 bg-success-50 py-3 text-sm font-semibold text-success-700">
        <Building2 className="h-4 w-4" /> MAIN ENTRANCE
      </div>
    </div>
  );
}
