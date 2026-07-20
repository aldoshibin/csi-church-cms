"use client";

import { Droplets, User, UserRound, Calendar, CalendarDays } from "lucide-react";

export function BaptismStatCards({ cards }) {
  const items = [
    { label: "Total Baptisms", value: cards.total, icon: Droplets, tone: "bg-interactive-50 text-interactive-600" },
    { label: "Male", value: cards.male.value, sub: `(${cards.male.percent}%)`, icon: User, tone: "bg-[#F3EEFE] text-[#8B5CF6]" },
    { label: "Female", value: cards.female.value, sub: `(${cards.female.percent}%)`, icon: UserRound, tone: "bg-[#FDECEC] text-[#EF4444]" },
    { label: "This Year", value: cards.thisYear, icon: Calendar, tone: "bg-accent-50 text-accent-600" },
    { label: "This Month", value: cards.thisMonth, icon: CalendarDays, tone: "bg-success-50 text-success-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-card">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.tone}`}>
            <item.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-ink-subtle">{item.label}</p>
            <p className="text-xl font-bold text-ink font-display">
              {item.value} {item.sub && <span className="text-sm font-normal text-ink-subtle">{item.sub}</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
