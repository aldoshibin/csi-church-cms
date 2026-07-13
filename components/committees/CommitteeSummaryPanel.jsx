"use client";

import { Users2, XCircle, ClipboardCheck, Users, UserCheck } from "lucide-react";

const ICON_MAP = {
  "Active Committees": Users2,
  "Inactive Committees": XCircle,
  "Total Activities (This Month)": ClipboardCheck,
  "Total Members": Users,
  "Avg. Member Participation": UserCheck,
};


export function CommitteeSummaryPanel({ summary = [] }) {
  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-interactive-500">Committee Summary</h3>
      <ul className="space-y-3">
        {summary.map((item) => {
          const Icon = ICON_MAP[item.label] ?? Users2;
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
