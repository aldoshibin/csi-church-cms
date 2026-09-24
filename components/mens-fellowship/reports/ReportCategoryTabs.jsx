"use client";

import { cn } from "@/lib/utils";
import { FELLOWSHIP_REPORT_CATEGORY_TABS } from "@/lib/mock/fellowshipReportsMockData";

export function ReportCategoryTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-6 border-b border-border px-4">
      {FELLOWSHIP_REPORT_CATEGORY_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "border-b-2 pb-3 pt-3 text-sm font-medium transition-colors",
            active === tab ? "border-interactive-500 text-interactive-600" : "border-transparent text-ink-subtle hover:text-ink"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
