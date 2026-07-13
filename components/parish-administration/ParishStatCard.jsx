"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function ParishStatCard({ label, value, sublabel, icon: Icon, href, viewLabel }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-ink-subtle">{label}</p>
          <p className="mt-0.5 text-xl font-bold text-ink font-display">{value}</p>
          <p className="text-xs text-ink-subtle">{sublabel}</p>
        </div>
      </div>

      {href && (
        <Link href={href} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          {viewLabel}
          <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}
