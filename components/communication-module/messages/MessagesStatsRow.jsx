"use client";

import { MessageSquareText, Send, Inbox, Users2, Clock } from "lucide-react";

export function MessagesStatsRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalMessages", label: "Total Messages", icon: MessageSquareText, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "sentMessages", label: "Sent Messages", icon: Send, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "receivedMessages", label: "Received Messages", icon: Inbox, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "activeConversations", label: "Active Conversations", icon: Users2, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "scheduled", label: "Scheduled", icon: Clock, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
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
