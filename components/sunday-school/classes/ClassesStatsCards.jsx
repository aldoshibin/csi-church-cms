"use client";

import { BookOpen, Users, User, CalendarCheck, BookX } from "lucide-react";

export function ClassesStatsCards({ stats }) {
  const cards = [
    { key: "totalClasses", label: "Total Classes", icon: BookOpen, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "totalStudents", label: "Total Students", icon: Users, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "totalTeachers", label: "Total Teachers", icon: User, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "activeClasses", label: "Active Classes", icon: CalendarCheck, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "inactiveClasses", label: "Inactive Classes", icon: BookX, iconBg: "bg-danger-50", iconColor: "text-danger-600" },
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
              {card.delta ? (
                <p className={`mt-1 text-xs font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                  {card.trendUp ? "↑" : "↓"} {card.delta} vs last month
                </p>
              ) : (
                <p className={`mt-1 text-xs font-medium ${key === "inactiveClasses" ? "text-danger-600" : "text-interactive-600"}`}>{card.sub}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
