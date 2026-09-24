"use client";

import { CalendarCheck2, Sparkles, BookOpen, FileText } from "lucide-react";

export function MemberStatisticsCard({ stats }) {
  if (!stats) return null;
  const cards = [
    { key: "meetingsAttended", label: "Meetings Attended", icon: CalendarCheck2, iconBg: "bg-success-50", iconColor: "text-success-600" },
    { key: "activitiesJoined", label: "Activities Joined", icon: Sparkles, iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
    { key: "bibleStudies", label: "Bible Studies", icon: BookOpen, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
    { key: "documents", label: "Documents", icon: FileText, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  ];

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Member Statistics</h3>
      <div className="grid grid-cols-2 gap-3">
        {cards.map(({ key, label, icon: Icon, iconBg, iconColor }) => (
          <div key={key} className="rounded-lg border border-border p-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBg}`}>
              <Icon className={`h-4 w-4 ${iconColor}`} />
            </span>
            <p className="mt-2 font-display text-lg font-bold text-ink">{stats[key]}</p>
            <p className="text-xs text-ink-subtle">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
