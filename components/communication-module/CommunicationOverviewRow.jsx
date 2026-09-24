"use client";

import { Megaphone, MessageSquareText, Mail, Phone } from "lucide-react";

export function CommunicationOverviewRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalAnnouncements", label: "Total Announcements", icon: Megaphone, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "messagesSent", label: "Messages Sent", icon: MessageSquareText, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "emailsSent", label: "Emails Sent", icon: Mail, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "smsSent", label: "SMS Sent", icon: Phone, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-card">
      <h3 className="mb-4 text-base font-semibold text-ink">Communication Overview</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
          const card = stats[key];
          return (
            <div key={key} className={`rounded-lg border border-border p-4 ${iconBg}`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
              <p className="mt-2 font-display text-xl font-bold text-ink">{card.value.toLocaleString?.() ?? card.value}</p>
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className={`mt-1 text-[11px] font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.trendUp ? "↑" : "↓"} {card.delta} vs last 30 days
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
