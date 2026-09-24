"use client";

import { BookOpen, Sparkles, GraduationCap, Heart, Users, Cross } from "lucide-react";

const ICONS = [BookOpen, Sparkles, GraduationCap, Heart, Users, Cross];
const COLORS = [
  { iconBg: "bg-success-50", iconColor: "text-success-600" },
  { iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { iconBg: "bg-[#F3E8FF]", iconColor: "text-[#7C3AED]" },
  { iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  { iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  { iconBg: "bg-danger-50", iconColor: "text-danger-600" },
];

export function PopularTopicsRow({ topics = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Popular Topics</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {topics.map((topic, i) => {
          const Icon = ICONS[i % ICONS.length];
          const style = COLORS[i % COLORS.length];
          return (
            <div key={topic.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}>
                <Icon className={`h-4 w-4 ${style.iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{topic.label}</p>
                <p className="text-xs text-ink-subtle">{topic.count} Lessons</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
