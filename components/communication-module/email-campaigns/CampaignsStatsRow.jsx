"use client";

import { Mail, Send, MailOpen, MousePointerClick, Users2 } from "lucide-react";

export function CampaignsStatsRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalCampaigns", label: "Total Campaigns", icon: Mail, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "sentCampaigns", label: "Sent Campaigns", icon: Send, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "openRate", label: "Open Rate", icon: MailOpen, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "clickRate", label: "Click Rate", icon: MousePointerClick, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "subscribers", label: "Subscribers", icon: Users2, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
        const card = stats[key];
        return (
          <div key={key} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-ink-subtle">{label}</p>
              <p className="font-display text-lg font-bold leading-tight text-ink">{card.value}</p>
              <p className="text-[11px] text-ink-subtle">{card.sub}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
