"use client";

import Link from "next/link";
import { HandHeart } from "lucide-react";

export function PrayerAreasSection({ areas = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">Prayer Areas</h3>
        <Link href="#" className="text-sm font-medium text-interactive-500 hover:underline">Manage Areas &gt;</Link>
      </div>
      <p className="mb-4 text-sm text-ink-subtle">Manage the key prayer focus areas for our church.</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {areas.map((a) => (
          <div key={a.name} className="rounded-lg border border-border p-3">
            <span className={`flex h-9 w-9 items-center justify-center rounded-full ${a.iconBg} ${a.iconColor}`}>
              <HandHeart className="h-4 w-4" />
            </span>
            <p className="mt-2 text-sm font-medium text-ink">{a.name}</p>
            <p className="text-xs text-ink-subtle">{a.events} Events</p>
          </div>
        ))}
      </div>
    </div>
  );
}
