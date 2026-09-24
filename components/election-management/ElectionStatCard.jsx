"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ElectionStatCard({ icon: Icon, iconBg, iconColor, label, value, sub, linkLabel, href }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-ink-subtle">{label}</span>
      </div>
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      {linkLabel ? (
        <Link href={href} className="flex items-center gap-1 text-xs font-medium text-interactive-600 hover:underline">
          {linkLabel} <ArrowRight className="h-3 w-3" />
        </Link>
      ) : (
        <p className="text-xs text-ink-subtle">{sub}</p>
      )}
    </div>
  );
}
