"use client";

import { ClipboardList, CalendarClock, CheckCircle2, Hourglass } from "lucide-react";

export function AssignmentOverviewCard({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "totalAssignments", label: "Total Assignments", icon: ClipboardList, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "upcomingAssignments", label: "Upcoming Assignments", icon: CalendarClock, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
    { key: "completedAssignments", label: "Completed Assignments", icon: CheckCircle2, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "pendingAssignments", label: "Pending Assignments", icon: Hourglass, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  ];
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-ink">Assignment Overview</h3>
        <select className="h-8 rounded-md border border-border bg-white px-2 text-xs text-ink-muted">
          <option>This Month</option>
        </select>
      </div>
      <div className="flex flex-col gap-3.5">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => {
          const card = stats[key];
          return (
            <div key={key} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-ink-subtle">{label}</p>
                <p className="font-display text-lg font-bold leading-tight text-ink">{card.value}</p>
              </div>
              <span className={`shrink-0 text-xs font-medium ${card.trendUp ? "text-success-600" : "text-danger-600"}`}>
                {card.trendUp ? "↑" : "↓"} {card.delta} from last month
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
