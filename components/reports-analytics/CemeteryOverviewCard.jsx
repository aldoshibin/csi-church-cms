"use client";

import Link from "next/link";
import { Cross, TicketCheck, LandPlot, Wrench, ArrowRight } from "lucide-react";
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

export function CemeteryOverviewCard({ data }) {
  if (!data) return null;
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Cemetery Overview</h3>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Tile icon={Cross} iconBg="bg-[#DCFCE7]" iconColor="text-[#16A34A]" value={data.stats.totalBurials} label="Total Burials" />
        <Tile icon={TicketCheck} iconBg="bg-[#FFEDD5]" iconColor="text-[#EA580C]" value={data.stats.burialPlotsSold} label="Burial Plots Sold" />
        <Tile icon={LandPlot} iconBg="bg-[#F3E8FF]" iconColor="text-[#7C3AED]" value={data.stats.availablePlots} label="Available Plots" />
        <Tile icon={Wrench} iconBg="bg-[#DBEAFE]" iconColor="text-[#2563EB]" value={data.stats.maintenanceRequests} label="Maintenance Requests" />
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-subtle">Recent Burials</p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-canvas text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-3 py-2.5">Name</th>
                <th className="px-3 py-2.5">Burial Date</th>
                <th className="px-3 py-2.5">Location</th>
                <th className="px-3 py-2.5">Age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.recentBurials.map((row) => (
                <tr key={row.name}>
                  <td className="px-3 py-2.5 font-medium text-ink">{row.name}</td>
                  <td className="px-3 py-2.5 text-ink-muted">{formatDate(row.burialDate)}</td>
                  <td className="px-3 py-2.5 text-ink-muted">{row.location}</td>
                  <td className="px-3 py-2.5 text-ink">{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link href="/cemetery-management" className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-interactive-600 hover:underline">
        View All Cemeteries <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
