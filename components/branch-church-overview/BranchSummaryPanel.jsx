"use client";

import { Church, XCircle, User, Users, GraduationCap } from "lucide-react";

const ICON_MAP = { church: Church, "x-circle": XCircle, user: User, users: Users, "graduation-cap": GraduationCap };


export function BranchSummaryPanel({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Branch Summary</h3>
      <ul className="space-y-3">
        {summary.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Church;
          return (
            <li key={item.label} className="flex items-center gap-2.5 text-sm">
              <Icon className="h-4 w-4 shrink-0 text-interactive-500" />
              <span className="flex-1 text-ink">{item.label}</span>
              <span className="font-semibold text-ink">{item.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
