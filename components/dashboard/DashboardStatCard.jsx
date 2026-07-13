"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";


export function DashboardStatCard({ label, value, delta, icon: Icon, href, viewLabel }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-ink-subtle">{label}</p>
          <p className="mt-0.5 text-xl font-bold text-ink font-display">{value}</p>
        </div>
      </div>

      <p className="mt-2 flex items-center gap-1 text-xs text-ink-subtle">
        <TrendingUp className="h-3 w-3 text-success-500" />
        {delta}
      </p>

      {href && (
        <Link href={href} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          {viewLabel}
          <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}
