"use client";

import { Calendar, Inbox, PartyPopper, Music, Users } from "lucide-react";

export function EventsStatsCards({ stats }) {
  const cards = [
    { key: "totalEvents", label: "Total Events", icon: Calendar, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "upcomingEvents", label: "Upcoming Events", icon: Inbox, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "ongoingEvents", label: "Ongoing Events", icon: PartyPopper, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "completedEvents", label: "Completed Events", icon: Music, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
    { key: "totalRegistrations", label: "Total Registrations", icon: Users, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
        const card = stats?.[key];
        if (!card) return null;
        return (
          <div key={key} className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="mt-1 truncate font-display text-xl font-bold text-ink">{card.value}</p>
              <p className={`mt-1 text-xs font-medium ${card.flat ? "text-ink-subtle" : card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.flat ? card.delta : `${card.trendUp ? "↑" : "↓"} ${card.delta} vs last month`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
