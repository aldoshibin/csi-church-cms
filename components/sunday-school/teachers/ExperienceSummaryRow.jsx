"use client";

import { Monitor, User, Users, UserCog } from "lucide-react";

const STYLES = [
  { icon: Monitor, iconBg: "bg-interactive-50", iconColor: "text-interactive-600" },
  { icon: User, iconBg: "bg-warning-50", iconColor: "text-warning-600" },
  { icon: Users, iconBg: "bg-[#FCE7F3]", iconColor: "text-[#DB2777]" },
  { icon: UserCog, iconBg: "bg-success-50", iconColor: "text-success-600" },
];

export function ExperienceSummaryRow({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-ink">Experience Summary</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((group, i) => {
          const style = STYLES[i % STYLES.length];
          return (
            <div key={group.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.iconBg}`}>
                <style.icon className={`h-4 w-4 ${style.iconColor}`} />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-ink-subtle">{group.label}</p>
                <p className="font-display text-lg font-bold text-ink">{group.count} Teachers</p>
                <p className="text-xs text-ink-subtle">{group.pct}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
