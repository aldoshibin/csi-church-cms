"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function ParishStatCard({ label, value, sublabel, icon: Icon, href, viewLabel }) {
  return (
    <div className=" border border-border bg-white p-4 shadow-card">
      <div className="flex justify-center items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#009688] text-white shadow-[0_8px_16px_rgba(0,150,199,0.20)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-ink-subtle">{label}</p>
          <p className="mt-0.5 text-xl font-bold text-ink font-display">{value}</p>
          <p className="text-xs text-ink-subtle">{sublabel}</p>
           {href && (
        <Link href={href} className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-interactive-500 hover:underline">
          {viewLabel}
          <ArrowRight className="h-3 w-3" />
        </Link>
      )}
        </div>
      </div>

     
    </div>
  );
}
