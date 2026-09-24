"use client";

import { LandPlot } from "lucide-react";
import { PLOT_TYPE_GUIDE } from "@/lib/mock/vmCemeteryMockData";

export function PlotTypeGuideCard() {
  return (
    <div className="rounded-lg border border-interactive-100 bg-interactive-50/40 p-5">
      <h3 className="text-sm font-semibold text-interactive-700">Plot Type Guide</h3>
      <div className="mt-3 flex flex-col gap-3">
        {PLOT_TYPE_GUIDE.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-interactive-600 shadow-sm">
              <LandPlot className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.label}</p>
              <p className="text-xs text-ink-subtle">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
