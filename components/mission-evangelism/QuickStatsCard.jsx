"use client";

import { Users2, HeartHandshake, Gift, Coins } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function QuickStatsCard({ stats }) {
  if (!stats) return null;
  const tiles = [
    { key: "volunteers", icon: Users2, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]", value: stats.volunteers, label: "Volunteers" },
    { key: "peopleReached", icon: HeartHandshake, iconBg: "bg-[#DBEAFE]", iconColor: "text-[#2563EB]", value: stats.peopleReached, label: "People Reached" },
    { key: "foodPackets", icon: Gift, iconBg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]", value: stats.foodPacketsDistributed, label: "Food Packets Distributed" },
    { key: "expenditure", icon: Coins, iconBg: "bg-[#FFEDD5]", iconColor: "text-[#EA580C]", value: formatCurrency(stats.totalExpenditure), label: "Total Expenditure" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="text-sm font-semibold text-ink">Quick Stats</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {tiles.map((tile) => (
          <div key={tile.key} className="flex flex-col gap-2 rounded-md border border-border p-3">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${tile.iconBg} ${tile.iconColor}`}>
              <tile.icon className="h-4 w-4" />
            </span>
            <p className="text-lg font-bold text-ink">{tile.value}</p>
            <p className="text-xs text-ink-subtle">{tile.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
