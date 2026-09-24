"use client";

import { Eye, Mail, MessageSquareText, Users2 } from "lucide-react";

export function EngagementOverviewCard({ engagement }) {
  if (!engagement) return null;
  const cards = [
    { key: "views", label: "Views", value: engagement.views, icon: Eye, bg: "bg-success-50", color: "text-success-600" },
    { key: "emailsSent", label: "Emails Sent", value: engagement.emailsSent, icon: Mail, bg: "bg-[#F3E8FF]", color: "text-[#7C3AED]" },
    { key: "smsSent", label: "SMS Sent", value: engagement.smsSent, icon: MessageSquareText, bg: "bg-warning-50", color: "text-warning-600" },
    { key: "engagements", label: "Engagements", value: engagement.engagements, icon: Users2, bg: "bg-interactive-50", color: "text-interactive-600" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Engagement Overview</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, value, icon: Icon, bg, color }) => (
          <div key={key} className={`flex flex-col items-center gap-1.5 rounded-lg border border-border p-3 text-center ${bg}`}>
            <Icon className={`h-5 w-5 ${color}`} />
            <p className={`font-display text-lg font-bold ${color}`}>{value.toLocaleString()}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
