"use client";

import { Megaphone, CalendarCheck, Clock, FileText, Trash2 } from "lucide-react";

export function AnnouncementStatsRow({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalAnnouncements", label: "Total Announcements", icon: Megaphone, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "published", label: "Published", icon: CalendarCheck, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "scheduled", label: "Scheduled", icon: Clock, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "drafts", label: "Drafts", icon: FileText, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "expired", label: "Expired", icon: Trash2, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
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
