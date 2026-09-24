"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LayoutList, ChevronRight } from "lucide-react";

export function ReportCategoriesCard({ categories = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center gap-2">
        <LayoutList className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">Report Categories</h3>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {categories.map((cat) => {
          const Icon = Icons[cat.icon] ?? Icons.FileText;
          return (
            <Link
              key={cat.key} href={cat.href}
              className="flex items-center justify-between gap-2 rounded-md px-2 py-2.5 text-sm text-ink hover:bg-surface-canvas"
            >
              <span className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-ink-subtle" /> {cat.label}
              </span>
              <ChevronRight className="h-4 w-4 text-ink-subtle" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
