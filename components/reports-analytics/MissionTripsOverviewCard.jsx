"use client";

import * as React from "react";
import Link from "next/link";
import { Briefcase, MapPin, Users2, Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

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

export function MissionTripsOverviewCard({ data }) {
  const [range, setRange] = React.useState("This Year");
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Mission Trips Overview</h3>
        <select
          value={range} onChange={(e) => setRange(e.target.value)}
          className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted"
        >
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile icon={Briefcase} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" value={data.stats.totalTrips} label="Total Trips" />
        <Tile icon={MapPin} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" value={data.stats.destinations} label="Destinations" />
        <Tile icon={Users2} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" value={data.stats.participants} label="Participants" />
        <Tile icon={Calendar} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" value={data.stats.daysOfOutreach} label="Days of Outreach" />
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Top Mission Trips by Participants</p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-3 py-2.5">Trip Name</th>
                <th className="px-3 py-2.5">Destination</th>
                <th className="px-3 py-2.5">Start Date</th>
                <th className="px-3 py-2.5">Participants</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.topTrips.map((trip) => (
                <tr key={trip.id}>
                  <td className="px-3 py-2.5 font-medium text-ink">{trip.name}</td>
                  <td className="px-3 py-2.5 text-ink-muted">{trip.destination}</td>
                  <td className="px-3 py-2.5 text-ink-muted">{formatDate(trip.startDate)}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-surface-canvas">
                        <div className="h-full rounded-full bg-success-500" style={{ width: `${Math.min(100, (trip.participants / data.maxParticipants) * 100)}%` }} />
                      </div>
                      <span className="font-medium text-ink">{trip.participants}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link href="/mission-evangelism/mission-trips" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        View All Mission Trips <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
