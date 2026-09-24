"use client";

import * as React from "react";
import Link from "next/link";
import { HeartHandshake, Users2, MapPin, HandHeart, ArrowRight } from "lucide-react";

function Tile({ icon: Icon, iconBg, iconColor, value, label }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-border p-3">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${iconBg} ${iconColor}`}>
        <Icon className="h-4 w-4" />
      </span>
      <p className="text-lg font-bold text-ink">{value}</p>
      <p className="text-xs text-ink-subtle">{label}</p>
    </div>
  );
}

export function OutreachProgramsSummaryCard({ data }) {
  const [range, setRange] = React.useState("This Year");
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Outreach Programs Summary</h3>
        <select
          value={range} onChange={(e) => setRange(e.target.value)}
          className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted"
        >
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile icon={HeartHandshake} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" value={data.stats.totalPrograms} label="Total Programs" />
        <Tile icon={Users2} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" value={data.stats.beneficiaries} label="Beneficiaries" />
        <Tile icon={MapPin} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" value={data.stats.locations} label="Locations" />
        <Tile icon={HandHeart} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" value={data.stats.volunteers} label="Volunteers" />
      </div>

      <div className="mt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Program Impact by Category</p>
        <div className="flex flex-col gap-3">
          {data.impactByCategory.map((row) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="w-32 shrink-0 text-sm text-ink-muted">{row.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-canvas">
                <div className="h-full rounded-full bg-success-500" style={{ width: `${row.pct}%` }} />
              </div>
              <span className="w-10 shrink-0 text-right text-sm font-medium text-ink">{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <Link href="/mission-evangelism/outreach-programs" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        View All Outreach Programs <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
