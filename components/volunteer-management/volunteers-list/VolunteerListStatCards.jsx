"use client";

import Link from "next/link";
import { Users, CheckCircle2, Building2, Clock } from "lucide-react";

export function VolunteerListStatCards({ stats }) {
  if (!stats) return null;

  const cards = [
    {
      key: "totalVolunteers",
      label: "Total Volunteers",
      value: stats.totalVolunteers,
      icon: Users,
      iconBg: "bg-success-50",
      iconColor: "text-success-600",
      sublabel: "View all volunteers",
    },
    {
      key: "activeVolunteers",
      label: "Active Volunteers",
      value: stats.activeVolunteers,
      icon: CheckCircle2,
      iconBg: "bg-interactive-50",
      iconColor: "text-interactive-600",
      sublabel: `${stats.activePercent}% of total`,
    },
    {
      key: "ministriesTeams",
      label: "Ministries / Teams",
      value: stats.ministriesTeams,
      icon: Building2,
      iconBg: "bg-[#F3E8FF]",
      iconColor: "text-[#7C3AED]",
      sublabel: "View all ministries",
      href: "/volunteer-management/ministries-teams",
    },
    {
      key: "totalServiceHours",
      label: "Total Service Hours",
      value: stats.totalServiceHours.toLocaleString(),
      icon: Clock,
      iconBg: "bg-warning-50",
      iconColor: "text-warning-600",
      sublabel: "This month",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.key} className="rounded-lg border border-border bg-white p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${card.iconBg} ${card.iconColor}`}>
              <card.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-ink-subtle">{card.label}</p>
              <p className="mt-0.5 font-display text-2xl font-bold text-ink">{card.value}</p>
              {card.href ? (
                <Link href={card.href} className="text-xs font-medium text-interactive-500 hover:underline">
                  {card.sublabel}
                </Link>
              ) : (
                <p className="text-xs text-ink-subtle">{card.sublabel}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
