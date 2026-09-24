"use client";

import { Calendar, BookOpen, UsersRound, Music, HandHeart } from "lucide-react";

export function GroupActivitiesOverviewRow({ overview }) {
  const cards = [
    { key: "totalActivities", label: "Total Activities", icon: Calendar, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "bibleStudies", label: "Bible Studies", icon: BookOpen, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "fellowships", label: "Fellowships", icon: UsersRound, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
    { key: "worshipEvents", label: "Worship Events", icon: Music, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
    { key: "outreachEvents", label: "Outreach Events", icon: HandHeart, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Group Activities Overview</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
          const card = overview?.[key];
          if (!card) return null;
          return (
            <div key={key} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                <Icon className={`h-4 w-4 ${iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-ink-subtle">{label}</p>
                <p className="font-display text-lg font-bold text-ink">{card.value}</p>
                <p className={`text-xs font-medium ${card.flat ? "text-ink-subtle" : "text-success-600"}`}>
                  {card.flat ? card.sub : `↑ ${card.delta} vs last month`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
