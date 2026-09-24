"use client";

import { PLOT_MAP_LEGEND } from "@/lib/mock/vmCemeteryMockData";

export function MapLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {PLOT_MAP_LEGEND.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5 text-sm text-ink-muted">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
