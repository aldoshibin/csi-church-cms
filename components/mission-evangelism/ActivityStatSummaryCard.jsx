"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ActivityStatSummaryCard({ icon: Icon, title, stats = [], linkLabel, href }) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-interactive-600" />
        <h3 className="text-sm font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md bg-surface-canvas px-3 py-3 text-center">
            <p className="text-lg font-bold text-ink">{stat.value}</p>
            <p className="mt-1 text-xs text-ink-subtle">{stat.label}</p>
          </div>
        ))}
      </div>
      {linkLabel && (
        <Link href={href ?? "#"} className="mt-4 flex items-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
          {linkLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
